const routes = () => {
    const app = document.getElementById('app');
    if (!app) {
        return;
    }

    const path = window.location.hash || '#/home';

    switch (path) {
        case '#/gallery':
            app.innerHTML = '<mi-gallery></mi-gallery>';
            break;
        case '#/direction':
            app.innerHTML = '<mi-direction></mi-direction>';
            break;
        case '#/contact':
            app.innerHTML = '<mi-contact></mi-contact>';
            break;
        case '#/about':
            app.innerHTML = '<mi-about></mi-about>';
            break;
        default:
            app.innerHTML = '<mi-home></mi-home>';
            break
    }

};

window.addEventListener('hashchange', routes);
window.addEventListener('load', routes);
