import { LightningElement } from 'lwc';
import trackShipment from '@salesforce/apex/SwiftShipController.trackShipment';

export default class ShipmentTracking extends LightningElement {
    shipmentNumber = '';
    shipment;
    message = '';
    loading = false;

    handleInput(event) {
        this.shipmentNumber = event.target.value;
    }

    track() {
        this.shipment = undefined;
        this.message = '';
        if (!this.shipmentNumber) {
            this.message = 'Enter a shipment number.';
            return;
        }

        this.loading = true;
        trackShipment({ shipmentNumber: this.shipmentNumber.trim() })
            .then(result => {
                if (result) {
                    this.shipment = result;
                } else {
                    this.message = 'Shipment not found.';
                }
            })
            .catch(error => {
                this.message = error?.body?.message || 'Tracking failed.';
            })
            .finally(() => {
                this.loading = false;
            });
    }
}
