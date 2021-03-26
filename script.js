const aboutMeLink = document.getElementById('about-me-link');
const aboutMe = document.getElementById('about-me');
const marcRodriguez = document.getElementById('marc-rod');
const welcomeSection = document.getElementById('welcome-section');

function showAboutMe() {

    function unhideSection() {
        aboutMe.style.display = 'block';
        marcRodriguez.style.cursor = 'auto';
        welcomeSection.style.height = '200px';
        welcomeSection.style.paddingTop = '50px';
    }

    if (aboutMe.style.display === '') {
        aboutMeLink.addEventListener('click', unhideSection); 
        marcRodriguez.addEventListener('click', unhideSection);
    }

}
showAboutMe();

const wannaSeeMore = document.getElementById('wanna-see-more');
const moreToCome = document.querySelector('.project-tile p:last-child');

function showMoreToCome() {
    function unhideString() {
        moreToCome.style.display = 'block';
        wannaSeeMore.style.cursor = 'auto';
    }

    wannaSeeMore.addEventListener('click', unhideString);
}

showMoreToCome();