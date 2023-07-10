from embedding import embedding
from preprocessing import preprocess
from sklearn.metrics.pairwise import cosine_similarity
import numpy as np
import streamlit as st

def pipeline(input_doc:str , ori_documents, embedding_type='bert'):
    documents = np.array([doc['content'] for doc in ori_documents])
    documents = np.insert(documents, 0, input_doc)
    # st.write(documents)
    preprocessed_documents = preprocess(documents)
    # st.write(preprocessed_documents)
    print("Encoding with BERT...")
    documents_vectors = embedding(preprocessed_documents, embedding=embedding_type)
    print("Encoding finished")

    #compute cosine similarity
    pairwise = cosine_similarity(documents_vectors)

    #only retain useful information
    pairwise = pairwise[0,1:]
    sorted_idx = np.argsort(pairwise)[::-1]
    result_pairwise = pairwise[sorted_idx]

    results = []
    print('Resume ranking:')
    for idx in sorted_idx:
        single_result = {
            'rank': idx,
            'name': ori_documents[idx]['name'],
            'similarity': pairwise[idx].item()
        }
        results.append(single_result)
        print(f'Resume of candidite {idx}')
        print(f'Cosine Similarity: {pairwise[idx]}\n')
    
    return results, result_pairwise