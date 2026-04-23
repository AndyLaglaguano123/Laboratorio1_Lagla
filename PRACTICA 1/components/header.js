class MiHeader extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.shadowRoot.innerHTML = `
        <style>
        header {
            background-color: #000;
            color: #fff;
            padding: 15px;
            text-align: center;
        }

            h1 {
                margin-top: 0;
            }

            nav {
                display: flex;
                justify-content: center;
                flex-wrap: wrap;
                gap: 12px;
            }

            a {
                color: #fff;
                text-decoration: none;
                font-weight: bold;
            }

                nav a:hover {
                    text-decoration: underline;
                }
        </style>
        <header>
            <h1>Aplicación de galería</h1>
            <nav>
            <a href="#/home">Inicio</a>
            <a href="#/gallery">Galería</a>
            <a href="#/direction">Dirección</a>
            <a href="#/contact">Contactos</a>
            <a href="#/about">Sobre nosotros</a>
            </nav>

        </header>
        `;
    }
}

customElements.define('mi-header', MiHeader);
