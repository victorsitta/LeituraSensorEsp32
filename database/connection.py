import psycopg2

def get_connection():
    return psycopg2.connect(
        host="localhost",
        database="Silo",
        user="postgres",
        password="351497"
    )
