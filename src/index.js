/* eslint-disable no-console */
import { Model, View } from 'backbone';

class App extends View {
    constructor() {
        super();
        this.el = document.getElementById('app');
        this.model = new Model({ mess: 'Welcome to Your App' });
    }

    render() {
        this.el.innerHTML = `<p>${this.model.get('mess')}</p>`;
    }
}

const app = new App();

document.addEventListener('DOMContentLoaded', () => {
    app.render();
});
