class MiCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        const src = this.getAttribute('src') || '';
        const title = this.getAttribute('title') || 'Sin t\u00edtulo';
        const description = this.getAttribute('description') || 'Sin descripci\u00f3n';

        this.shadowRoot.innerHTML = `
        <style>
            :host {
                display: block;
                width: 100%;
                opacity: 0;
                transform: translateY(16px);
                animation: card-reveal 560ms cubic-bezier(0.22, 1, 0.36, 1) forwards;
                animation-delay: var(--card-delay, 0ms);
            }

            .card {
                width: 100%;
                overflow: hidden;
                border-radius: 16px;
                background-color: #ffffff;
                border: 1px solid rgba(0, 0, 0, 0.05);
                box-shadow: 0 10px 24px rgba(0, 0, 0, 0.10);
                transition: transform 220ms cubic-bezier(0.22, 1, 0.36, 1), box-shadow 220ms cubic-bezier(0.22, 1, 0.36, 1);
                will-change: transform, box-shadow;
            }

            .media {
                overflow: hidden;
                background: linear-gradient(135deg, #ececec, #d9d9d9);
            }

            img {
                display: block;
                width: 100%;
                height: clamp(260px, 28vw, 360px);
                object-fit: cover;
                transition: transform 420ms cubic-bezier(0.22, 1, 0.36, 1), filter 420ms ease;
                will-change: transform, filter;
            }

            .content {
                padding: 16px;
            }

            h3 {
                margin: 0 0 8px;
                font-size: 1.2rem;
            }

            p {
                margin: 0;
                color: #555;
                line-height: 1.5;
            }

            :host(:hover) .card,
            :host(:focus-within) .card {
                transform: translateY(-6px);
                box-shadow: 0 16px 30px rgba(0, 0, 0, 0.14);
            }

            :host(:hover) img,
            :host(:focus-within) img {
                transform: scale(1.04);
                filter: saturate(1.04) contrast(1.01);
            }

            @keyframes card-reveal {
                from {
                    opacity: 0;
                    transform: translateY(16px);
                }
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }

            @media (prefers-reduced-motion: reduce) {
                :host {
                    opacity: 1;
                    transform: none;
                    animation: none;
                }

                .card,
                img {
                    transition: none;
                }
            }

            @media (hover: none) {
                .card,
                img {
                    transition-duration: 160ms;
                }
            }
        </style>

        <div class="card">
            <div class="media">
                <img src="${src}" alt="${title}">
            </div>
            <div class="content">
                <h3>${title}</h3>
                <p>${description}</p>
            </div>
        </div>
        `;
    }
}

if (!customElements.get('mi-card')) {
    customElements.define('mi-card', MiCard);
}
