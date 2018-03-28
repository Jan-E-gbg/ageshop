import { Injectable } from '@angular/core';
import { Http, Response, Headers, URLSearchParams, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Company } from './company';
import { CollectionOfModel } from './collectionOfModel';

@Injectable()
export class CompanyService {

	listAllCompanyUrl = "listAllCompanys";
	getProductModelUrl = 'http://localhost:8080/CrunchifySpringMVCTutorial/restmain/modelItem';
	
	constructor(private http:Http) { 
    }
    
    getAllCompanys(): Observable<Company[]> {
        return this.http.get(this.listAllCompanyUrl)
	       .map(this.extractData)
	       .catch(this.handleError);

    }
    
    getProductModelById(productId: string): Observable<CollectionOfModel> {
    
    	let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
   		let cpParams = new URLSearchParams();
   		cpParams.set('productId', productId);			
   		let options = new RequestOptions({ headers: cpHeaders, params: cpParams });
   		
   		return this.http.get(this.getProductModelUrl, options)
	   .map(this.extractData)
	   .catch(this.handleError);
    
    }
    
    private extractData(res: Response) {
	let body = res.json();
        return body;
    }
    private handleError (error: Response | any) {
	console.error(error.message || error);
	return Observable.throw(error.status);
    }
	
}