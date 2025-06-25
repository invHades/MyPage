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
  const texto = `Soy Santiago. Me gusta crear cosas como programas, paginas, historias, dibujos, videos, etc. Cada cosa que creo lleva algo de mí: una idea, una emoción, una parte de lo que soy. Mi objetivo es simple —hacer que lo que hago conecte, que quien lo vea sienta algo, aunque sea por un segundo.`;
let index = 0;

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
        const textoCompleto = op.querySelector(".opinionText").innerHTML;
        const rating = op.querySelector(".rating");
        const ratingHTML = rating ? rating.innerHTML : "";


        modalImg.src = imgSrc;
        modalTexto.innerHTML = textoCompleto;
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




function mostrarRating(opinionEl, cantidad, imgLlena, imgVacia) {
  const contenedor = opinionEl.querySelector(".rating");
  contenedor.innerHTML = "Calificacion: ";  

  for (let i = 0; i < 5; i++) {
    const img = document.createElement("img");
    img.src = i < cantidad ? imgLlena : imgVacia;
    img.alt = "valoración";
    img.style.width = "28px";
    img.style.marginRight = "4px";
    contenedor.appendChild(img);
  }
}

document.querySelectorAll(".opinion").forEach(op => {
  const calificacion = parseInt(op.dataset.rating);
  mostrarRating(op, calificacion, "resources/greekhelmet.svg", "resources/greekhelmet2.svg");
});

  }; /*Cierre window.onload */


/*------------AGREGAR LAZY A TODAS LAS IMG ----------------------- */
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('img').forEach(img => {
    if (!img.hasAttribute('loading')) {
      img.setAttribute('loading', 'lazy');
    }
  });
});


