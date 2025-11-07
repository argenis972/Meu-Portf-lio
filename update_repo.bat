@echo off
echo ==========================================
echo Atualizando repositório Meu Portfólio...
echo ==========================================

if not exist .git (
    echo Inicializando repositório Git...
    git init
    git remote add origin https://github.com/argenis972/Meu-Portf-lio.git
)

echo Adicionando arquivos...
git add .

for /f "tokens=1-3 delims=/ " %%a in ("%date%") do (
    set DATE=%%c-%%b-%%a
)
set TIME=%time%
git commit -m "Atualização automática do portfólio - %DATE% %TIME%"

git branch -M main
git push -u origin main

echo.
echo ✅ Atualização concluída com sucesso!
pause
