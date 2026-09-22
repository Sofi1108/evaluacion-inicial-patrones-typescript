export class DatabaseConnection {
  private static instance: DatabaseConnection;
  private constructor() {}
  public static getInstance(): DatabaseConnection {
    if (this.instance == null) {
      //Si la instancia es nula (no está creada ) la crea, si no la devuelve tal y como está
      this.instance = new DatabaseConnection();
    }
    return this.instance;
  }
}
