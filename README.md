# Página ELECTRO

## Sobre la página

ELECTRO es una página ficticia creada como trabajo escolar, totalmente en español.
El sitio fue desarrollado utilizando **HTML, CSS y JavaScript**, aplicando conceptos avanzados de JS como manipulación del DOM, AJAX y validación de formularios.

Cada página del sitio tiene funcionalidades específicas:

- **index.html**: Página de inicio con cuatro secciones, incluyendo una sección de noticias cargadas desde un archivo externo mediante AJAX (JSON).
- **galeria.html**: Página de portafolio con galería dinámica creada con **JavaScript/jQuery**.
- **presupuesto.html**: Página de presupuesto con formulario dividido en dos partes:
  - Datos de contacto: Validación de nombre, apellidos, teléfono y correo electrónico usando JavaScript.
  - Cálculo de presupuesto: Opciones de producto, plazo, extras y presupuesto final actualizado dinámicamente sin necesidad de botón de envío.
- **contacto.html**: Página de contacto con **mapa dinámico** integrado (OpenStreetMap) que calcula rutas desde el cliente hasta el negocio.

El sitio también incluye elementos comunes en todas las páginas:

- Barra de navegación fija con resaltado en la página actual.
- Logotipo o nombre del sitio en la parte superior.
- Footer con redes sociales, dirección de la empresa y aviso legal.

## Cómo usar

- El proyecto está alojado en **GitHub Pages**, puedes acceder al sitio haciendo clic [https://bencwislla.github.io/Pagina_Electro_/].
- Navega por las páginas usando la barra de navegación:
  - Inicio (index.html)
  - Galería (galeria.html)
  - Presupuesto (presupuesto.html)
  - Contacto (contacto.html)

## Estructura del proyecto

├─ index.html
├─ views
| └─ contacto.html
| └─ galeria.html
| └─ presupuesto.html
├─ js/
│ └─ script.js
│ └─ scriptContacto.js
│ └─ scriptGaleria.js
│ └─ scriptPresupuesto.js
│ └─
│ └─├─ json
│ └─└─ commit.json
├─ css/
│ └─ styles.css
├─ assent
| └─ icon
| └─ imagen

## Tecnologías utilizadas

- HTML5
- CSS3
- JavaScript (ES6+)
- jQuery
- AJAX
- OpenStreetMap API
- JSON

## Observaciones

- Todas las páginas fueron validadas con **W3C Validator** y están sin errores.
- El sitio utiliza colores armonizados y diseño responsivo para una mejor experiencia de usuario.
