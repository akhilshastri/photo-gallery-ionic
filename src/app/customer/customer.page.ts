import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CustomerService} from '../api/customer.service';

@Component({
    selector: 'app-customer',
    templateUrl: './customer.page.html',
    styleUrls: ['./customer.page.scss'],
})
export class CustomerPage implements OnInit {

    name: string;
    lastName: string;
    title: string;

    add1: string;
    add2: string;
    city: string;
    state: string;
    zip: string;
    accountDate = new Date().toISOString();
    submitted = false;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        public customer: CustomerService
    ) {
    }

    ngOnInit() {

    }

    onSubmit() {
        this.submitted = true;
        this.router.navigate(['/display']);
    }


}
