import { LightningElement, track } from 'lwc';
import getRecentShipments from '@salesforce/apex/SwiftShipController.getRecentShipments';

export default class SwiftShipDashboard extends LightningElement {
    @track shipments = [];

    connectedCallback() {
        this.loadShipments();
    }

    loadShipments() {
        getRecentShipments()
            .then(result => {
                this.shipments = result || [];
            })
            .catch(error => {
                console.error('Dashboard error', error);
                this.shipments = [];
            });
    }

    get total() {
        return this.shipments.length;
    }

    get booked() {
        return this.shipments.filter(x => x.Status__c === 'Booked').length;
    }

    get inTransit() {
        return this.shipments.filter(x => x.Status__c === 'In Transit').length;
    }

    get delivered() {
        return this.shipments.filter(x => x.Status__c === 'Delivered').length;
    }
}
