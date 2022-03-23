from fastapi import APIRouter


router = APIRouter(
    prefix='/api/v1',
    tags=['weather']
)

@router.get('/')
async def read_root():
    return {'Message': 'Hello, World!'}