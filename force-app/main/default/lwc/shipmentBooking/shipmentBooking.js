import { LightningElement } from 'lwc';
import createShipment from '@salesforce/apex/SwiftShipController.createShipment';

export default class ShipmentBooking extends LightningElement {
    customerId = '';
    source = '';
    destination = '';
    weight = '';
    expectedDelivery = '';
    loading = false;
    message = '';

    handleChange(event) {
        this[event.target.dataset.field] = event.target.value;
    }

    bookShipment() {
        this.message = '';
        if (!this.source || !this.destination || !this.weight) {
            this.message = 'Please fill source, destination and package weight.';
            return;
        }

        this.loading = true;
        createShipment({
            customerId: this.customerId || null,
            source: this.source,
            destination: this.destination,
            packageWeight: Number(this.weight),
            expectedDelivery: this.expectedDelivery || null
        })
        .then(id => {
            this.message = 'Shipment booked successfully. Record Id: ' + id;
            this.source = '';
            this.destination = '';
            this.weight = '';
            this.expectedDelivery = '';
        })
        .catch(error => {
            this.message = error?.body?.message || 'Unable to create shipment.';
        })
        .finally(() => {
            this.loading = false;
        });
    }
}
