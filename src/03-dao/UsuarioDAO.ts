import { Usuario } from '../03-dao/usuario';
export interface UsuarioDAO {
  crear(usuario: Omit<Usuario, 'id'>): Promise<Usuario>;
  obtenerPorId(id: string): Promise<Usuario | null>;
  obtenerTodos(): Promise<Usuario[]>;
  actualizar(id: string, datos: Partial<Usuario>): Promise<Usuario | null>;
  eliminar(id: string): Promise<boolean>;
}
