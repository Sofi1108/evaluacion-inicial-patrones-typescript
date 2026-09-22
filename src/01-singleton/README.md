_¿Qué problema intenta resolver Singleton?_
El que solamente se pueda crear 1 objeto de ese tipo. Por ejemplo. una conexión de base de datos, se crea una sola vez, y si intentas crearlo te devuelve el mismo objeto.
_¿Por qué suele utilizarse un constructor private?_
Para que no pueda crearlo nadie fuera de ahí
_¿Cómo se obtiene una instancia de la clase?_
Con el método getINstance()
_¿Qué ocurriría si pudiéramos utilizar new libremente?_
Que podríamos crear 700 conexiones a una base de datos por ejemplo
_Pon un ejemplo real donde utilizarías Singleton._
En las conexiones de bases de datos como he comentado anteriormente
_¿Qué inconveniente puede tener abusar de Singleton?_
