// Objeto libro
const libro = {
    titulo: "Cien Años de Soledad",
    autor: "Gabriel García Márquez",
    anio: 1967,
    estado: "disponible",
    capitulos: ["Capítulo 1: La familia Buendía", "Capítulo 2: Macondo", "Capítulo 3: La peste del insomnio"],
  
    // Método para describir el libro
    describirLibro: function() {
      console.log(`Libro titulado "${this.titulo}", escrito por ${this.autor} en el año ${this.anio}, el estado es: ${this.estado}.`);
    },
  
    // Método para agregar un capítulo
    agregarCapitulo: function(nombreCapitulo) {
      this.capitulos.push(nombreCapitulo);
      console.log(`Capítulo agregado: "${nombreCapitulo}"`);
    },
  
    // Método para eliminar un capítulo
    eliminarCapitulo: function(nombreCapitulo) {
      const index = this.capitulos.indexOf(nombreCapitulo);
      if (index > -1) {
        this.capitulos.splice(index, 1);
        console.log(`Capítulo eliminado: "${nombreCapitulo}"`);
      } else {
        console.log(`El capítulo "${nombreCapitulo}" no fue encontrado.`);
      }
    }
  };
  
  // Ejecución de métodos para probar
  libro.describirLibro();
  libro.agregarCapitulo("Capítulo 4: El Coronel Aureliano");
  libro.eliminarCapitulo("Capítulo 2: Macondo");
  
  console.log("Lista de capítulos actualizada:", libro.capitulos);
  