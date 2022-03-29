import requests
from backend.config import settings

async def current_weather():
    API_ENDPOINT = f'https://api.openweathermap.org/data/2.5/weather?lat={settings.LATITUDE}&lon={settings.LONGITUDE}&appid={settings.API_KEY}&units=imperial'
    response = requests.get(API_ENDPOINT)
    return response    


async def weather_request():
    API_ENDPOINT = f'https://api.openweathermap.org/data/2.5/onecall?lat={settings.LATITUDE}&lon={settings.LONGITUDE}&appid={settings.API_KEY}&units=imperial'
    response = requests.get(API_ENDPOINT)
    return response