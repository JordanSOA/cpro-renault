import { Component, OnInit } from '@angular/core';
import { AddressesService } from '../services/addresses.service';
import { FromEventTarget } from 'rxjs/internal/observable/fromEvent';
import { Address, AddressCreate } from '../model/address';

@Component({
  selector: 'app-address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.css']
})
export class AddressFormComponent implements OnInit {

  constructor(private addressService: AddressesService) {

  }

  ngOnInit(): void {
  }

  addNewAddress(street: string,city: string,zipCode: string, country:string){
    var newAdd: AddressCreate = {
      street,
      city,
      zipCode,
      country
    }
    //console.dir(newAdd);
    this.addressService.addNewAddress(newAdd);
  }
}
