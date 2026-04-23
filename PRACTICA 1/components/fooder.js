class MIFooter extends HTMLElement {    
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }   
    connectedCallback(){
        this.shadowRoot.innerHTML = `
        <style>
        footer {
            background-color: #000;
            color: white;
            text-align: center;
            padding: 15px;
        }

        p {
            margin: 0;
        }
        </style>

        <footer>
        <p>Todos los derechos reservados - ESPE 2026 - lagla</p>
        </footer>
        `;
    }
}

customElements.define('mi-footer', MIFooter);
    
