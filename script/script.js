// Mostrar formulario de registro
function showRegister() {
    document.getElementById('login-form').classList.add('hidden');
    document.getElementById('register-form').classList.remove('hidden');
}

// Mostrar formulario de inicio de sesión
function showLogin() {
    document.getElementById('login-form').classList.remove('hidden');
    document.getElementById('register-form').classList.add('hidden');
}

// Registrar usuario
document.getElementById('register-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('register-username').value;
    const password = document.getElementById('register-password').value;

    if (username && password) {
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
        alert('Registro exitoso');
        showLogin();
    } else {
        alert('Por favor, completa todos los campos');
    }
});

// Iniciar sesión
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    if (username === storedUsername && password === storedPassword) {
        alert('Inicio de sesión exitoso');
        document.getElementById('form-container').classList.add('inactive');
        document.getElementById('menu-container').classList.remove('inactive');
        document.getElementById('menu-container').classList.add('active');
    } else {
        alert('Nombre de usuario o contraseña incorrectos');
    }
});

// Función para navegar a las secciones del menú
function navigateToSection(sectionId) {
    // Ocultar todas las secciones
    const sections = document.querySelectorAll('.section');
    sections.forEach(function(section) {
        section.classList.add('inactive');
    });

    // Mostrar la sección seleccionada
    document.getElementById(sectionId).classList.remove('inactive');
}