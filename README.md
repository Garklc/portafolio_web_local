# Portafolio Personal - Alejandro

Este repositorio contiene el código fuente de mi portafolio personal web. Es una página diseñada para presentar mi perfil, mostrar mis proyectos en desarrollo (como la Tienda Online) y detallar mis habilidades técnicas.

El proyecto está construido con un enfoque **Mobile First** y utiliza **Bootstrap 5** para asegurar una maquetación responsiva y moderna.

## 🚀 Tecnologías Utilizadas

* **HTML5:** Estructura semántica del sitio.
* **CSS3:** Estilos personalizados, variables CSS (`:root`) y animaciones.
* **Bootstrap 5.3.0:** Framework principal para el sistema de grillas, componentes (Navbar, Cards, Modals) y diseño responsivo.
* **JavaScript & jQuery 3.6.0:** Lógica del cliente, manipulación del DOM y efectos visuales.
* **Google Fonts:** Tipografía 'Roboto' para todo el sitio.

## ✨ Características y Funcionalidades

El sitio incluye varias interactividades implementadas con jQuery:

* **Navegación Suave (Smooth Scroll):** Desplazamiento fluido al hacer clic en los enlaces del menú, con compensación de altura para la barra de navegación fija.
* **Efecto Parallax:** Animación de fondo sutil en la sección de "Inicio".
* **Animación Typewriter:** Efecto de escritura automática en el título principal de bienvenida.
* **Scroll Animations:** Las tarjetas de habilidades aparecen gradualmente (`fade-in`) cuando el usuario hace scroll hacia la sección correspondiente.
* **Navbar Dinámico:** La barra de navegación cambia su transparencia y añade un efecto *blur* al hacer scroll.
* **Formulario de Contacto Interactivo:**
    * Validación de campos vacíos y formato de correo electrónico.
    * Simulación de envío asíncrono con alertas de éxito/error temporizadas.
    * Bloqueo del botón de envío durante el proceso para evitar múltiples clics.

## 📂 Estructura del Proyecto

Actualmente, el proyecto se distribuye en un único archivo HTML que integra estilos y scripts para facilitar el despliegue rápido, aunque se recomienda separarlos en entornos de producción:

* **Header:** Barra de navegación fija y colapsable en móviles.
* **Hero Section:** Introducción con llamada a la acción.
* **Proyectos:** Vitrina de desarrollos actuales (Ej: Tienda Online).
* **Habilidades:** Grid interactivo mostrando el stack tecnológico (HTML, CSS, JS, Git, etc.).
* **Contacto:** Formulario funcional (frontend).

## 🛠️ Instalación y Uso

Este proyecto no requiere un entorno de servidor complejo (como Node.js o PHP) para visualizarse, ya que utiliza librerías a través de **CDN**.

1.  **Clonar el repositorio:**
    ```bash
    git clone [https://github.com/tu-usuario/portafolio-alejandro.git](https://github.com/tu-usuario/portafolio-alejandro.git)
    ```
2.  **Abrir el archivo:**
    Simplemente abre el archivo `index.html` en tu navegador web favorito (Chrome, Firefox, Edge).
    * *Nota: Se requiere conexión a internet para cargar Bootstrap y jQuery desde los CDN.*

## 🔜 Próximos Pasos (Roadmap)

Basado en la sección de habilidades y proyectos, los siguientes pasos para este portafolio son:

- [ ] Integración de **React** para componentes interactivos.
- [ ] Desarrollo funcional del backend para el formulario de contacto.
- [ ] Despliegue de la demo funcional de la "Tienda Online".

## 📄 Licencia

Este proyecto es de uso personal y educativo.
&copy; 2025 Alejandro. Todos los derechos reservados.
