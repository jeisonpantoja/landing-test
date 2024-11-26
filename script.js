// Scroll automático a una sección
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }
  
  // Manejo del formulario de contacto
  document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Evitar el envío por defecto
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    if (name && email && message) {
      alert(`Gracias, ${name}. Hemos recibido tu mensaje y te contactaremos pronto.`);
      document.getElementById('contact-form').reset();
    } else {
      alert('Por favor, completa todos los campos.');
    }
  });
  