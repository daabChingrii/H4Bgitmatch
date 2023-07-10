import streamlit as st
from pdf_loader import load_btyes_io
from core import pipeline

def inference(query, files, embedding_type):

    # pdfReader = PyPDF2.PdfReader(files[0])
    # text = ''
    # for page in pdfReader.pages:
    #     text += page.extract_text()
    # st.write(text)

    results, _ = pipeline(query, load_btyes_io(files), embedding_type=embedding_type)
    prob_per_documents = {result['name']: result['similarity'] for result in results}
    return prob_per_documents

sample_files = [
    "documents/business.pdf",
    "documents/data_science.pdf",
]        

sample_job_descriptions = {
    "Software Engineer": """We are looking for a software engineer with experience in Python and web development. The ideal candidate should have a strong background in building scalable and robust applications. Knowledge of frameworks such as Flask and Django is a plus. Experience with front-end technologies like HTML, CSS, and JavaScript is desirable. The candidate should also have a good understanding of databases and SQL. Strong problem-solving and communication skills are required for this role.
    """,
    "Data Scientist": """We are seeking a data scientist with expertise in machine learning and statistical analysis. The candidate should have a solid understanding of data manipulation, feature engineering, and model development. Proficiency in Python and popular data science libraries such as NumPy, Pandas, and Scikit-learn is required. Experience with deep learning frameworks like TensorFlow or PyTorch is a plus. Strong analytical and problem-solving skills are essential for this position.
    """
}    
st.sidebar.header("Sample Files")
for sample_file in sample_files:
    st.sidebar.markdown(f"[{sample_file}](./sample_files/{sample_file})")

st.sidebar.header("Sample Job Descriptions")
selected_job = st.sidebar.selectbox("Select a job description", list(sample_job_descriptions.keys()))
st.sidebar.markdown("```")
st.sidebar.code(sample_job_descriptions[selected_job])
st.title("👨🏼‍🎓Resume Ranker ")

query = st.text_area("Job Description", height=200, value=sample_job_descriptions[selected_job])
uploaded_files = st.file_uploader("Upload Resume", accept_multiple_files=True, type=["txt", "pdf"])
embedding_type = st.selectbox("Embedding Type", ["bert", "minilm", "tfidf"])

if st.button("Submit"):
    if not query:
        st.warning("Please enter a job description.")
    elif not uploaded_files:
        st.warning("Please upload one or more resumes.")
    else:
        with st.spinner("Processing..."):
            results = inference(query, uploaded_files,embedding_type)
        st.subheader("Results")
        for document, similarity in results.items():
            # make similiarty round to 2 decimal place
            if similarity >= 1:
                similarity = round(similarity, 2)
            st.write(f"- {document}:")
            st.progress(similarity, text=f"{similarity:.2%}")