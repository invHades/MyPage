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

/* ----------------------------------- SIDEBAR TOGGLE ---------------------------------------- */
 function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('visible');
    reproducirSonido();
  }
/* ----------------------------------- FIN SIDEBAR TOGGLE ---------------------------------------- */

/* ----------------------------------- TEXTO QUE SE ESCRIBE SOLO ---------------------------------------- */
  const texto = `Soy Santiago. A veces programador, escritor, casi siempre con la cabeza en otro mundo. Me inspiro en mitos griegos, animes, música de todos los universos, y ese caos de ideas que me define.
            Lo que hago ya sea escribir, codificar o dibujar. Lo hago porque me gusta, porque me nace, y porque me divierte construir cosas que tienen un poco de mí en cada línea.`;
let index = 0;
const sonido = document.getElementById("typeMachine");

function escribirTexto() {
  const elemento = document.getElementById("bio-text");
  if (index < texto.length) {
    elemento.innerHTML += texto.charAt(index);
    index++;
    setTimeout(escribirTexto, 50); 
}
}
window.addEventListener('DOMContentLoaded', escribirTexto);
/* ----------------------------------- FIN TEXTO QUE SE ESCRIBE SOLO ---------------------------------------- */


/* ----------------------------------- SONIDO AL CLICKEAR ---------------------------------------- */
function reproducirSonido() {
    const audio = document.getElementById("clickSound");
    audio.currentTime = 0; 
    audio.play();
  }
  /* ----------------------------------- FIN SONIDO AL CLICKEAR ---------------------------------------- */

  /*-------------------------------------- MODAL OPINIONS ---------------------------------------------- */
window.onload = function () {
    const modal = document.getElementById("opinionModal");
    const modalImg = document.querySelector(".modal-img");
    const modalTexto = document.querySelector(".modal-texto");
    const cerrar = document.querySelector(".cerrar-modal");

    document.querySelectorAll(".opinion").forEach(op => {
      op.addEventListener("click", () => {
        const imgSrc = op.querySelector("img").src;
        const parrafos = Array.from(op.querySelectorAll("p")).map(p => `<p>${p.innerHTML}</p>`).join("");

        modalImg.src = imgSrc;
        modalTexto.innerHTML = parrafos;
        modal.style.display = "block";
      });
    });

    cerrar.addEventListener("click", () => modal.style.display = "none");

    window.addEventListener("click", (e) => {
      if (e.target === modal) modal.style.display = "none";
    });


/*--------------------------------REDUCIR CARGA DE IMAGENES DEL SIDEBAR---------------------------- */
document.addEventListener("DOMContentLoaded", () => {
  const sidebar = document.querySelector('.sidebar');
  const toggle = document.querySelector('.sidebar-toggle');
  const imgs = sidebar.querySelectorAll('img');

  // Guardar src real y removerlos al principio (en mobil)
  if (window.innerWidth <= 768) {
    imgs.forEach(img => {
      if (img.src) {
        img.dataset.src = img.src;
        img.removeAttribute('src');
      }
    });
  }

  toggle.addEventListener('click', () => {
    sidebar.classList.toggle('visible');

    // Solo cargar imágenes si el sidebar se está mostrando
    if (sidebar.classList.contains('visible')) {
      imgs.forEach(img => {
        if (!img.src && img.dataset.src) {
          img.src = img.dataset.src;
        }
      });
    }
  });
});

  };


/*------------AGREGAR LAZY A TODAS LAS IMG ----------------------- */
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('img').forEach(img => {
    if (!img.hasAttribute('loading')) {
      img.setAttribute('loading', 'lazy');
    }
  });
});




