const aboutMeLink = document.getElementById('about-me-link');
const aboutMe = document.getElementById('about-me');
const marcRodriguez = document.getElementById('marc-rod');
const welcomeSection = document.getElementById('welcome-section');

function showAboutMe() {

    function unhideSection() {
        aboutMe.style.display = 'block';
        marcRodriguez.style.cursor = 'auto';
        welcomeSection.style.height = '200px';
    }

    if (aboutMe.style.display === '') {
        aboutMeLink.addEventListener('click', unhideSection); 
        marcRodriguez.addEventListener('click', unhideSection);
    }

}
showAboutMe();