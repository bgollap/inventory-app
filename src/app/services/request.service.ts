import { Injectable, EventEmitter, Inject } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { requestModel } from '../models/request.model'

@Injectable()
export class requestService {
    public requests: requestModel[] = [];
    private readonly controllerUrl = 'https://localhost:44307/request/Getrequests';
    constructor(private http: HttpClient) {
    }
    public getRequests() {
        let params = new HttpParams();
        return this.http.get<requestModel[]>(this.controllerUrl, { params: params }).toPromise();
    }
 
}