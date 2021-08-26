import { Component, OnInit } from '@angular/core';
import { inventoryModel } from '../models/inventory.model';
import { requestModel } from '../models/request.model';
import { inventoryService } from '../services/inventory.service';
import { requestService } from '../services/request.service';

@Component({
  selector: 'app-show-results',
  templateUrl: './show-results.component.html',
  styleUrls: ['./show-results.component.css']
})
export class ShowResultsComponent implements OnInit {
  public inventory: inventoryModel[] = [];
  public request: requestModel[] = [];
  constructor(
    private InventoryService: inventoryService,
    private RequestService: requestService) {
  }

  ngOnInit(): void {
  }

  public loadInventory() {
    this.inventory = [];
    return this.InventoryService.getInventories().then(data => {
      data.forEach(x => {
        this.inventory.push(x);
      });
    }).catch(error => {
    });
  }


  public loadRequests() {
    this.inventory = [];
    return this.RequestService.getRequests().then(data => {
      data.forEach(x => {
        this.request.push(x);
      });
    }).catch(error => {
    });
  }

}
