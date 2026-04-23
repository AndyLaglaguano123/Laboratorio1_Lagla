class MiHome extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        const highlights = [
            {
                title: "Galer&iacute;a din&aacute;mica",
                description: "Explora im&aacute;genes organizadas en tarjetas con una presentaci&oacute;n limpia y moderna."
            },
            {
                title: "Navegaci&oacute;n simple",
                description: "Cada secci&oacute;n se muestra con rutas por hash y componentes reutilizables."
            },
            {
                title: "Componentes propios",
                description: "Toda la interfaz est&aacute; construida usando custom elements para mantener una estructura clara."
            }
        ];

        this.shadowRoot.innerHTML = `
        <style>
            :host {
                display: block;
            }

            .home {
                max-width: 1100px;
                margin: 0 auto;
                display: grid;
                gap: 24px;
            }

            .hero,
            .panel {
                background: #fff;
                border-radius: 18px;
                padding: 32px;
                box-shadow: 0 10px 24px rgba(0, 0, 0, 0.08);
            }

            .hero {
                background: linear-gradient(135deg, #ffffff, #f1f1f1);
            }

            h2 {
                margin: 0 0 14px;
                font-size: 2.2rem;
            }

            .lead {
                margin: 0 0 22px;
                color: #555;
                line-height: 1.7;
                max-width: 700px;
            }

            .actions {
                display: flex;
                flex-wrap: wrap;
                gap: 12px;
            }

            .actions a {
                text-decoration: none;
                padding: 12px 18px;
                border-radius: 999px;
                font-weight: bold;
            }

            .primary {
                background: #111;
                color: #fff;
            }

            .secondary {
                background: #ececec;
                color: #111;
            }

            .grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
                gap: 18px;
            }

            article {
                border: 1px solid #e5e5e5;
                border-radius: 14px;
                padding: 20px;
                background: #fafafa;
            }

            h3 {
                margin: 0 0 10px;
                font-size: 1.1rem;
            }

            p {
                margin: 0;
                color: #555;
                line-height: 1.6;
            }

            .summary {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
                gap: 16px;
            }

            .summary div {
                border-left: 4px solid #111;
                padding-left: 14px;
            }

            strong {
                display: block;
                margin-bottom: 6px;
                font-size: 1.1rem;
                color: #111;
            }
        </style>

        <section class="home">
            <section class="hero">
                <h2>Bienvenido a nuestra galer&iacute;a</h2>
                <p class="lead">
                    Este espacio muestra una aplicaci&oacute;n construida con custom elements,
                    pensada para organizar contenido visual y navegar entre secciones
                    de forma sencilla.
                </p>
                <div class="actions">
                    <a class="primary" href="#/gallery">Ver galer&iacute;a</a>
                    <a class="secondary" href="#/about">Conocer m&aacute;s</a>
                </div>
            </section>

            <section class="panel">
                <div class="summary">
                    <div>
                        <strong>4 secciones</strong>
                        <p>Inicio, galer&iacute;a, direcci&oacute;n y p&aacute;ginas informativas.</p>
                    </div>
                    <div>
                        <strong>100% modular</strong>
                        <p>Cada vista vive en su propio archivo y se renderiza como componente.</p>
                    </div>
                    <div>
                        <strong>Dise&ntilde;o claro</strong>
                        <p>La informaci&oacute;n principal aparece organizada en bloques f&aacute;ciles de leer.</p>
                    </div>
                </div>
            </section>

            <section class="panel">
                <h2>Lo que encontrar&aacute;s aqu&iacute;</h2>
                <div class="grid">
                    ${highlights.map((item) => `
                        <article>
                            <h3>${item.title}</h3>
                            <p>${item.description}</p>
                        </article>
                    `).join('')}
                </div>
            </section>
        </section>
        `;
    }
}

if (!customElements.get('mi-home')) {
    customElements.define('mi-home', MiHome);
}
