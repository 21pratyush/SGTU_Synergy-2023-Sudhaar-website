
document.addEventListener("DOMContentLoaded", function () {

    const formContent = document.getElementById("form-content");

    function createForm(formType) {

        formContent.innerHTML = '';

        const form = document.createElement("div");
        form.className = "professional-form";
        form.innerHTML = `
            <h2>Fill the form with correct details</h2>
            <h3>Complainant's Details</h3><br>
            <p>Selected Service: ${formType}</p> 
            ${formType === "Other"
                ? '<input type="text" id="other-relevant" name="other-relevant" placeholder="write here..." required>'
                : ''
            }
            <form id="contact-form" enctype="multipart/form-data"> 
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" required>
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required>
            <label for="contact">Contact:</label>
            <input type="tel" id="contact" name="contact" required>
            <label for="address">Address:</label>
            <textarea id="address" name="address" rows="4" required></textarea>
            <h3>Complaint Details</h3><br>
            <label for="complaint">Type your complaint:</label>
            <input type="text" id="complaint" name="complaint" required>
            <label for="description">Description of complaint:</label>
            <input type="text" id="description" name="description">
            <label for="location">Current Location:</label>
            <input type="text" id="location" name="location" required>
            <label for="other">Any other relevant information:</label>
            <input type="text" id="other" name="other" required>
            <label for="date">Date:</label>
            <input type="date" id="date" name="date" required>
            <label for="time">Time:</label>
            <input type="time" id="time" name="time" required>
            <label for="image">Upload Image or Capture with Camera:</label>
            <input type="file" id="image" name="image" accept="image/*" capture="camera">
            <button type="submit">Submit</button>
        `;

        formContent.appendChild(form);
    }

    const buttons = document.querySelectorAll(".custom-button");
    buttons.forEach((button) => {
        button.addEventListener("click", function () {
            const formType = button.textContent;
            createForm(formType);
        });
    });
});
