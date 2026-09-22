import { Notificacion } from './Notificacion';
import { TipoNotificacion } from './TipoNotificacion';

class NotificacionEmail implements Notificacion {
  enviar(mensaje: string): void {
    console.log(`Enviando Email: ${mensaje}`);
  }
}

class NotificacionSMS implements Notificacion {
  enviar(mensaje: string): void {
    console.log(`Enviando SMS: ${mensaje}`);
  }
}

class NotificacionPush implements Notificacion {
  enviar(mensaje: string): void {
    console.log(`Enviando Push: ${mensaje}`);
  }
}

export class NotificacionFactory {
  static crear(tipo: TipoNotificacion): Notificacion {
    switch (tipo) {
      case 'email':
        return new NotificacionEmail();
      case 'sms':
        return new NotificacionSMS();
      case 'push':
        return new NotificacionPush();
      default:
        const _exhaustivo: never = tipo;
        throw new Error(`Tipo no soportado: ${_exhaustivo}`);
    }
  }
}
