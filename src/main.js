window.onload = () => {
    const welcome = document.getElementById('welcome');
    write(welcome, 'Bem vindo!');
    setTimeout(() => {
        welcome.innerHTML = '';
        write(welcome, 'Somos a RM Tecnologia!');
    }, 3000);
}

const write = (el, message) => {
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