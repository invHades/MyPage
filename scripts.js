/* -----------------------------------SELECTOR DE VIDEOS DE YOUTUBE ---------------------------------------- */
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".video-selector img").forEach(img => {
    img.addEventListener("click", () => {
      const videoId = img.dataset.video;
      const iframe = img.closest(".youtube-box").querySelector("iframe");
      iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
    });
  });
});
/* ----------------------------------- FIN SELECTOR DE VIDEOS DE YOUTUBE ---------------------------------------- */

/* ----------------------------------- GALERIA POR CATEGORIAS ---------------------------------------- */
  function filtrarGaleria(categoria) {
    const slides = document.querySelectorAll('.slide');
    slides.forEach(slide => {
      const pertenece = slide.getAttribute('data-categoria') === categoria;
      if (categoria === 'todo' || pertenece) {
        slide.style.display = 'block';
      } else {
        slide.style.display = 'none';
      }
    });
  }

  function abrirImagen(src) {
    const overlay = document.getElementById("imagenOverlay");
    const img = document.getElementById("imagenGrande");
    img.src = src;
    overlay.style.display = "flex";
  }

  function cerrarImagen() {
    document.getElementById("imagenOverlay").style.display = "none";
  }

/* ----------------------------------- FIN GALERIA POR CATEGORIAS ---------------------------------------- */
 function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('visible');
  }
