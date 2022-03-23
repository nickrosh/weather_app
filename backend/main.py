from fastapi import FastAPI
from backend import routes

app = FastAPI()

app.include_router(routes.router)