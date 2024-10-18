const toggleButton = document.getElementById('toggle-btn');
const navLinks = document.querySelectorAll('.nav_link'); 
const logoImg = document.getElementById('Logo-img'); 
let isDarkMode = false; 


toggleButton.addEventListener('click', function() {
    if (isDarkMode) {
        document.body.style.backgroundColor = '#f4f8ff'; 
        document.body.style.color = '#21252c'; 
        
        toggleButton.style.backgroundColor = '#485066'; 
        toggleButton.style.color = 'white'; 

        navLinks.forEach(link => {
            link.style.color = 'black';
        });

        logoImg.src = '../assets/Logo_light.png'; 

    } else {
        document.body.style.backgroundColor = '#232a35'; 
        document.body.style.color = '#d0e1fc'; 
        
        toggleButton.style.backgroundColor = 'white'; 
        toggleButton.style.color = 'black'; 

        navLinks.forEach(link => {
            link.style.color = 'white';
        });

        logoImg.src = '../assets/Logo_dark.png'; 
    }
    isDarkMode = !isDarkMode; 
});

// Carousel functionality
let currentIndex = 0;
const items = document.querySelectorAll('.carousel-item');
const totalItems = items.length;

function showNextItem() {
    items[currentIndex].classList.remove('active'); 
    currentIndex = (currentIndex + 1) % totalItems; 
    items[currentIndex].classList.add('active'); 
}

// Start the carousel
setInterval(showNextItem, 3000);

// Smooth scroll to section
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' }); 
}

let navVisible = true; 
function toggleNav() {
    const navButtons = document.querySelector('.nav-buttons');
    navVisible = !navVisible; 

    if (navVisible) {
        navButtons.classList.remove('hidden'); 
    } else {
        navButtons.classList.add('hidden'); 
    }
}

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); 

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
            this.reset();
        } else {
            alert('Error al enviar el mensaje.');
        }
    }).catch(error => {
        alert('Error al enviar el mensaje.');
    });
});
