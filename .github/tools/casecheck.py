# .github/tools/casecheck.py
#!/usr/bin/env python3
import os, sys
from pathlib import Path
target = Path(__file__).resolve().parents[2] / "core/scripts/tools/casecheck.py"
if not target.exists():
    print(f"❌ Missing: {target}", file=sys.stderr); sys.exit(2)
os.execvp(sys.executable, [sys.executable, str(target)] + sys.argv[1:])