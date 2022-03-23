from pydantic import BaseSettings


class Settings(BaseSettings):
    API_KEY: str
    LATITUDE: str
    LONGITUDE: str

    class Config:
        env_file = '.env'


settings = Settings()