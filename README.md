<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login y Registro</title>
    <link rel="stylesheet" href="style/style.css">
</head>
<body>
    <div class="container">
        <div id="form-container" class="active">
            <form id="login-form" class="form">
                <h2>Iniciar Sesión</h2>
                <input type="text" id="login-username" placeholder="Nombre de usuario" required>
                <input type="password" id="login-password" placeholder="Contraseña" required>
                <button type="submit">Iniciar Sesión</button>
                <p>¿No tienes una cuenta? <a href="#" onclick="showRegister()">Regístrate</a></p>
            </form>
            <form id="register-form" class="form hidden">
                <h2>Registrarse</h2>
                <input type="text" id="register-username" placeholder="Nombre de usuario" required>
                <input type="password" id="register-password" placeholder="Contraseña" required>
                <button type="submit">Registrarse</button>
                <p>¿Ya tienes una cuenta? <a href="#" onclick="showLogin()">Iniciar Sesión</a></p>
            </form>
        </div>
        <div id="menu-container" class="inactive">
            <h1>Bienvenido a Ecocycle</h1>
            <nav>
                <ul>
                    <li><a href="#reciclaje" onclick="navigateToSection('reciclaje')">¿Qué es el Reciclaje?</a></li>
                    <li><a href="#importancia" onclick="navigateToSection('importancia')">Importancia del Reciclaje</a></li>
                    <li><a href="#tipos" onclick="navigateToSection('tipos')">Tipos de Reciclaje</a></li>
                    <li><a href="#Ubicacion" onclick="navigateToSection('Ubicacion')">Puntos de reciclaje</a></li>
                </ul>
            </nav>
            <section id="reciclaje" class="section inactive">
            <h2>¿Qué es el Reciclaje?</h2>
            <p>El reciclaje es el proceso mediante el cual los materiales desechados se recolectan, se procesan y se convierten
                 en nuevos productos. Este proceso reduce la necesidad de utilizar recursos naturales vírgenes, disminuye la cantidad
                  de residuos que terminan en vertederos e incineradoras, y contribuye a la conservación del medio ambiente.</p>
            </section>
            <section id="importancia" class="section inactive">
                <h2>Importancia del Reciclaje</h2>
                <p>El reciclaje es crucial por varias razones que impactan tanto al medio ambiente como a la economía y 
                    la sociedad. El reciclaje es una práctica esencial para la protección del medio ambiente y la promoción de la 
                    sostenibilidad. A través del reciclaje, podemos conservar recursos naturales, reducir la contaminación, ahorrar 
                    energía, disminuir la huella de carbono, crear empleos y reducir la dependencia de los vertederos. Fomentar 
                    y participar en programas de reciclaje es un paso importante hacia un futuro más sostenible y saludable para 
                    todos.</p>
            </section>
            <section id="tipos" class="section inactive">
                <h2>Tipos y canecas de Reciclaje</h2>
                <p>Existen varios tipos de reciclaje, cada uno enfocado en materiales específicos que pueden ser reutilizados y 
                    procesados para crear nuevos productos y las canecas principales de reciclaje están codificadas por colores para 
                    facilitar la separación de residuos.</p>
            </section>
            <section id="Ubicacion" class="section inactive">
                <h2>Puntos de reciclaje</h2>
                <p>Aquí hay información adicional sobre reciclaje...</p>
            </section>
        </div>
    </div>
    <script src="script/script.js"></script>
</body>
</html>
