document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("signup-form");
    const message = document.getElementById("message");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const username = form.username.value;
        const email = form.email.value;
        const password = form.password.value;

        // You can add your signup logic here
        // For example, you can send a request to a server using fetch()

        // Display a success message
        message.textContent = "Sign up successful!";
    });
});
