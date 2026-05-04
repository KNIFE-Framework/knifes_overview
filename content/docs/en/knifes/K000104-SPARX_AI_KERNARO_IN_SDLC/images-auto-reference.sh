#!/bin/bash
# append_images.sh
# Spusti z rootu K000104-SPARX_AI_KERNARO_IN_SDLC
# Pri opätovnom spustení nahradí sekciu medzi IMAGES:BEGIN a IMAGES:END

KNIFE_ROOT="$(pwd)"

find "$KNIFE_ROOT" -name "*.md" | while read mdfile; do
  md_dir="$(dirname "$mdfile")"

  # Preskočiť súbory označené ako IMAGES:SKIP
  if grep -q "<!-- IMAGES:SKIP -->" "$mdfile"; then
    echo "⊘ Skipped: $mdfile"
    continue
  fi

  # Nájdi všetky obrázky v tom istom adresári a podadresároch
  images=$(find "$md_dir" -name "*.png" -o -name "*.jpg" | sort)

  if [ -z "$images" ]; then
    continue
  fi

  # Zostav novú images sekciu
  new_section=""
  new_section+=$'\n<!-- IMAGES:BEGIN -->\n'
  new_section+=$'\n---\n'
  new_section+=$'\n## Images\n\n'
  new_section+=$'<!-- COPY-PASTE REFERENCE\n'
  new_section+=$'  Inline image (no caption):\n'
  new_section+=$'    <img src={require(\'./img/...\').default} style={{maxWidth:\'800px\',width:\'100%\'}} />\n'
  new_section+=$'\n'
  new_section+=$'  Endnote image with caption (replace [IMG-xx] with #### heading):\n'
  new_section+=$'    <a id="img-07"></a>\n'
  new_section+=$'    #### IMG-07 · Short descriptive title\n'
  new_section+=$'    <img src={require(\'./img/...\').default} style={{maxWidth:\'800px\',width:\'100%\'}} />\n'
  new_section+=$'\n'
  new_section+=$'  Reference from text:\n'
  new_section+=$'    [[IMG-07]](#img-07)\n'
  new_section+=$'    → see [[IMG-07]](#img-07)\n'
  new_section+=$'-->\n\n'

  counter=1
  while IFS= read -r imgpath; do
    imgrel="${imgpath#$md_dir/}"
    label="IMG-$(printf '%02d' $counter)"
    anchor="img-$(printf '%02d' $counter)"

    new_section+="<a id=\"${anchor}\"></a>"$'\n'
    new_section+="[${label}]"$'\n'
    new_section+="<img src={require('./${imgrel}').default} alt=\"${imgrel}\" style={{maxWidth: '800px', width: '100%'}} />"$'\n\n'

    counter=$((counter + 1))
  done <<< "$images"

  new_section+="<!-- IMAGES:END -->"

  # Ak sekcia už existuje – nahraď ju; inak appendni
  if grep -q "<!-- IMAGES:BEGIN -->" "$mdfile"; then
    # Nahraď obsah medzi markermi (vrátane markerov)
    perl -i -0pe "s|<!-- IMAGES:BEGIN -->.*?<!-- IMAGES:END -->|${new_section}|s" "$mdfile"
    echo "↻ Updated: $mdfile"
  else
    printf "%s" "$new_section" >> "$mdfile"
    echo "✚ Appended: $mdfile"
  fi

done

echo "✅ Done"