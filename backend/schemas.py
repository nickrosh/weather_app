from pydantic import BaseModel


class Minutes(BaseModel):
    time: str
    precipitation: str
