const switchBtn = document.getElementById('switch-mode');
const moon = switchBtn.getElementsByClassName('moon')[0];
const sun = switchBtn.getElementsByClassName('sun')[0];

const changeMode = (event) => {

    document.body.classList.toggle('dark');

    const mode = document.body.getAttribute('class');

    if(mode !== 'dark') {

        document.body.style = 'background-color: #FFF; color: #000';
        moon.style = 'display:none';
        sun.style = '';

    } else {

        document.body.style = 'background-color: #000; color: #FFF';
        moon.style = '';
        sun.style = 'display:none';

    }

    button = event.target;

}

switchBtn.addEventListener('click', changeMode);