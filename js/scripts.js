$(document).ready(function () {
    $('#registrationForm').on('submit', function (event) {
        event.preventDefault(); // Prevent the default form submission
        
        // Fetch form data
        const name = $('#name').val();
        const email = $('#email').val();
        const phone = $('#phone').val();
        const gender = $('#gender').val();
        const message = $('#message').val();

        // Validate inputs (optional)
        if (!name || !email || !phone || !gender || !message) {
            alert('Please fill out all required fields.');
            return;
        }

        // Display the success message and data
        $('#displayName').text(name);
        $('#displayEmail').text(email);
        $('#displayPhone').text(phone);
        $('#displayGender').text(gender);
        $('#displayMessage').text(message);
        $('#successMessage').removeClass('hidden');
    });
});
