from fastapi import FastAPI, UploadFile, File, Form
from fastapi.responses import JSONResponse

app = FastAPI()

@app.post('/resume_ranker')
async def resume_ranker(
    query: str = Form(...),
    files: list[UploadFile] = File(...),
    embedding_type: str = Form(...),
):
    # Your code for resume ranking

    return JSONResponse(content=results)

@app.get('/')
async def root():
    return {"message": "Welcome to the Resume Ranker API"}

@app.get('/favicon.ico')
async def favicon():
    return

if __name__ == '__main__':
    import uvicorn

    uvicorn.run(app, host='0.0.0.0', port=8000)
