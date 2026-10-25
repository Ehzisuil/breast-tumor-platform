# AGENTS.md — 乳腺肿瘤全周期智能管理平台

本文件供 AI 编程助手（Agent）阅读，帮助你快速理解项目并安全协作。

## 项目简介
乳腺肿瘤全周期智能管理平台，覆盖**诊前 — 诊中 — 诊后**三大阶段：
- 诊前：AI 风险评估、科普、自查指南、预约筛查
- 诊中：智能分诊、电子病历（EMR）、MDT 多学科会诊
- 诊后：术后康复、用药提醒、复发监测、心理疏导

当前仓库处于 **前端原型 + 后端骨架** 阶段。

## 仓库结构
- `frontend/`：纯静态前端（HTML/CSS/JS），可独立运行
- `backend/`：FastAPI 后端骨架（`main.py` + `requirements.txt` + `.env.example`）
- `docs/`：产品需求、架构设计、数据库设计文档
- `deploy/`：部署说明（要求国内平台，禁 Vercel/Railway）
- `协作文档/` `统筹/`：团队协作与项目统筹资料
- `smoke.ps1`：Windows 冒烟测试脚本

## 常用命令
- 前端预览：`cd frontend && python -m http.server 8000`
- 后端启动：`cd backend && pip install -r requirements.txt && uvicorn main:app --reload`
- 冒烟测试：`powershell -File smoke.ps1`

## 重要约束（务必遵守）
1. **医疗合规**：所有 AI 评估 / 提醒 / 内容仅为示例演示，前端必须保留免责声明，绝不能宣称具有诊断或治疗效力。
2. **数据合规**：患者数据需加密存储与传输，做分级授权与审计日志，满足《个人信息保护法》与医疗卫生机构网络安全要求。
3. **密钥安全**：真实密钥（API Key、数据库密码等）只放在 `.env`，且 `.env` 已被 `.gitignore` 忽略；提交请用 `.env.example` 模板。
4. **提交规范**：commit message 清楚说明改动；保持 `main` 分支可运行。

## GitHub 仓库
`https://github.com/Ehzisuil/breast-tumor-platform`
