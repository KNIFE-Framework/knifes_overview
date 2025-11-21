#!/usr/bin/env python3
"""
new_sdlc.py

Ten istý generátor ako new_sthdf, ale ak ho voláš priamo,
nastaví effective_type='sdlc' a prepošle do new_sthdf.generate().
"""

from typing import Any, Dict
from new_sthdf import generate as _generate_sthdf


def generate(ctx: Dict[str, Any]) -> None:
    ctx = dict(ctx)
    ctx["effective_type"] = "sdlc"
    return _generate_sthdf(ctx)