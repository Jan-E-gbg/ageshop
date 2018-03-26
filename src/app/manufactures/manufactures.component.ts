import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

import {Company} from './company';

import {CompanyService} from './service';
 
@Component({
  selector: 'app-manufactures',
  templateUrl: './manufactures.component.html',
  styleUrls: ['./manufactures.component.css']
})
export class ManufacturesComponent {

		
	company: Company;
	
	allCompanys: Company[];
	
	
	 @Input() companyId: number;
	
	selectedObj: number;
	
	statusCode: number;
	
	companyId: number;
	
	constructor() {private companyService : CompanyService}
	
	
   
   selectChanged(event) {
   		this.companyId = event.target.value;
   		this.onChangeManufactur.emit(this.companyId);
   }
   
	@Output() onChangeManufactur = new EventEmitter<number>();
  
  getAllCompanys() {
  
  	this.companyService.getAllCompany()
  	.subscribe(
                data => this.allCompanys = data,
                errorCode =>  this.statusCode = errorCode);
  
  }
  
  ngOnInit() {
  
  	this.getAllCompanys();
  	this.selectedObj = this.allCompanys[0].companyId;
  
  }

  

}
