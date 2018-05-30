window.onload = () => {
    const welcome = document.getElementById('welcome');
    
    write(welcome, 'Bem vindo!');
    setTimeout(() => write(welcome, 'Somos a RM Tecnologia!'), 3000);
    setTimeout(() => showHeader(), 5000);
}

const showHeader = () => {
    const links = Array.from(document.getElementsByTagName('h4'));
    links.forEach(e => e.style.opacity = 1);
    
    const lnkAbout = document.getElementById('lnk-about')
    lnkAbout.addEventListener('click', _ => loadHTML('about'));
    
    const lnkContact = document.getElementById('lnk-contact')
    lnkContact.addEventListener('click', _ => loadHTML('contact'));
    
    const lnkProjects = document.getElementById('lnk-projects')
    lnkProjects.addEventListener('click', _ => loadHTML('projects'));
}

const write = (el, message) => {
    el.innerHTML = '';
    let i = 0;
    const speed = 100;
    const typeWriter = () => {
        if (i < message.length) {
            el.innerHTML += message.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
    }
    typeWriter();
}

const loadHTML = (page) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', `partial/${page}.html`, true);
    xhr.onreadystatechange = function () {
        if (this.readyState !== 4) return;
        if (this.status !== 200) return;
        document.getElementById('welcome').innerHTML = this.responseText;
    };
    xhr.send();
}

if ('serviceWorker' in navigator) {
    navigator.serviceWorker
        .register('service-worker.js')
        .then(function (reg) {
            console.log('Service worker Registered');
        })
        .catch(function (err) {
            console.log('erro', err);
        });
}