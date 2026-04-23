class MiGallery extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        const elementos = [
            {
                src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1170&q=80",
                title: "Paisaje",
                description: "Hermoso paisaje natural con monta&ntilde;as y un lago"
            },
            {
                src: "https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=1170&q=80",
                title: "Perro",
                description: "El mejor amigo del hombre"
            },
            {
                src: "https://images.unsplash.com/photo-1519052537078-e6302a4968d4?auto=format&fit=crop&w=1170&q=80",
                title: "Gato",
                description: "Un gato descansando en una ventana soleada"
            },
            {
                src: "https://images.unsplash.com/photo-1618641662184-bafefb91a542?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGVvbnxlbnwwfHwwfHx8MA%3D%3D",
                title: "Le&oacute;n",
                description: "Le&oacute;n en la sabana"
            }

        ];

        this.shadowRoot.innerHTML = `
        <style>
            :host {
                display: block;
                width: 100%;
                max-width: 1600px;
                margin: 0 auto;
            }

            .gallery {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
                gap: 28px;
                align-items: start;
            }
        </style>

        <section class="gallery">
            ${elementos.map((el, index) => `
                <mi-card
                    style="--card-delay: ${index * 80}ms;"
                    src="${el.src}"
                    title="${el.title}"
                    description="${el.description}">
                </mi-card>
            `).join('')}
        </section>
        `;
    }
}

if (!customElements.get('mi-gallery')) {
    customElements.define('mi-gallery', MiGallery);
}
