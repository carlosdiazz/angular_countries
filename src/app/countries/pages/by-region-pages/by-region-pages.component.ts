import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interface/contry.interface';

@Component({
  selector: 'app-by-region-pages',
  templateUrl: './by-region-pages.component.html',
  styleUrl: './by-region-pages.component.css',
})
export class ByRegionPagesComponent {
  constructor(private countriesService: CountriesService) {}
  public countries: Country[] = [];

  searchByRegion(term: string) {
    this.countriesService.searchRegion(term).subscribe((countries) => {
      this.countries = countries;
    });
  }
}
