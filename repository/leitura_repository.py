from database.connection import get_connection

def salvar_leitura(soja, feijao, milho, trigo):
    conn = get_connection()
    cur = conn.cursor()
    cur.execute("""
    INSERT INTO leitura_test (soja, feijao, milho, trigo)
    VALUES (%s, %s, %s, %s) 
    """, (soja, feijao, milho, trigo))

    conn.commit()
    cur.close()
    conn.close()

