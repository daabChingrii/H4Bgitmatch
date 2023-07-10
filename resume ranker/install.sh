#!/bin/bash
find . \( -name __pycache__ -o -name "*.pyc" \) -delete
python3 -m venv venv
# Check the operating system
if [[ "$OSTYPE" == "msys" ]]; then
    # Windows
    source venv/Scripts/activate
else
    # Unix-like systems (macOS, Linux)
    source venv/bin/activate
fi
pip install --no-cache-dir -r requirements.txt