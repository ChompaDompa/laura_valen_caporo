const form = document.getElementById("contactForm");

form.addEventListener("submit", function (e) {
    e.preventDefault(); // Evita que el formulario se envíe normalmente

    // Capturamos los valores
    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const telefono = document.getElementById("telefono").value;
    const mensaje = document.getElementById("mensaje").value;

    // Creamos el mailto
    const mailtoLink = `mailto:tu-correo@ejemplo.com?subject=Mensaje de ${encodeURIComponent(nombre)}&body=${encodeURIComponent("Nombre: " + nombre + "\nCorreo: " + email + "\nTeléfono: " + telefono + "\n\nMensaje: " + mensaje)}`;

    // Abrimos el cliente de correo
    window.location.href = mailtoLink;
});

document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// JS para toggle
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});