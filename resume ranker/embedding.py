from sklearn.feature_extraction.text import TfidfVectorizer
from sentence_transformers import SentenceTransformer
import os

def embedding(documents, embedding='bert'):
    if embedding == 'bert':
        sbert_model = SentenceTransformer('bert-base-nli-mean-tokens', cache_folder=os.path.join(os.getcwd(), 'embedding'))

        document_embeddings = sbert_model.encode(documents)
        return document_embeddings
    
    if embedding == 'minilm':
        sbert_model = SentenceTransformer('sentence-transformers/all-MiniLM-L6-v2', cache_folder=os.path.join(os.getcwd(), 'embedding'))

        document_embeddings = sbert_model.encode(documents)
        return document_embeddings

    if embedding == 'tfidf':
        word_vectorizer = TfidfVectorizer(
            sublinear_tf=True, stop_words='english')
        word_vectorizer.fit(documents)
        word_features = word_vectorizer.transform(documents)

        return word_features
