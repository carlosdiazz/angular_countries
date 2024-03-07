import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interface/contry.interface';
import { Region } from './../../interface/region.type';

@Component({
  selector: 'app-by-region-pages',
  templateUrl: './by-region-pages.component.html',
  styleUrl: './by-region-pages.component.css',
})
export class ByRegionPagesComponent implements OnInit {
  constructor(private countriesService: CountriesService) {}
  public countries: Country[] = [];
  public regions: Region[] = [
    'Africa',
    'Americas',
    'Asia',
    'Europe',
    'Oceania',
  ];
  public selectedRegion?: Region;
  public isLoading = false;

  ngOnInit(): void {
    this.countries = this.countriesService.cacheStore.byRegion.countries;
    this.selectedRegion = this.countriesService.cacheStore.byRegion.region;
  }

  searchByRegion(term: Region) {
    this.isLoading = true;
    this.selectedRegion = term;
    this.countriesService.searchRegion(term).subscribe((countries) => {
      this.countries = countries;
      this, (this.isLoading = false);
    });
  }
}
