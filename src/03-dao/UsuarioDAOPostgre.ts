import { Pool } from 'pg'; // Ejemplo con driver de PostgreSQL
import { Usuario } from './Usuario';
import { UsuarioDAO } from './UsuarioDAO';

export class UsuarioDAOPostgres implements UsuarioDAO {
  constructor(private readonly pool: Pool) {}

  async crear(datos: Omit<Usuario, 'id'>): Promise<Usuario> {
    const query = `
      INSERT INTO usuarios (nombre, email) 
      VALUES ($1, $2) 
      RETURNING id, nombre, email
    `;
    const res = await this.pool.query(query, [datos.nombre, datos.email]);
    return res.rows[0];
  }

  async obtenerPorId(id: string): Promise<Usuario | null> {
    const res = await this.pool.query('SELECT * FROM usuarios WHERE id = $1', [
      id,
    ]);
    return res.rows[0] || null;
  }

  async obtenerTodos(): Promise<Usuario[]> {
    const res = await this.pool.query('SELECT * FROM usuarios');
    return res.rows;
  }

  async actualizar(
    id: string,
    datos: Partial<Usuario>,
  ): Promise<Usuario | null> {
    // Lógica dinámica de UPDATE según campos presentes en 'datos'...
    const res = await this.pool.query(
      'UPDATE usuarios SET nombre = COALESCE($1, nombre), email = COALESCE($2, email) WHERE id = $3 RETURNING *',
      [datos.nombre, datos.email, id],
    );
    return res.rows[0] || null;
  }

  async eliminar(id: string): Promise<boolean> {
    const res = await this.pool.query('DELETE FROM usuarios WHERE id = $1', [
      id,
    ]);
    return (res.rowCount ?? 0) > 0;
  }
}
