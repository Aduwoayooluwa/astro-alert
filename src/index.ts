"use client"
class Alert {
    message: string
    type: string
    el: any;
    textContent: string

    constructor( { message, type }: any) {
        this.message = message;
        this.type = type;
        this.el = document.createElement('div');
        this.el.classList.add('alert', `alert-${type}`);
        this.textContent = message
    }

    render(parent: any) {
        parent.appendChild(this.el)

    }
}

export default Alert