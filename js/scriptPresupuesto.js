//** Presupuesto.html */

// Inicializa el formulario de presupuesto

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("formPresupuesto")
  form.addEventListener("submit", validarFormulario)

  // Recalcular total al cambiar cualquier opción
  const tipoCliente = document.getElementById("tipoCliente")
  const productos = document.querySelectorAll(".producto")
  const extras = document.querySelectorAll(".extra")
  const plazo = document.getElementById("plazo")

  tipoCliente.addEventListener("change", calcularTotal)
  productos.forEach((p) => p.addEventListener("change", calcularTotal))
  extras.forEach((e) => e.addEventListener("change", calcularTotal))
  plazo.addEventListener("input", calcularTotal)
})



// Función que valida los campos del formulario antes de enviarlo

function validarFormulario(e) {
  e.preventDefault()

  const nombre = document.getElementById('nombre').value.trim()
  const apellidos = document.getElementById('apellidos').value
  const telefono = document.getElementById('telefono').value.trim()
  const email = document.getElementById('email').value.trim()

  // Validacion con Regex

  const regNombre = /^[A-Za-zÁÉÍÓÚáéíóúñÑ]{1,15}$/
  const regApellidos = /^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]{1,40}$/
  const regTelefono = /^\d{9}$/
  const regEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  if (!regNombre.test(nombre)) {
    alert("El nombre solo puede contener letras (máx. 15 caracteres, sin espacios).")
    return
  }
  if (!regApellidos.test(apellidos)) {
    alert("Los apellidos solo pueden contener letras y espacios (máx. 40 caracteres).")
    return
  }
  if (!regTelefono.test(telefono)) {
    alert("El teléfono debe contener 9 números.")
    return
  }

  if (!regEmail.test(email)) {
    alert("El correo electrónico no es válido (Ej: comercial@empresa.es).")
    return
  }

  //Presupuesto no SeccionStorge
  guardarPresupuesto()

  e.target.reset()
}


// Calcular presupuesto
function calcularTotal() {
  let total = 0

  const tipoCliente = document.getElementById("tipoCliente").value
  // Valores base por tipo de cliente
  if (tipoCliente === "comercial") {
    total += 500
  }
  if (tipoCliente === "industrial") {
    total += 1000
  }

  // Productos seleccionados
  const productos = document.querySelectorAll(".producto")
  productos.forEach((p) => {
    if (p.checked) {
      total += parseFloat(p.value)
    }
  })

  // Extras seleccionados
  const extras = document.querySelectorAll(".extra")
  extras.forEach((e) => {
    if (e.checked) {
      total += parseFloat(e.value)
    }
  })

  // Descuentos según plazo
  const plazo = parseInt(document.getElementById("plazo").value)

  if (plazo >= 18) {
    total *= 0.85
  } else if (plazo >= 6) {
    total *= 0.90
  } else if (plazo >= 3) {
    total *= 0.95
  }

  // Mostrar total
  document.getElementById("total").value = total.toFixed(2) + " €"

}


//ENVIO SeccionStorge
function guardarPresupuesto() {
  const nombreCliente = document.getElementById('nombre').value.trim()
  const apelidoCliente = document.getElementById('apellidos').value
  const telefonoCliente = document.getElementById('telefono').value.trim()
  const emailCliente = document.getElementById('email').value.trim()
  const tipoCliente = document.getElementById("tipoCliente").value
  const plazo = document.getElementById("plazo").value

  const totalRaw = document.getElementById("total").value
  const total = parseFloat(totalRaw.replace(" €", ""))


  const dadosPresupueto = {
    nombre: nombreCliente,
    apellido: apelidoCliente,
    telefono: telefonoCliente,
    email: emailCliente,
    tipoCliente: tipoCliente,
    plazo: plazo,
    total: total

  }

  const convertDados = JSON.stringify(dadosPresupueto)
  sessionStorage.setItem("DadosPresupuesto", convertDados)


}

