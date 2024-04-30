document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('myForm');
    const nameInput = document.getElementById('yourname');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        if (!nameInput.value) {
            alert('Please enter your name.');
        } else {
            alert("Hi " + nameInput.value);
            alert("Survey lang po");
            window.location.href = './mainpage.html';
        }
    });
});
