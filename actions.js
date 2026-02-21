// Clase Mando - Simulador de durabilidad de batería para mandos de videojuegos
class Mando {
  constructor(tipo, marca, modelo, tipoBateria) {
    this.tipo = tipo;
    this.marca = marca;
    this.modelo = modelo;
    this.porcentajeBateria = 100;
    this.tipoBateria = tipoBateria;
  }

  // Método para simular el uso del mando
  jugar(horas) {
    const consumoBateria = horas * 10; // 10% por hora
    this.porcentajeBateria = Math.max(0, this.porcentajeBateria - consumoBateria);
  }

  // Método para obtener el estado actual del mando
  obtenerEstado() {
    return {
      tipo: this.tipo,
      marca: this.marca,
      modelo: this.modelo,
      porcentajeBateria: this.porcentajeBateria,
      tipoBateria: this.tipoBateria
    };
  }
}

// Ejemplo de ejecución
const miMando = new Mando("PS5", "Sony", "DualSense", "Recargable");
miMando.jugar(3); // Jugar 3 horas (consume 30% de batería)
console.log(miMando.obtenerEstado());
