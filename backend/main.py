from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from backend import routes


app = FastAPI()

origins = [
    'http://localhost:3000'
]

# CORS settings and what to allow
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=['*'],
    allow_headers=['*']
)

app.include_router(routes.router)
