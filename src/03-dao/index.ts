import { Usuario } from './Usuario';
import { UsuarioDAO } from './UsuarioDAO';
export class UsuarioDAOMemoria implements UsuarioDAO {
  private usuarios: Map<string, Usuario> = new Map();

  async crear(datos: Omit<Usuario, 'id'>): Promise<Usuario> {
    const id = crypto.randomUUID();
    const nuevoUsuario: Usuario = { id, ...datos };
    this.usuarios.set(id, nuevoUsuario);
    return nuevoUsuario;
  }

  async obtenerPorId(id: string): Promise<Usuario | null> {
    return this.usuarios.get(id) || null;
  }

  async obtenerTodos(): Promise<Usuario[]> {
    return Array.from(this.usuarios.values());
  }

  async actualizar(
    id: string,
    datos: Partial<Usuario>,
  ): Promise<Usuario | null> {
    const actual = this.usuarios.get(id);
    if (!actual) return null;

    const actualizado = { ...actual, ...datos, id }; // Protegemos el ID original
    this.usuarios.set(id, actualizado);
    return actualizado;
  }

  async eliminar(id: string): Promise<boolean> {
    return this.usuarios.delete(id);
  }
}
