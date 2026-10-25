# 部署说明

> 要求：使用**国内平台**部署，**禁止 Vercel / Railway**。

## 前端（纯静态）
- 托管方式：对象存储（OSS / COS）+ CDN，或国内静态托管服务
- 内容：`frontend/` 目录下的静态文件直接托管即可
- 建议开启 HTTPS 与缓存策略

## 后端（FastAPI）
- 运行环境：国内云服务器（阿里云 / 腾讯云 / 华为云）或容器服务
- 启动：`gunicorn -k uvicorn.workers.UvicornWorker main:app -b 0.0.0.0:8000`
- 前置：Nginx 反向代理 + TLS，关闭对外直连调试端口
- 配置：通过 `.env` 注入密钥，**切勿硬编码**

## 合规提醒
- 全链路 HTTPS / TLS，患者数据加密存储
- 满足《个人信息保护法》与医疗卫生机构网络安全要求
- 访问分级授权 + 审计日志

## 待定
- CI/CD 流水线
- 容器化（Dockerfile / docker-compose）
- 监控与告警
