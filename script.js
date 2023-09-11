<script>
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("carForm");
    const nameInput = document.getElementById("name");
    const phoneInput = document.getElementById("phone");
    const emailInput = document.getElementById("email");
    const addressInput = document.getElementById("address");

    form.addEventListener("submit", function(event) {
        let isValid = true;

        // Validation for Name
        if (nameInput.value.trim() === "") {
            isValid = false;
            alert("Please enter your name.");
            nameInput.focus();
            event.preventDefault(); // Prevent form submission
        }

        // Validation for Phone Number
        const phoneRegex = /^\d{10}$/; // Assuming a 10-digit phone number
        if (!phoneRegex.test(phoneInput.value)) {
            isValid = false;
            alert("Please enter a valid phone number.");
            phoneInput.focus();
            event.preventDefault(); // Prevent form submission
        }

        // Validation for Email
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (!emailRegex.test(emailInput.value)) {
            isValid = false;
            alert("Please enter a valid email address.");
            emailInput.focus();
            event.preventDefault(); // Prevent form submission
        }

        // Validation for Address
        if (addressInput.value.trim() === "") {
            isValid = false;
            alert("Please enter your address.");
            addressInput.focus();
            event.preventDefault(); // Prevent form submission
        }

        // Check if at least one car option is selected
        const carOptions = document.querySelectorAll('input[name="carOptions[]"]:checked');
        if (carOptions.length === 0) {
            isValid = false;
            alert("Please select at least one car option.");
            event.preventDefault(); // Prevent form submission
        }

        if (isValid) {
            // The form will be submitted as usual.
        }
    });
});
</script>
