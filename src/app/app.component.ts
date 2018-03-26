import { Component, OnInit } from '@angular/core';
import {Company} from './manufactures/company';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Source ';
  
  companyId : number;
  
  saveData(companyId:number):void {
  
  	this.companyId = companyId;
  	
  }
constructor() { }
  ngOnInit() {
  }


  
}
