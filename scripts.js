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


/*------------ ABRIR MODAL ----------------------- */
function abrirModal() {
  document.getElementById("commentModal").style.display = "flex";
}

function cerrarModal() {
  document.getElementById("commentModal").style.display = "none";
}
/*VALIDAR TEXTO DEL MODAL */
function validarEntrada(texto) {
  const regex = /^[A-Za-z0-9\s.,!?¿¡"'\/\\()\-_:;]{1,200}$/;
  const contieneEnlace = /(http|www\.|\.[a-z]{2,})/gi;
  const tieneSimbolosRaros = /[^\x20-\x7EñÑ¡¿"'.,!?()\-_:;\/\\]/;

  return (
    regex.test(texto) &&
    !contieneEnlace.test(texto) &&
    !tieneSimbolosRaros.test(texto)
  );
}
/*------------------------------------- ENVIAR COMENTARIO DEL MODAL --------------------------*/
async function obtenerIP() {
  const res = await fetch("https://api.ipify.org?format=json");
  const data = await res.json();
  return data.ip;
}

async function obtenerIP() {
  const res = await fetch("https://api.ipify.org?format=json");
  const data = await res.json();
  return data.ip;
}

async function enviarComentario() {
  const nombre = document.getElementById("nombreUsuario").value.trim();
  const comentario = document.getElementById("comentarioTexto").value.trim();

  if (!validarEntrada(nombre)) {
    mostrarMensaje("Nombre inválido. Usá solo letras, números y símbolos comunes.");
    return;
  }

  if (!validarEntrada(comentario)) {
    mostrarMensaje("Comentario inválido. No se permiten enlaces ni símbolos extraños.");
    return;
  }

  const ip = await obtenerIP();

  //Verificar si esta IP ya comentó recientemente
  db.ref("comentarios").orderByChild("ip").equalTo(ip).once("value", snapshot => {
    let puedeComentar = true;

    snapshot.forEach(child => {
      const data = child.val();
      const fechaComentario = new Date(data.timestamp || 0);
      const ahora = new Date();
      const diferencia = ahora - fechaComentario;

      //Tiempo mínimo entre comentarios
      const limiteTiempo = 1000 * 60 * 60 * 96; 

      if (diferencia < limiteTiempo) {
        puedeComentar = false;
      }
    });

    if (!puedeComentar) {
      mostrarMensaje("Ya comentaste.");
      return;
    }

    // Preparar y guardar comentario
    const horaActual = new Date();

    const dia = horaActual.getDate().toString().padStart(2, "0");
    const mes = (horaActual.getMonth() + 1).toString().padStart(2, "0");
    const año = horaActual.getFullYear();
    let horas = horaActual.getHours();
    const minutos = horaActual.getMinutes().toString().padStart(2, "0");
    const ampm = horas >= 12 ? "p.m." : "a.m.";
    horas = horas % 12 || 12;
    const fechaFormateada = `${dia}/${mes}/${año} ${horas}:${minutos} ${ampm}`;

    const nuevoComentario = {
      nombre,
      mensaje: comentario,
      fecha: fechaFormateada,
      ip,
      timestamp: horaActual.getTime()
    };

    db.ref("comentarios").push(nuevoComentario).then(ref => {
//   const comentarioId = ref.key;

//   const fecha = document.createElement("small");
//   fecha.textContent = ` ${fechaFormateada}`;
//   fecha.classList.add("comment-timestamp");

//   const commentDiv = document.createElement("div");
//   commentDiv.classList.add("comment");

//   const img = document.createElement("img");
//   img.src = "resources/skull.png";
//   img.classList.add("comment-icon");

//   const contentDiv = document.createElement("div");
//   contentDiv.classList.add("comment-content");

//   const autor = document.createElement("strong");
//   autor.textContent = nombre;

//   const mensajeElemento = document.createElement("p");
//   mensajeElemento.textContent = comentario;

//   contentDiv.appendChild(autor);
//   contentDiv.appendChild(mensajeElemento);
//   contentDiv.appendChild(fecha);

//   const esPerryAdmin = localStorage.getItem("esPerryAdmin") === "true";
//   if (esPerryAdmin) {
//     const botonLike = document.createElement("button");
//     botonLike.innerHTML= `<img src="resources/heart.svg" class="icon-svg">`;
//     botonLike.classList.add("like-button");
//     botonLike.onclick = () => toggleLikePerry(comentarioId);
//     contentDiv.appendChild(botonLike);
//   }

//   commentDiv.appendChild(img);
//   commentDiv.appendChild(contentDiv);
//   document.getElementById("commentList").appendChild(commentDiv);

//   document.getElementById("nombreUsuario").value = "";
//   document.getElementById("comentarioTexto").value = "";
//   cerrarModal();
// });

//     // Crear visual de comentario
//     const fecha = document.createElement("small");
//     fecha.textContent = ` ${fechaFormateada}`;
//     fecha.classList.add("comment-timestamp");

//     const commentDiv = document.createElement("div");
//     commentDiv.classList.add("comment");

//     const img = document.createElement("img");
//     img.src = "resources/skull.png";
//     img.classList.add("comment-icon");

//     const contentDiv = document.createElement("div");
//     contentDiv.classList.add("comment-content");

//     const autor = document.createElement("strong");
//     autor.textContent = nombre;

//     const mensajeElemento = document.createElement("p");
//     mensajeElemento.textContent = comentario;

//     contentDiv.appendChild(autor);
//     contentDiv.appendChild(mensajeElemento);
//     contentDiv.appendChild(fecha);
//     commentDiv.appendChild(img);

//     const esPerryAdmin = localStorage.getItem("esPerryAdmin") === "true";
// if (esPerryAdmin) {
//   const botonLike = document.createElement("button");
//   botonLike.innerHTML= `<img src="resources/heart.svg" class="icon-svg">`;
//   botonLike.classList.add("like-button");
//   botonLike.onclick = () => toggleLikePerry(/* ID del comentario */);
//   contentDiv.appendChild(botonLike);
// }


//     commentDiv.appendChild(contentDiv);

//     document.getElementById("commentList").appendChild(commentDiv);

    document.getElementById("nombreUsuario").value = "";
    document.getElementById("comentarioTexto").value = "";
    cerrarModal();
  });
})}

/*----------MENSAJE ALERTA--------------- */
/*mostrar mensaje*/ 
function mostrarMensaje(texto, duracion = 3000) {
  const mensaje = document.getElementById("mensaje");
  mensaje.textContent = texto;
  mensaje.classList.remove("oculto");
  mensaje.classList.add("visible");

  // Reproducir sonido
  const audio = new Audio("resources/alert.wav");
  audio.volume = 0.5; 
  audio.play();

  clearTimeout(mensaje._ocultar);
  mensaje._ocultar = setTimeout(() => {
    mensaje.classList.remove("visible");
    mensaje.classList.add("oculto");
  }, duracion);
}

const urlParams = new URLSearchParams(window.location.search);

if (urlParams.get("modo") === "perry") {
  const clave = prompt("Clave Perry del Inframundo:");
  if (clave === "soyelmasPerryaqui01") {
    localStorage.setItem("esPerryAdmin", "true");
    mostrarMensaje("Modo Perry activado");
  } else {
    mostrarMensaje("Clave incorrecta. La puerta sigue cerrada.");
  }
}


function toggleLikePerry(comentarioId) {
  const comentarioRef = db.ref("comentarios/" + comentarioId + "/likedBy");

  comentarioRef.once("value", snapshot => {
    const valorActual = snapshot.val();

    if (valorActual === "PerryHades") {
    
      comentarioRef.remove();
    } else {

      comentarioRef.set("PerryHades");
    }
  });
}