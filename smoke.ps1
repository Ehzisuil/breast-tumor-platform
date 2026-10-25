# 冒烟测试：检查关键文件是否存在
$ErrorActionPreference = "Stop"

Write-Host "== 前端文件检查 =="
$frontendFiles = @(
    "frontend/index.html",
    "frontend/prediagnosis.html",
    "frontend/diagnosis.html",
    "frontend/postdiagnosis.html",
    "frontend/assets/css/style.css",
    "frontend/assets/js/main.js"
)
foreach ($f in $frontendFiles) {
    if (Test-Path $f) { Write-Host "OK  $f" } else { Write-Error "缺失 $f" }
}

Write-Host "== 后端骨架检查 =="
if (Test-Path "backend/main.py") { Write-Host "OK  backend/main.py" } else { Write-Error "缺失 backend/main.py" }
if (Test-Path "backend/requirements.txt") { Write-Host "OK  backend/requirements.txt" } else { Write-Error "缺失 backend/requirements.txt" }

Write-Host "== 工程文件检查 =="
foreach ($f in @("AGENTS.md", "README.md", "LICENSE", ".gitignore")) {
    if (Test-Path $f) { Write-Host "OK  $f" } else { Write-Error "缺失 $f" }
}

Write-Host "冒烟测试通过 ✅"
