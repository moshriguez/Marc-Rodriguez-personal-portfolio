const aboutMeLink = document.getElementById('about-me-link');
const aboutMe = document.getElementById('about-me');
const marcRodriguez = document.getElementById('marc-rod');

function showAboutMe() {

    function unhideSection() {
        aboutMe.style.display = 'block';
        marcRodriguez.style.cursor = 'auto';
    }

    if (aboutMe.style.display === '') {
        aboutMeLink.addEventListener('click', unhideSection); 
        marcRodriguez.addEventListener('click', unhideSection);
    }

}
showAboutMe();