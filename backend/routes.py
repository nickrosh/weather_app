from fastapi import APIRouter
from backend.weather import weather_request


router = APIRouter(
    prefix='/api/v1',
    tags=['weather']
)


@router.get('/')
async def read_root():
    return {'Message': 'Hello, World!'}


@router.get('/current')
async def get_current():
    response = await weather_request()
    response = response.json()
    return response['current']


@router.get('/minutes')
async def get_minutes():
    response = await weather_request()
    response = response.json()
    return response['minutely']


@router.get('/hourly')
async def get_hourly():
    response = await weather_request()
    response = response.json()
    return response['hourly']


@router.get('/daily')
async def get_daily():
    response = await weather_request()
    response = response.json()
    return response['daily']

