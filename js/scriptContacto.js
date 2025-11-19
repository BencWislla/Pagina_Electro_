// Coordenadas aproximadas de la empresa (Calle Energía 45, Madrid)
const empresaLatLng = [40.3929, -3.6981]

// Inicializa el mapa centrado en la empresa
const mapa = L.map("map").setView(empresaLatLng, 13)

// Capa base de OpenStreetMap
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> colaboradores',
}).addTo(mapa)

// Marcador de la empresa
const marcador = L.marker(empresaLatLng).addTo(mapa)
marcador
  .bindPopup("<b>ELECTRO S.L.</b><br>Calle Energía 45, Madrid, España")
  .openPopup()

// Variable para almacenar la ruta actual
let rutaActual = null

// Manejo del formulario para calcular la ruta
const formulario = document.getElementById("routeForm")

formulario.addEventListener("submit", async (e) => {
  e.preventDefault()
  const direccionUsuario = document.getElementById("userLocation").value

  try {
    // Geocodificación de la dirección del usuario usando la API de Nominatim
    const respuesta = await fetch(
      `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
        direccionUsuario
      )}`
    )
    const datos = await respuesta.json()

    if (datos.length === 0) {
      alert("No se encontró la dirección. Inténtalo de nuevo.")
      return
    }

    const coordenadasUsuario = [
      parseFloat(datos[0].lat),
      parseFloat(datos[0].lon),
    ]

    // Elimina la ruta anterior si existe
    if (rutaActual) {
      mapa.removeControl(rutaActual)
    }

    // Crea una nueva ruta entre el usuario y la empresa
    rutaActual = L.Routing.control({
      waypoints: [
        L.latLng(coordenadasUsuario[0], coordenadasUsuario[1]),
        L.latLng(empresaLatLng[0], empresaLatLng[1]),
      ],
      routeWhileDragging: false,
      language: "es",
      createMarker: function () {
        return null
      },
    }).addTo(mapa)

    // Centra el mapa en la ubicación del usuario
    mapa.setView(coordenadasUsuario, 13)
  } catch (error) {
    alert("Error al calcular la ruta.")
    console.error(error)
  }
})

window.addEventListener("resize", function () {
  mapa.invalidateSize()
})




// ENVIO Formulario en Session Storge

const form = document.getElementById("formContacto")

// Evento al enviar
form.addEventListener("submit", function (e) {
  e.preventDefault()


  const nombre = document.getElementById("nombre").value
  const telefono = document.getElementById("telefono").value
  const email = document.getElementById("email").value
  const comentario = document.getElementById("comentarios").value


  const formularioData = {
    nombre: nombre,
    telefono: telefono,
    email: email,
    comentario: comentario,
    fecha: new Date().toLocaleString()
  }

  // Recupera la lista existente del sessionStorage
  let envios = JSON.parse(sessionStorage.getItem("formularioContacto")) || []

  envios.push(formularioData)

  // Guarda de nuevo en sessionStorage
  sessionStorage.setItem("formularioContacto", JSON.stringify(envios))

  // Alerta de confirmación
  alert("¡Formulario enviado con éxito! Sus datos fueron guardados en Session Storage.")

  form.reset()
})
