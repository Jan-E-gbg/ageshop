import { Component, OnInit } from '@angular/core';
import {Company} from './manufactures/company';
import { CollectionOfModel } from './manufactures/collectionOfModel';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Source ';
  
  
  allModels: CollectionOfModel [];
  
  companyId : number;
  
  constructor(private companyService: CompanyService) {
  }
  
  saveData(companyId:number):void {
  
  	this.companyId = companyId;
  	
  	if (this.companyId != '-1000') {
    
    
    // alert("x" + this.companyId)
    this.getAllCompanyModels(this.companyId);
    
	 setTimeout(()=>{
	    
	    if (this.allModels.length > 0 ) {
	    this.showModels = true;
	    }
	    // alert(this.allModels.length)
	   },1000)
    }
  	
  }
constructor() { }
  ngOnInit() {
  }
  
  getAllCompanyModels(companyId: string) {
  
  	this.companyService.getAllCompanyModels(companyId)
	   .subscribe(
                data => this.allModels = data);
  }


  
}
