const toggleButton = document.getElementById('toggle-btn');
const navLinks = document.querySelectorAll('.nav_link'); // Seleccionamos todos los enlaces
const logoImg = document.getElementById('Logo-img'); // Seleccionamos la imagen del logo
let isDarkMode = false; // Variable para rastrear el estado del fondo

toggleButton.addEventListener('click', function() {
    if (isDarkMode) {
        document.body.style.backgroundColor = '#f4f8ff'; // Cambia a fondo blanco
        document.body.style.color = '#21252c'; // Cambia el color del texto a negro
        
        toggleButton.style.backgroundColor = '#485066'; // Cambia el color del botón
        toggleButton.style.color = 'white'; // Cambia el texto del botón

        // Cambia el color de los links a negro
        navLinks.forEach(link => {
            link.style.color = 'black';
        });

        // Cambia el logo al modo claro
        logoImg.src = '../assets/Logo_light.png'; // Cambia al logo claro

    } else {
        document.body.style.backgroundColor = '#232a35'; // Cambia a fondo negro
        document.body.style.color = '#d0e1fc'; // Cambia el color del texto a blanco
        
        toggleButton.style.backgroundColor = 'white'; // Cambia el color del botón
        toggleButton.style.color = 'black'; // Cambia el texto del botón

        // Cambia el color de los links a blanco
        navLinks.forEach(link => {
            link.style.color = 'white';
        });

        // Cambia el logo al modo oscuro
        logoImg.src = '../assets/Logo_dark.png'; // Cambia al logo oscuro
    }
    isDarkMode = !isDarkMode; // Alterna entre negro y blanco
});




    let currentIndex = 0;
    const items = document.querySelectorAll('.carousel-item');
    const totalItems = items.length;
    
    function showNextItem() {
        items[currentIndex].classList.remove('active')};
        currentIndex = (currentIndex + 1) % totalItems;
        items[currentIndex].classList.add('active');

    
    setInterval(showNextItem, 3000);



    function scrollToSection(sectionId) {
        const section = document.getElementById(sectionId);
        section.scrollIntoView({ behavior: 'smooth' }); // Desplazamiento suave a la sección
    }



    
    let navVisible = true; // Variable para rastrear la visibilidad de los botones de navegación

    function toggleNav() {
        const navButtons = document.querySelector('.nav-buttons');
        navVisible = !navVisible; // Cambia el estado de visibilidad
    
        if (navVisible) {
            navButtons.classList.remove('hidden'); // Muestra los botones
        } else {
            navButtons.classList.add('hidden'); // Oculta los botones
        }
    }
    
    function scrollToSection(sectionId) {
        const section = document.getElementById(sectionId);
        section.scrollIntoView({ behavior: 'smooth' }); // Desplazamiento suave a la sección
    }

    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault(); // Evita el envío por defecto
    
        const formData = new FormData(this);
        fetch(this.action, {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        }).then(response => {
            if (response.ok) {
                alert('Mensaje enviado correctamente!');
                this.reset(); // Limpia el formulario
            } else {
                alert('Error al enviar el mensaje.');
            }
        }).catch(error => {
            alert('Error al enviar el mensaje.');
        });
    });