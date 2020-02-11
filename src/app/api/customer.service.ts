import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class CustomerService {

    public name: string;
    public lastName: string;
    public title: string;
    public add1: string;
    public add2: string;
    public city: string;
    public state: string;
    public zip: string;
    public accountDate = new Date().toISOString();

    constructor() {
    }

    // TODO: Remove this when we're done
    get diagnostic() {
        const {
            name, lastName,
            title, add1,
            add2, city, state, zip, accountDate
        } = this;
        return JSON.stringify({
            name,
            lastName,
            title,
            add1,
            add2,
            city,
            state,
            zip, accountDate
        }, null, 2);
    }
}
