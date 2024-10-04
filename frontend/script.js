const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');
const loader = document.getElementById('loader');
const signUpModal = document.getElementById('signUpModal');
const signInModal = document.getElementById('signInModal');
const closeButtons = document.querySelectorAll('.close');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
});

// Show Loader on Page Load
window.addEventListener('load', () => {
    loader.style.display = 'none'; // Hide loader after page loads
});

// Theme Toggle Functionality
const darkModeToggle = document.getElementById('darkModeToggle');
darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// Show Modal Functions
const showModal = (modal) => {
    modal.style.display = 'block';
};

const closeModal = (modal) => {
    modal.style.display = 'none';
};

// Event Listeners for Sign Up and Sign In Buttons
document.querySelector('.sign-up').addEventListener('click', () => showModal(signUpModal));
document.querySelector('.sign-in').addEventListener('click', () => showModal(signInModal));

// Event Listeners for Close Buttons
closeButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
        closeModal(btn.closest('.modal'));
    });
});

// Close modal when clicking outside of it
window.addEventListener('click', (event) => {
    if (event.target.classList.contains('modal')) {
        closeModal(event.target);
    }
});

// Form Submission Handlers
const handleFormSubmit = (formId) => {
    const form = document.getElementById(formId);
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const feedback = form.querySelector('.form-feedback');
        feedback.textContent = 'Submitting...'; // Simulate form submission
        setTimeout(() => {
            feedback.textContent = 'Success!'; // Simulated success feedback
            closeModal(signUpModal); // Close the modal after submission
            form.reset(); // Reset the form
        }, 2000);
    });
};

handleFormSubmit('signUpForm');
handleFormSubmit('signInForm');
