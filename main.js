const productos = [
  { nombre: "Laptop Lenovo", categoria: "Tecnología", precio: 1500},
  { nombre: "Celular Samsung", categoria: "Tecnología", precio: 1200 },
  { nombre: "Auriculares JBL", categoria: "Tecnología", precio: 300 },
  { nombre: "Mouse Logitech", categoria: "Tecnología", precio: 150 },
  { nombre: "Teclado Redragon", categoria: "Tecnología", precio: 200 },

  { nombre: "Sofá 3 plazas", categoria: "Hogar", precio: 850 },
  { nombre: "Mesa de comedor", categoria: "Hogar", precio: 400 },
  { nombre: "Lámpara de pie", categoria: "Hogar", precio: 90 },
  { nombre: "Alfombra persa", categoria: "Hogar", precio: 300 },
  { nombre: "Silla ergonómica", categoria: "Hogar", precio: 220 },

  { nombre: "Remera blanca", categoria: "Ropa", precio: 50 },
  { nombre: "Pantalón jeans", categoria: "Ropa", precio: 120 },
  { nombre: "Campera de cuero", categoria: "Ropa", precio: 350 },
  { nombre: "Zapatillas Nike", categoria: "Ropa", precio: 250 },
  { nombre: "Gorra negra", categoria: "Ropa", precio: 40 },

  { nombre: "Martillo", categoria: "Ferretería", precio: 60 },
  { nombre: "Taladro eléctrico", categoria: "Ferretería", precio: 400 },
  { nombre: "Caja de herramientas", categoria: "Ferretería", precio: 220 },
  { nombre: "Destornillador", categoria: "Ferretería", precio: 30 },
  { nombre: "Cinta métrica", categoria: "Ferretería", precio: 25 },
];

const imagenesProductos = {
  "Laptop Lenovo": "imagenes/laptop_lenovo.png",
  "Celular Samsung": "imagenes/celular_samsung.png",
  "Auriculares JBL": "imagenes/auriculares_jbl.png",
  "Mouse Logitech": "imagenes/mouse_logitech.png",
  "Teclado Redragon": "imagenes/teclado_reddragon.png",

  "Sofá 3 plazas": "imagenes/sofa3plazas.png",
  "Mesa de comedor": "imagenes/mesa_de_comedor.png",
  "Lámpara de pie": "imagenes/lampara_de_pie.png",
  "Alfombra persa": "imagenes/alfobra_persa.png",
  "Silla ergonómica": "imagenes/silla_ergonomica.png",

  "Remera blanca": "imagenes/remera_blanca.png",
  "Pantalón jeans": "imagenes/pantalones_jeans.png",
  "Campera de cuero": "imagenes/campera_de_cuero.png",
  "Zapatillas Nike": "imagenes/zapatillas_nike.png",
  "Gorra negra": "imagenes/gorra_negra.png",

  "Martillo": "imagenes/martillo.png",
  "Taladro eléctrico": "imagenes/taladro_electrico.png",
  "Caja de herramientas": "imagenes/caja_de_herramientas.png",
  "Destornillador": "imagenes/destornillador.png",
  "Cinta métrica": "imagenes/cinta_metrica.png"
};

let contenedor2 = document.querySelector("#catalogo");

for (let i = 0; i < productos.length; i++) {
  if (productos[i].categoria === "Hogar") {
    let imagenURL = imagenesProductos[productos[i].nombre] || "img/placeholder.jpg";

    contenedor2.innerHTML += `
      <a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <img src="${imagenURL}" alt="${productos[i].nombre}" class="w-full h-48 object-cover rounded mb-4">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${productos[i].nombre}</h5>
        <p class="font-normal text-gray-700 dark:text-gray-400">Precio: $${productos[i].precio}</p>
        <p class="font-normal text-gray-700 dark:text-gray-400">Categoría: ${productos[i].categoria}</p>
      </a>
    `;
  }
}