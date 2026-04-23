class MiContact extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        const contacts = [
            {
                title: "Teléfono",
                value: "0979521365",
                detail: "Atención de lunes a viernes, de 08:00 a 17:00."
            },
            {
                title: "Correo",
                value: "ajlagla.espe.com",
                detail: "Respondemos consultas, soporte y solicitudes."
            },
            {
                title: "Ubicación",
                value: "Santo Domingo, Ecuador",
                detail: "Visítanos para conocer nuestros espacios y servicios."
            }
        ];

        this.shadowRoot.innerHTML = `
        <style>
            :host {
                display: block;
            }

            .contact {
                max-width: 1000px;
                margin: 0 auto;
                background: #fff;
                border-radius: 18px;
                padding: 32px;
                box-shadow: 0 10px 24px rgba(0, 0, 0, 0.08);
            }

            h2 {
                margin: 0 0 12px;
                font-size: 2rem;
            }

            .intro {
                margin: 0 0 24px;
                color: #555;
                line-height: 1.6;
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
            }

            strong {
                display: block;
                margin-bottom: 8px;
                font-size: 1rem;
            }

            p {
                margin: 0;
                color: #555;
                line-height: 1.5;
            }
        </style>

        <section class="contact">
            <h2>Contactos</h2>
            <p class="intro">
                Aquí puedes encontrar nuestros canales principales de comunicación.
            </p>
            <div class="grid">
                ${contacts.map((item) => `
                    <article>
                        <h3>${item.title}</h3>
                        <strong>${item.value}</strong>
                        <p>${item.detail}</p>
                    </article>
                `).join('')}
            </div>
        </section>
        `;
    }
}

if (!customElements.get('mi-contact')) {
    customElements.define('mi-contact', MiContact);
}
