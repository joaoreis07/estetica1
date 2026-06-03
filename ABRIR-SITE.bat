@echo off
cd /d "%~dp0"
echo.
echo  Iniciando o site da Luciana Domingues...
echo  Aguarde o navegador abrir em http://localhost:5173
echo.
echo  IMPORTANTE: nao feche esta janela enquanto estiver vendo o site.
echo  Para encerrar, pressione Ctrl+C ou feche esta janela.
echo.
if not exist "node_modules" (
  echo Instalando dependencias pela primeira vez...
  call npm install
)
start http://localhost:5173
call npm run dev
pause
