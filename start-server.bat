@echo off
title Printing Point Local Server
echo ===================================================
echo Starting Printing Point Website at:
echo http://localhost:8088/index.html
echo ===================================================
echo.
python -m http.server 8088 --bind 127.0.0.1
pause
