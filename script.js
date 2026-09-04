document.addEventListener("DOMContentLoaded", () => {

    // =====================================
    // FORMULARIO DEL NEWSLETTER
    // =====================================

    const newsletterForm = document.getElementById("newsletterForm");
    const emailInput = document.getElementById("email");
    const emailError = document.getElementById("emailError");
    const successMessage = document.getElementById("successMessage");

    newsletterForm.addEventListener("submit", (event) => {

        event.preventDefault();

        const email = emailInput.value.trim();

        // Expresión regular para validar correo
        const emailRegex =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        // Limpiar estados anteriores
        emailInput.classList.remove("is-invalid");
        successMessage.classList.add("d-none");

        // Validación
        if (email === "" || !emailRegex.test(email)) {

            emailInput.classList.add("is-invalid");

            emailError.textContent =
                "Ingresa un correo electrónico válido.";

            return;
        }

        // Suscripción correcta
        successMessage.classList.remove("d-none");

        newsletterForm.reset();

        // Ocultar mensaje después de 4 segundos
        setTimeout(() => {
            successMessage.classList.add("d-none");
        }, 4000);

    });


    // =====================================
    // VALIDACIÓN DEL REGISTRO
    // =====================================

    const registerForm =
        document.getElementById("registerForm");

    registerForm.addEventListener("submit", (event) => {

        event.preventDefault();

        if (!registerForm.checkValidity()) {

            registerForm.classList.add("was-validated");

            return;
        }

        alert("¡Cuenta creada correctamente!");

        registerForm.reset();
        registerForm.classList.remove("was-validated");

        // Cerrar modal
        const modalElement =
            document.getElementById("registerModal");

        const modal =
            bootstrap.Modal.getInstance(modalElement);

        modal.hide();

    });


    // =====================================
    // CERRAR NAVBAR EN MÓVILES
    // =====================================

    const navLinks =
        document.querySelectorAll(".navbar-nav .nav-link");

    const navbarCollapse =
        document.getElementById("navbarPrincipal");

    navLinks.forEach(link => {

        link.addEventListener("click", () => {

            if (window.innerWidth < 992) {

                const collapse =
                    bootstrap.Collapse.getInstance(navbarCollapse);

                if (collapse) {
                    collapse.hide();
                }

            }

        });

    });

});
