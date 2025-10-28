const productos = [
    {
        nombre: 'Perfume Dior Sauvage',
        descripcion: 'Un perfume fresco y amaderado para hombre, con notas de bergamota y ambroxan.',
        precio: 120.00,
        imagen: "perfume1.jpeg"  // Ruta correcta a la imagen
    },
    {
        nombre: 'Perfume Dior J\'adore',
        descripcion: 'El perfume floral por excelencia, con notas de rosa, jazmín y melón.',
        precio: 150.00,
        imagen: "perfume 2.jpeg"  // Ruta correcta a la imagen
    },
    {
        nombre: 'Lip Gloss Dior Addict',
        descripcion: 'Brillo labial hidratante con un toque de color para un acabado perfecto.',
        precio: 45.00,
        imagen: "lip gloss1.jpeg"  // Ruta correcta a la imagen
    },
    {
        nombre: 'Zapatos Dior D-Connect',
        descripcion: 'Zapatos deportivos de lujo de la colección Dior con detalles en piel y un diseño moderno.',
        precio: 950.00,
        imagen: "zapatos1.jpeg"  // Ruta correcta a la imagen
    }
];

// Referencia al contenedor del catálogo en el HTML
const catalogo = document.getElementById('catalogo');

// Función para crear una tarjeta de producto
function crearTarjetaProducto(producto) {
    const card = document.createElement('div');
    card.className = 'producto-card';

    // Crear la imagen
    const imagen = document.createElement('img');
    imagen.src = producto.imagen;  // Asegúrate de que la ruta esté bien escrita
    imagen.alt = producto.nombre;

    // Verificar si la imagen carga correctamente
    imagen.onerror = function() {
        imagen.src = 'default.jpg';  // Imagen predeterminada en caso de error
    };

    // Crear el título del producto
    const titulo = document.createElement('h2');
    titulo.textContent = producto.nombre;

    // Crear la descripción
    const descripcion = document.createElement('p');
    descripcion.textContent = producto.descripcion;

    // Crear el precio
    const precio = document.createElement('span');
    precio.className = 'precio';
    precio.textContent = `$${producto.precio.toFixed(2)}`;

    // Crear el botón de compra
    const boton = document.createElement('button');
    boton.className = 'btn-comprar';
    boton.textContent = 'Comprar 🛒';
    boton.onclick = function() {
        // Asegúrate de reemplazar esto con el enlace real de compra
        window.location.href = 'https://www.dior.com';  // Enlace real de compra
    };

    // Añadir los elementos a la tarjeta
    card.appendChild(imagen);
    card.appendChild(titulo);
    card.appendChild(descripcion);
    card.appendChild(precio);
    card.appendChild(boton);

    return card;
}

// Función para renderizar todos los productos en el catálogo
function renderizarCatalogo() {
    productos.forEach(producto => {
        const tarjeta = crearTarjetaProducto(producto);
        catalogo.appendChild(tarjeta);
    });
}

// Ejecutar la función cuando se haya cargado la página
window.onload = renderizarCatalogo;
