from pdf_loader import load_documents
from core import pipeline

if __name__ == '__main__':
    pipeline('''About Sleek
Sleek is on a mission to revolutionize how entrepreneurs operate their business. We want to give small business owners peace of mind and the power of online solutions to allow them to focus on what they do best - growing their business. As we work for our thousands of customers, we gather millions of data points about their business, and in turn we transform those into useful, actionable insights and recommendations to accelerate their growth through smart algorithms.
We are a team of 400 builders from 17 countries, with offices in Singapore, Philippines, Hong Kong, Australia and the UK committed to delivering a delightful experience to our clients!
You will be working in the Data & Analytics organization to solve a wide range of business problems leveraging advanced analytics. You will deploy a flexible analytical skill set to deliver insightful data and analysis and model business scenarios. Your principal goal will be to use data to drive better business decisions. This means translating data into meaningful insights and recommendations and, where relevant, proactively implement improvements. You will be developing the business reporting and analysis for our internal operations world-wide. The job will require working closely with the various Business Units to understand their business question as well as the whole data team to understand and access available data.
Position Duties
Drive analytical problem-solving and deep dives. Work with large, complex data sets. Solve difficult, non-routine problems, applying advanced quantitative methods.
Collaborate with a wide variety of cross-functional partners to determine business needs, drive analytical projects from start to finish.
Align with involved stakeholders to set up dashboards and reports to drive data driven decision across all departments
Working very closely with our Data team, Tech and Product team to understand the business logic to generate accurate reports and correct analysis
Requirements
Performance Standards
Able to commit for a period of at least 4 months
Currently pursuing a degree in Business Science, Engineering or relevant disciplines with a focus on data.
Good knowledge in SQL, R and Python.
Experience in data visualization tools (Tableau, PowerBI, Google DataStudio or equivalent) will be an added advantage.''',
                   load_documents(source_dir = 'documents'))
