import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CountriesService } from '../../services/countries.service';
import { switchMap } from 'rxjs';
import { Country } from '../../interface/contry.interface';

@Component({
  selector: 'app-country-pages',
  templateUrl: './country-pages.component.html',
  styleUrl: './country-pages.component.css',
})
export class CountryPagesComponent implements OnInit {
  constructor(
    private activatedRouter: ActivatedRoute,
    private countriesServices: CountriesService,
    private router: Router
  ) {}

  public country?: Country;

  ngOnInit(): void {
    this.activatedRouter.params
      .pipe(
        //Este emtodo recibe el valor anterior y regresa un nuevo Observable
        switchMap((params) =>
          this.countriesServices.searchCountryByCode(params['id'])
        )
      )
      .subscribe((country) => {
        if (!country) return this.router.navigateByUrl('');
        //return;
        return (this.country = country);
      });
  }

  //private searchCountry(code: string) {
  //  this.countriesServices.searchCountryByCode(code).subscribe((country) => {
  //    console.log({ country });
  //  });
  //}
}
