import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  constructor() { }

  getCountries = () => (
    [ { id: 0, name: 'Франция'}, { id: 1, name: 'Англия' }, { id: 2, name: 'Нидерланды'} ]
  )
}
