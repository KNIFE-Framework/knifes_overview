#!/usr/bin/env bash
# KNIFE K000122: lokálny prepis zvuku na text s časovými značkami (Mac, Apple Silicon)
#
# Použitie:   ./prepis.sh sk "WhatsApp Audio 2026-11-15 at 09.51.17.opus"
#             ./prepis.sh en lecture.m4a meeting.mp3
# Voliteľné premenné prostredia:
#   GLOSSARY="Kazicka, KNIFE, BaZi"   mená a pojmy, ktoré Whisper často pokazí
#   SUMMARY=1                         po prepise urobí zhrnutie lokálnou AI (Ollama)
#   LLM_MODEL="qwen2.5:7b"            model v Ollame pre zhrnutie
set -euo pipefail

LANGCODE="${1:?Použitie: prepis.sh <sk|en|cs|...> <súbor> [súbor ...]}"
shift
[ "$#" -ge 1 ] || { echo "Chýba súbor so zvukom." >&2; exit 1; }

ENVDIR="$HOME/whisper-env"
MODEL="mlx-community/whisper-large-v3-turbo"

# 1. Jednorazová inštalácia (preskočí sa, ak už existuje)
if [ ! -x "$ENVDIR/bin/mlx_whisper" ]; then
  echo ">> Inštalujem nástroje do $ENVDIR (jednorazovo)"
  python3 -m venv "$ENVDIR"
  "$ENVDIR/bin/pip" install -q mlx-whisper imageio-ffmpeg
  ln -sf "$("$ENVDIR/bin/python" -c 'import imageio_ffmpeg;print(imageio_ffmpeg.get_ffmpeg_exe())')" "$ENVDIR/bin/ffmpeg"
fi
export PATH="$ENVDIR/bin:$PATH"

# 2. Prepis každého súboru zvlášť (bodky v názvoch WhatsApp súborov robia problémy)
for f in "$@"; do
  [ -f "$f" ] || { echo "Súbor neexistuje: $f" >&2; continue; }
  base="$(basename "$f")"
  safe="$(printf '%s' "${base%.*}" | tr -c 'A-Za-z0-9_-' '_')"
  outdir="$(dirname "$f")/prepis"
  mkdir -p "$outdir"
  echo ">> Prepisujem: $base  (jazyk: $LANGCODE)"
  args=(--model "$MODEL" --language "$LANGCODE" --output-format all
        --output-dir "$outdir" --output-name "$safe")
  [ -n "${GLOSSARY:-}" ] && args+=(--initial-prompt "$GLOSSARY")
  mlx_whisper "$f" "${args[@]}" > /dev/null
  echo "   hotovo: $outdir/$safe.{txt,srt,vtt,tsv,json}"

  # 3. Voliteľné zhrnutie lokálnou AI cez Ollama (nič nejde von z počítača)
  if [ "${SUMMARY:-0}" = "1" ]; then
    if ! command -v ollama > /dev/null; then
      echo "   Zhrnutie preskočené: Ollama nie je nainštalovaná (https://ollama.com)." >&2
      continue
    fi
    SRT="$outdir/$safe.srt" OUT="$outdir/$safe.summary.md" \
    LLM="${LLM_MODEL:-qwen2.5:7b}" LANGCODE="$LANGCODE" python3 - <<'PY'
import json, os, urllib.request
srt = open(os.environ["SRT"], encoding="utf-8").read()
prompt = (
  f"Toto je automatický prepis nahrávky (jazyk {os.environ['LANGCODE']}) vo formáte SRT s časmi od začiatku. "
  "Prepis môže obsahovať chyby. Napíš v tom istom jazyku: 1) zhrnutie v 5 vetách, "
  "2) kapitoly s časom začiatku, 3) úlohy a dohody s časom, kde odzneli. "
  "Nevymýšľaj nič, čo v prepise nie je.\n\n" + srt)
req = urllib.request.Request("http://localhost:11434/api/generate",
  data=json.dumps({"model": os.environ["LLM"], "prompt": prompt, "stream": False}).encode(),
  headers={"Content-Type": "application/json"})
with urllib.request.urlopen(req, timeout=1800) as r:
  open(os.environ["OUT"], "w", encoding="utf-8").write(json.load(r)["response"])
PY
    echo "   zhrnutie: $outdir/$safe.summary.md"
  fi
done
