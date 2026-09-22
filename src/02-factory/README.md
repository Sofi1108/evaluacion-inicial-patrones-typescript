_¿Qué problema resuelve Factory?_
El tema de crear objetos desde una plantilla base (una clase abstracta) y no repetir métodos o atributos. Ejemplo: crear una conexión a una base de datos, desde ahí
_¿Qué ventaja tiene respecto a utilizar new directamente por toda la aplicación?_
Polimorfismo, así puedes usar los mismos métodos y comparaciones etc para diferentes conexiones, ya que derivan de un mismo objeto
_¿Qué tendría que ocurrir si mañana añadimos WhatsAppNotification?_
Pues en la factory añadimos esa posibilidad al switch, creamos la clase de dicha notificación extendiendo de factory y ya le añadimos lo que toque
_¿Quién tiene la responsabilidad de crear los objetos?_
La clase abstracta de factory
_¿Qué ventaja proporciona Factory respecto al acoplamiento?_
Comodidad, fácilmente escalable y con menos conflictos
