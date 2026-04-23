class MiDirection extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        const references = [
            {
                title: "Direcci&oacute;n principal",
                detail: "Av. Principal y calle Central, Latacunga, Ecuador."
            },
            {
                title: "Horario de atenci&oacute;n",
                detail: "Lunes a viernes de 08:00 a 17:00 y s&aacute;bados de 09:00 a 13:00."
            },
            {
                title: "Punto de referencia",
                detail: "Nos encontramos cerca del centro de la ciudad y de las rutas de transporte."
            }
        ];

        const questions = [
            {
                question: "\u00bfPor d\u00f3nde debo ingresar?",
                answer: "Ingresa por la avenida principal de la ciudad y avanza hasta la zona comercial."
            },
            {
                question: "\u00bfQu\u00e9 ruta debo seguir despu\u00e9s?",
                answer: "Contin\u00faa hasta la calle Central y sigue la se\u00f1alizaci\u00f3n local para mantenerte en la v\u00eda correcta."
            },
            {
                question: "\u00bfC\u00f3mo identifico el acceso final?",
                answer: "Ubica el acceso principal del edificio en la zona comercial, cerca del punto de referencia indicado."
            }
        ];

        this.shadowRoot.innerHTML = `
        <style>
            :host {
                display: block;
            }

            .direction {
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
                background: linear-gradient(135deg, #ffffff, #f4f4f4);
            }

            h2 {
                margin: 0 0 12px;
                font-size: 2rem;
            }

            .intro,
            .faq-intro {
                margin: 0;
                color: #555;
                line-height: 1.7;
                max-width: 720px;
            }

            .faq-intro {
                margin-bottom: 20px;
            }

            .grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
                gap: 18px;
            }

            article {
                border: 1px solid #e5e5e5;
                border-radius: 14px;
                background: #fafafa;
                padding: 20px;
            }

            h3 {
                margin: 0 0 10px;
            }

            p {
                margin: 0;
                color: #555;
                line-height: 1.6;
            }

            @media (max-width: 640px) {
                .hero,
                .panel {
                    padding: 24px;
                }
            }
        </style>

        <section class="direction">
            <section class="hero">
                <h2>Direcci&oacute;n</h2>
                <p class="intro">
                    En esta secci&oacute;n puedes revisar nuestra ubicaci&oacute;n general, horarios
                    y una gu&iacute;a r&aacute;pida para llegar con facilidad.
                </p>
            </section>

            <section class="panel">
                <div class="grid">
                    ${references.map((item) => `
                        <article>
                            <h3>${item.title}</h3>
                            <p>${item.detail}</p>
                        </article>
                    `).join('')}
                </div>
            </section>

            <section class="panel">
                <h2>C&oacute;mo llegar</h2>
                <p class="faq-intro">
                    Selecciona una pregunta para ver la respuesta y seguir la ruta paso a paso.
                </p>
                <mi-faq></mi-faq>
            </section>
        </section>
        `;

        this.shadowRoot.querySelector('mi-faq').items = questions;
    }
}

if (!customElements.get('mi-direction')) {
    customElements.define('mi-direction', MiDirection);
}
