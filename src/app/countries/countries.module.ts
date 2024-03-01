import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ByCapitalPageComponent } from './pages/by-capital-page/by-capital-page.component';
import { ByCountryPageComponent } from './pages/by-country-page/by-country-page.component';
import { ByRegionPagesComponent } from './pages/by-region-pages/by-region-pages.component';
import { CountryPagesComponent } from './pages/country-pages/country-pages.component';
import { CountriesRoutingModule } from './countries-routing.module';

@NgModule({
  declarations: [
    ByCapitalPageComponent,
    ByCountryPageComponent,
    ByRegionPagesComponent,
    CountryPagesComponent,
  ],
  imports: [CommonModule, CountriesRoutingModule],
})
export class CountriesModule {}
