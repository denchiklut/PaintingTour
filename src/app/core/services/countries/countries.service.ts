import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  constructor() { }

  getCountries = () => (
    ['Франция', 'Англия', 'Нидерланды']
  )
}
