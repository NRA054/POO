# POO - Programación Orientada a Objetos

## Clase: Mando

### Descripción
Simulador de durabilidad de batería para mandos de videojuegos (PS5 y Xbox). Esta clase permite modelar el comportamiento real de los controles, considerando que los mandos de PlayStation utilizan baterías recargables internas, mientras que los de Xbox pueden usar pilas reemplazables o baterías recargables.

### Propiedades
- **tipo** (String): Tipo de consola ("PS5" o "Xbox")
- **marca** (String): Fabricante del mando (ej: "Sony", "Microsoft")
- **modelo** (String): Modelo específico del control
- **porcentajeBateria** (Number): Nivel de carga en porcentaje (0-100%)
- **tipoBateria** (String): Tipo de batería ("Recargable" o "Desechable")

### Métodos
- **jugar(horas)**: Simula el uso del mando durante un tiempo determinado, reduciendo el porcentaje de batería. Cada hora de juego consume aproximadamente 10% de batería.
- **obtenerEstado()**: Retorna un objeto con toda la información actual del mando (tipo, marca, modelo, batería restante y tipo de batería).