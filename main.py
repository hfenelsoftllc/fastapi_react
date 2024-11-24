import uvicorn
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List



class Vergie(BaseModel):
    name:str
    
class Vergies(BaseModel):
    vergies: List[Vergie]



app =FastAPI()

origins = [
    "http://localhost:3000"
    ]

app.add_middleware(
    CORSMiddleware,
    allow_origins =origins,
    allow_credentials = True,
    allow_methods=["*"],
    allow_headers=["*"],
)

memory_db = {
    "vergies":[]
}

@app.get("/vergies", response_model=Vergies)
def get_fruits():
    return Vergies(vergies=memory_db["vergies"])


@app.post("/vergie")
def add_fruit(vergie: Vergie):
    memory_db["vergies"].append(vergie)
    return vergie



if __name__ =="__main__":
    uvicorn.run(app, host="0.0.0.0", port= 8000)