# 后端（FastAPI 骨架）

最小可运行骨架，含健康检查与 CORS 配置。

## 运行

```bash
pip install -r requirements.txt
uvicorn main:app --reload
```

- API 文档（Swagger）：http://127.0.0.1:8000/docs
- 健康检查：http://127.0.0.1:8000/health

## 配置

复制 `.env.example` 为 `.env` 并填入真实值（如 `DEEPSEEK_API_KEY`、`DATABASE_URL`）。
`.env` 已被根目录 `.gitignore` 忽略，切勿提交真实密钥。

## 下一步

- 接入 AI 模型（如 DeepSeek）做风险评估
- 设计数据库（参见 `docs/数据库设计.md`）
- 实现诊前 / 诊中 / 诊后业务路由
