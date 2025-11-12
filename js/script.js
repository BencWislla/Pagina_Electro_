

//** NAV - Evento en el botón "Solicitar un servicio" para ir a la página de presupuesto */
const btnServicio = document.querySelector('.btn-servicio');
if (btnServicio) {
  btnServicio.addEventListener('click', () => {
    window.location.href = "../views/presupuesto.html";
  });
}

//** SECCIÓN PRINCIPAL - Evento en el botón "Contáctanos" para ir a la página de contacto */
const btnContacto = document.querySelector('.btn-contacto');
if (btnContacto) {
  btnContacto.addEventListener('click', () => {
    window.location.href = "../views/contacto.html";
  });
}

//** SECCIÓN QUIÉNES SOMOS - Evento en el botón "Ver más..." para ir a la galería */
const btnVerMas = document.querySelector('.btn-vermas');
if (btnVerMas) {
  btnVerMas.addEventListener('click', () => {
    window.location.href = "../views/galeria.html";
  });
}

/** SECCIÓN COMENTARIOS */
// Seleccionar botones de navegación y contenedor de comentarios
const btn1 = document.getElementById('prevBtn');
const btn2 = document.getElementById('nextBtn');
const containerComentario = document.getElementById('comentariosContainer');

let comentariosData = [];  // Almacena los comentarios cargados desde JSON
let totalGrupos = 0;       // Cantidad total de grupos de comentarios
const POR_GRUPO = 3;       // Número de comentarios a mostrar por grupo
let grupoAtual = 0;        // Grupo actual que se muestra

//** Fetch del archivo JSON con los comentarios */
fetch("../js/json/commit.json")
  .then(response => response.json())
  .then(comentarios => {
    comentariosData = comentarios;
    criarCards(comentariosData); // Crear las tarjetas de comentarios
  })
  .catch(error => console.error("Error cargando comentarios:", error));

/** Función para crear las tarjetas de comentarios */
function criarCards(commit) {
  containerComentario.innerHTML = ''; // Limpiar contenedor

  commit.forEach((item) => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
        <h3>${item.empresa}</h3>
        <p>${item.comentario}</p>
      `;
    containerComentario.appendChild(card);
  });

  totalGrupos = Math.ceil(commit.length / POR_GRUPO);
  mostrarGrupo();
}

/** Función para mostrar solo el grupo actual de comentarios */
function mostrarGrupo() {
  const todosCards = document.querySelectorAll('#comentariosContainer .card');

  todosCards.forEach((card, index) => {
    if (index >= grupoAtual * POR_GRUPO && index < (grupoAtual + 1) * POR_GRUPO) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}

/** Eventos de navegación izquierda y derecha */
if (btn1) {
  btn1.addEventListener('click', () => {
    grupoAtual--;
    if (grupoAtual < 0) {
      grupoAtual = totalGrupos - 1;
    }
    mostrarGrupo();
  });
}

if (btn2) {
  btn2.addEventListener('click', () => {
    grupoAtual++;
    if (grupoAtual >= totalGrupos) {
      grupoAtual = 0;
    }
    mostrarGrupo();
  });
}



