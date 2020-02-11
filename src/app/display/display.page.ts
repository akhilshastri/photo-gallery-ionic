import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {CustomerService} from '../api/customer.service';

@Component({
    selector: 'app-display',
    templateUrl: './display.page.html',
    styleUrls: ['./display.page.scss'],
})
export class DisplayPage implements OnInit {

    constructor(
        private router: Router,
        public customer: CustomerService
    ) {
    }

    ngOnInit() {
    }

    goBack() {
        this.router.navigate(['/']);
    }
}
