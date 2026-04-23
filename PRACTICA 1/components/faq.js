class MiFaq extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this._items = [];
    }

    set items(value) {
        this._items = Array.isArray(value) ? value : [];
        this.render();
    }

    get items() {
        return this._items;
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = `
        <style>
            :host {
                display: block;
            }

            .faq-list {
                display: grid;
                gap: 14px;
            }

            .faq-item {
                border: 1px solid #e5e5e5;
                border-radius: 16px;
                background: #fafafa;
                overflow: hidden;
                transition: box-shadow 180ms ease, border-color 180ms ease, transform 180ms ease;
            }

            .faq-item[data-open="true"] {
                border-color: #cfcfcf;
                box-shadow: 0 12px 24px rgba(0, 0, 0, 0.06);
                transform: translateY(-2px);
            }

            .faq-button {
                width: 100%;
                border: 0;
                background: transparent;
                cursor: pointer;
                padding: 18px 20px;
                display: grid;
                grid-template-columns: auto 1fr auto;
                gap: 14px;
                align-items: center;
                text-align: left;
                font: inherit;
                color: #111;
            }

            .faq-number {
                width: 34px;
                height: 34px;
                border-radius: 50%;
                display: grid;
                place-items: center;
                background: #111;
                color: #fff;
                font-weight: bold;
                font-size: 0.95rem;
            }

            .faq-question {
                font-size: 1.05rem;
                font-weight: 700;
            }

            .faq-icon {
                font-size: 1.4rem;
                line-height: 1;
                color: #444;
                transition: transform 180ms ease;
            }

            .faq-item[data-open="true"] .faq-icon {
                transform: rotate(45deg);
            }

            .faq-answer {
                padding: 0 20px 20px 68px;
                color: #555;
                line-height: 1.6;
            }

            .faq-answer[hidden] {
                display: none;
            }

            @media (max-width: 640px) {
                .faq-button {
                    grid-template-columns: auto 1fr;
                }

                .faq-icon {
                    display: none;
                }

                .faq-answer {
                    padding-left: 20px;
                }
            }
        </style>

        <div class="faq-list"></div>

        <template id="faq-template">
            <article class="faq-item" data-open="false">
                <button class="faq-button" type="button" aria-expanded="false">
                    <span class="faq-number"></span>
                    <span class="faq-question"></span>
                    <span class="faq-icon">+</span>
                </button>
                <div class="faq-answer" hidden></div>
            </article>
        </template>
        `;

        const list = this.shadowRoot.querySelector('.faq-list');
        const template = this.shadowRoot.getElementById('faq-template');

        this._items.forEach((item, index) => {
            const fragment = template.content.cloneNode(true);
            const faqItem = fragment.querySelector('.faq-item');
            const button = fragment.querySelector('.faq-button');
            const number = fragment.querySelector('.faq-number');
            const question = fragment.querySelector('.faq-question');
            const answer = fragment.querySelector('.faq-answer');
            const answerId = `faq-answer-${index + 1}`;

            number.textContent = `${index + 1}`;
            question.textContent = item.question;
            answer.textContent = item.answer;
            answer.id = answerId;
            button.setAttribute('aria-controls', answerId);

            button.addEventListener('click', () => {
                const isOpen = faqItem.dataset.open === 'true';

                list.querySelectorAll('.faq-item').forEach((currentItem) => {
                    currentItem.dataset.open = 'false';
                    currentItem.querySelector('.faq-button').setAttribute('aria-expanded', 'false');
                    currentItem.querySelector('.faq-answer').hidden = true;
                });

                if (!isOpen) {
                    faqItem.dataset.open = 'true';
                    button.setAttribute('aria-expanded', 'true');
                    answer.hidden = false;
                }
            });

            list.appendChild(fragment);
        });
    }
}

if (!customElements.get('mi-faq')) {
    customElements.define('mi-faq', MiFaq);
}
