"""乳腺肿瘤全周期智能管理平台 - 后端骨架

当前为最小可运行骨架：提供健康检查与 API 文档占位。
后续在此接入：AI 风险评估、电子病历、MDT 会诊、随访提醒等业务模块。
"""
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(
    title="乳腺肿瘤全周期智能管理平台",
    version="0.1.0",
    description="诊前-诊中-诊后全周期智能管理（后端骨架）",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def read_root():
    return {
        "service": "breast-tumor-platform",
        "status": "ok",
        "docs": "/docs",
        "phases": ["pre", "in", "post"],
    }


@app.get("/health")
def health():
    return {"status": "healthy"}


# TODO: 业务路由示例（待实现）
# - POST /api/risk-assessment   AI 风险评估
# - GET  /api/records           电子病历
# - POST /api/mdt/cases         MDT 会诊
# - POST /api/med-reminders     用药提醒
# - GET  /api/follow-up         复发监测 / 随访计划
