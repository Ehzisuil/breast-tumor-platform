# 乳腺肿瘤全周期智能管理平台

覆盖 **诊前 — 诊中 — 诊后** 全流程的乳腺肿瘤数字化管理平台。
当前阶段：**前端原型（frontend/）+ 后端骨架（backend/）**，用于产品形态验证、需求对齐与团队协同。

## 功能地图

- **诊前**：AI 风险评估、科普教育、乳腺自查指南、预约筛查
- **诊中**：智能分诊、电子病历 EMR、MDT 多学科会诊
- **诊后**：术后康复、用药提醒、复发监测、心理疏导

## 仓库结构

```
breast-tumor-platform/
├─ frontend/     静态前端（HTML/CSS/JS 原型）
├─ backend/      FastAPI 后端骨架（main.py + requirements.txt + .env.example）
├─ docs/         产品/架构/数据库设计文档
├─ deploy/       部署脚本与说明
├─ 协作文档/      团队协作资料（需求、会议纪要、分工）
├─ 统筹/          项目统筹资料（排期、里程碑）
├─ AGENTS.md     给 AI Agent 的项目说明
├─ smoke.ps1     冒烟测试脚本
├─ LICENSE
└─ .gitignore
```

## 本地运行

```bash
# 前端预览
cd frontend && python -m http.server 8000
# 浏览器访问 http://127.0.0.1:8000

# 后端启动
cd backend && pip install -r requirements.txt && uvicorn main:app --reload
# API 文档 http://127.0.0.1:8000/docs
```

## 冒烟测试

```powershell
powershell -File smoke.ps1
```

## 免责声明

本仓库所有 AI 评估、提醒与内容均为**示例演示**，不构成医学诊断或治疗建议。
任何健康问题请务必咨询具备资质的医疗机构与执业医师。

---

> 后续规划：升级 React + TypeScript 前端，接入真实 AI 模型与 PostgreSQL，
> 落地患者主索引（EMPI）打通三阶段数据，并满足医疗数据合规要求。
