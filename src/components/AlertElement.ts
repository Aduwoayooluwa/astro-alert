import { LitElement, html } from 'lit';
import Alert from '../index';
const tagName = 'alert-element';

export class AlertElement extends LitElement {
    render() {
        const alert = new Alert({ type: 'success', message: 'This is a success message!' });
        return html`${alert.render(document.createElement('div'))}`;
    }
}

customElements.define(tagName, AlertElement);