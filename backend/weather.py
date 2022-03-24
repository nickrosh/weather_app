import requests
from backend.config import settings


async def weather_request():
    API_ENDPOINT = f'https://api.openweathermap.org/data/2.5/onecall?lat={settings.LATITUDE}&lon={settings.LONGITUDE}&appid={settings.API_KEY}'
    response = requests.get(API_ENDPOINT)
    return response