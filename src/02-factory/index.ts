import { Notificacion } from './Notification/Notificacion';
import { NotificacionFactory } from './Notification/NotificationFactory';

const servicio = NotificacionFactory.crear('email');
servicio.enviar('Tu código de verificación es 1234');
