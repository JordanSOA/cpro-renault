import { Component, OnInit } from '@angular/core';
import { AddressesService } from '../services/addresses.service';
import { Address } from '../model/address';

@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.css']
})
export class PersonFormComponent implements OnInit {

  public addressService: AddressesService;
  public addresses: Address[];

  constructor(addservice: AddressesService) {
    this.addressService = addservice;
  }

  ngOnInit(): void {
  this.addressService.getAddresses().subscribe((data) => {
    this.addresses = data;
    });
  }

}
