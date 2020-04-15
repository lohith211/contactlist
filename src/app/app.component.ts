import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/services/contacts.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
	title = 'contactlist';
	p: number = 1;
	displayMode = 2;
	contactlist: any;
	contacts = [];
	total_items;
	total_pages;
	per_pages;
	pageOfItems: any[];
	config;
	page: any;
	search: string = '';
	search1: string = '';

	constructor(public contactservice: ContactService) {
		this.config = {
			itemsPerPage: this.per_pages,
			currentPage: this.page,
			totalItems: this.total_items
		};
	}
	ngOnInit(): void {
		this.contactservice.Getcontactlist(1).subscribe((data) => {
			this.contactlist = data;
			this.contacts = this.contactlist.data;
			this.total_items = this.contactlist.total;
			this.total_pages = this.contactlist.total_pages;
			this.per_pages = this.contactlist.per_page;
			this.page = this.contactlist.page;
		});
	}
	onDisplayModeChange(mode: number): void {
		this.displayMode = mode;
	}
	getPage(page: number) {
		console.log(page);
		this.contactservice.Getcontactlist(page).subscribe((data) => {
			this.contactlist = data;
			this.contacts = this.contactlist.data;
			this.total_items = this.contactlist.total;
			this.total_pages = this.contactlist.total_pages;
			this.per_pages = this.contactlist.per_page;
			this.page = this.contactlist.page;
		});
	}
}
