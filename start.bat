@echo off
title CV LNWEB - Serveur Local
echo Lancement du CV Web...
powershell -ExecutionPolicy Bypass -File "%~dp0server.ps1"
pause

