import { Injectable, EventEmitter, Inject } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { inventoryModel } from '../models/inventory.model'

@Injectable()
export class inventoryService {
    public inventories: inventoryModel[] = [];
    private readonly controllerUrl = 'https://localhost:44307/inventory/GetInventory';
    constructor(private http: HttpClient) {
    }

    public getInventories() {
        let params = new HttpParams();
        return this.http.get<inventoryModel[]>(this.controllerUrl, { params: params }).toPromise();
    }
 
}