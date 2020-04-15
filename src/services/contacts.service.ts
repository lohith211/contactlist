import { Injectable, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class ContactService implements OnInit {
	public API_URL = environment.API_URL;

	constructor(private http: HttpClient, private router: Router) {}

	ngOnInit(): void {}

	//Get Contact Details
	Getcontactlist(pageno) {
		//console.log(this.API_URL + '?page=' + pageno);
		return this.http.get(this.API_URL + '?page=' + pageno);
	}
}
