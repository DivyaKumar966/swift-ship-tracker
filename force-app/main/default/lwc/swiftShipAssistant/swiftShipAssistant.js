import { LightningElement } from 'lwc';

export default class SwiftShipAssistant extends LightningElement {
    draft = '';
    counter = 0;
    messages = [];

    handleInput(event) {
        this.draft = event.target.value;
    }

    handleKey(event) {
        if (event.key === 'Enter') {
            this.send();
        }
    }

    send() {
        const text = this.draft.trim();
        if (!text) return;

        this.counter += 1;
        this.messages = [
            ...this.messages,
            { id: this.counter, className: 'user', text }
        ];
        this.draft = '';

        this.counter += 1;
        this.messages = [
            ...this.messages,
            {
                id: this.counter,
                className: 'bot',
                text: 'Demo response: connect this component to your Agentforce action for live Salesforce answers.'
            }
        ];
    }
}
