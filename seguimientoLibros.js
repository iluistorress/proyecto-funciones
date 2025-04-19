// Array para guardar los libros leídos
let librosLeidos = [];

// Función para agregar un libro
function agregarLibro(titulo) {
    librosLeidos.push(titulo);
    console.log(`Libro agregado: "${titulo}"`);
}

// Función para mostrar todos los libros leídos
function mostrarLibrosLeidos() {
    console.log("Libros que has leído:");
    librosLeidos.forEach((libro, index) => {
        console.log(`${index + 1}. ${libro}`);
    });
}

// Ejemplo de uso
agregarLibro("Cien años de soledad");
agregarLibro("El Principito");
mostrarLibrosLeidos();
