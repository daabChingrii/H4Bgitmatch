from pdf_loader import load_documents
from core import pipeline

import gradio as gr

def inference(query, files):
    #get path of uploaded files
    files = [file.name for file in files]
    results,_ = pipeline(query, load_documents(file_paths=files))

    prob_per_documents = {result['name']: result['similarity'] for result in results}
    return prob_per_documents

with gr.Blocks() as demo:
    #write a header

    job_desc = gr.inputs.Textbox(lines=5, label="Job Description")
    files = gr.File(file_count="multiple", file_types=[".txt",".pdf"], label="Upload Resume")
    btn = gr.Button("Submit")
    output = gr.Label(label="Results")
    # output = gr.Number(label="Results")
    btn.click(inference, inputs=[job_desc, files], outputs=output)

demo.launch()