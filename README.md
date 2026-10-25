# 乳腺肿瘤全周期智能管理平台（前端原型）

覆盖**诊前 — 诊中 — 诊后**全流程的乳腺肿瘤数字化管理演示站点。
本仓库为**静态前端原型**，用于产品形态验证与需求对齐，尚未接入后端 / AI 模型 / 数据库。

## 功能地图

- **诊前 (prediagnosis.html)**：AI 风险评估（演示评分）、科普教育、乳腺自查指南、预约筛查
- **诊中 (diagnosis.html)**：智能分诊（演示）、电子病历 EMR、MDT 多学科会诊系统
- **诊后 (postdiagnosis.html)**：术后康复、用药提醒（localStorage 演示）、复发监测、心理疏导

## 目录结构

```
breast-tumor-platform/
├─ index.html              首页 / 三大阶段总览
├─ prediagnosis.html       诊前
├─ diagnosis.html          诊中
├─ postdiagnosis.html      诊后
└─ assets/
   ├─ css/style.css        共享设计系统
   └─ js/main.js           交互逻辑（风险评估、用药提醒）
```

## 本地运行

```bash
# 任选其一
python -m http.server 8000
# 然后访问 http://127.0.0.1:8000
```

## 免责声明

本站点所有 AI 评估、提醒与内容均为**示例演示**，不构成医学诊断或治疗建议。
任何健康问题请务必咨询具备资质的医疗机构与执业医师。

---

> 后续规划：升级为 React + TypeScript 前端，接入 FastAPI / NestJS 后端、
> PostgreSQL 与对象存储，落地患者主索引（EMPI）打通三阶段数据，并满足医疗数据合规要求。
