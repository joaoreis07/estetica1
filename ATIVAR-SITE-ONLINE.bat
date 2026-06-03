@echo off
chcp 65001 >nul
echo.
echo  ============================================
echo   ATIVAR SITE + DOMINIO PERSONALIZADO
echo  ============================================
echo.
echo  Site: www.nutrilucianadomingues.com.br
echo.
echo  NO GITHUB (vai abrir no navegador):
echo  1. Branch: gh-pages  |  Folder: / (root)  -^> Save
echo  2. Custom domain: www.nutrilucianadomingues.com.br  -^> Save
echo  3. Ative "Enforce HTTPS" quando aparecer
echo.
echo  NO REGISTRO.DO DOMINIO (Registro.br etc.):
echo  CNAME:  www  -^>  joaoreis07.github.io
echo.
echo  Detalhes completos no arquivo: CONFIGURAR-DOMINIO.txt
echo.
pause
start "" "https://github.com/joaoreis07/nutriluciana01/settings/pages"
notepad "%~dp0CONFIGURAR-DOMINIO.txt"
pause
