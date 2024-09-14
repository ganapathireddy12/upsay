document.addEventListener('DOMContentLoaded', () => {
    const sun = document.querySelector('.sun');
    const moon = document.querySelector('.moon');

    // URLs to redirect to
    const sunRedirectUrl = 'sun.html'; // Page for the sun
    const moonRedirectUrl = 'moon.html'; // Page for the moon

    // Event listeners for redirection
    sun.addEventListener('click', () => {
        window.location.href = sunRedirectUrl;
    });

    moon.addEventListener('click', () => {
        window.location.href = moonRedirectUrl;
    });
});
