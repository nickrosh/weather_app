from fastapi import APIRouter


router = APIRouter(
    prefix='/api/v1',
    tags=['weather']
)

@router.get('/')
async def read_root():
    return {'Message': 'Hello, World!'}


@router.get('/minutes')
async def get_minutes():
    return {'Message': 'here is the minutes'}
