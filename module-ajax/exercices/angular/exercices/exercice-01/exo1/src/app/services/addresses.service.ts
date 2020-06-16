import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Address, AddressCreate } from '../model/address';

@Injectable({
  providedIn: 'root'
})
export class AddressesService {

  public addresses: Address[];

  constructor(private httpClient: HttpClient) { }

  getAddresses(){
    return this.httpClient.get<Address[]>("http://localhost:8082/api/addresses",{
      responseType: 'json'
    });
  }

  addNewAddress(address: AddressCreate){
    return this.httpClient.post("http://localhost:8082/api/addresses",address,{
      responseType: 'json'
    }).subscribe((val) => {
      console.log("POST call successful value returned in body", 
                  val);
  },
  response => {
      console.log("POST call in error", response);
  },
  () => {
      console.log("The POST observable is now completed.");
  });
  }
}
