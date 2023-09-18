
//   Filtro de categorias

document.addEventListener("DOMContentLoaded", function() {
  const categorias = document.querySelectorAll(".categoria");
  const articulos = document.querySelectorAll(".card");
  const tituloCategoriaActiva = document.getElementById("categoria-activa");

  categorias.forEach(categoria => {
    categoria.addEventListener("click", () => {
      const categoriaSeleccionada = categoria.getAttribute("data-categoria");

      categorias.forEach(c => c.classList.remove("active"));
      categoria.classList.add("active");

      // Actualiza y muestra el título de la categoría activa
      if (categoriaSeleccionada === "todos") {
        tituloCategoriaActiva.textContent = "Todas las Categorías";
      } else {
        tituloCategoriaActiva.textContent = `${categoriaSeleccionada}`;
      }

      articulos.forEach(articulo => {
        const categoriaArticulo = articulo.getAttribute("data-categoria");
        articulo.style.display = (categoriaArticulo === categoriaSeleccionada || categoriaSeleccionada === "todos") ? "block" : "none";
      });
    });
  });
});




  
