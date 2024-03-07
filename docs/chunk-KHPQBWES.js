import{A as _,B as w,C as F,D,E as V,F as X,G as M,H as g,I as N,J as Y,K as Z,O as ee,Q as te,R as ie,S as q,W as O,X as I,Y as ne,a as k,b as z,c as U,d as J,e as C,f as h,g as T,h as H,i as G,j as K,k as P,l as Q,m as R,n as s,o as f,p as d,q as m,r,s as o,t as p,u as W,v as b,w as S,x as L,y as a,z as u}from"./chunk-MEKHP56K.js";var v=(()=>{let e=class e{constructor(i){this.httpClient=i,this.apiUrl="https://restcountries.com/v3.1",this.cacheStore={byCapital:{term:"",countries:[]},byCountries:{term:"",countries:[]},byRegion:{region:"",countries:[]}},this.loadFromLocalStorage()}saveToLocalStorage(){localStorage.setItem("cacheStore",JSON.stringify(this.cacheStore))}loadFromLocalStorage(){localStorage.getItem("cacheStore")&&(this.cacheStore=JSON.parse(localStorage.getItem("cacheStore")))}getCountriesRequest(i){return this.httpClient.get(i).pipe(U(n=>k([])))}searchCountryByCode(i){let n=`${this.apiUrl}/alpha/${i}`;return this.httpClient.get(n).pipe(z(c=>c.length>0?c[0]:null),U(()=>k(null)))}searchCapital(i){let n=`${this.apiUrl}/capital/${i}`;return this.getCountriesRequest(n).pipe(C(c=>this.cacheStore.byCapital={term:i,countries:c}),C(()=>this.saveToLocalStorage()))}searchCountry(i){let n=`${this.apiUrl}/name/${i}`;return this.getCountriesRequest(n).pipe(C(c=>this.cacheStore.byCountries={term:i,countries:c}),C(()=>this.saveToLocalStorage()))}searchRegion(i){let n=`${this.apiUrl}/region/${i}`;return this.getCountriesRequest(n).pipe(C(c=>this.cacheStore.byRegion={region:i,countries:c}),C(()=>this.saveToLocalStorage()))}};e.\u0275fac=function(n){return new(n||e)(Q(Z))},e.\u0275prov=K({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();function pe(t,e){t&1&&(r(0,"div",2),a(1,` No hay paises que mostrar
`),o())}var de=t=>["/countries/by",t];function ue(t,e){if(t&1&&(r(0,"tr")(1,"td"),a(2),o(),r(3,"td"),a(4),o(),r(5,"td"),p(6,"img",5),o(),r(7,"td"),a(8),o(),r(9,"td"),a(10),o(),r(11,"td"),a(12),F(13,"number"),o(),r(14,"td")(15,"a",6),a(16,"Ver mas"),o()()()),t&2){let l=e.$implicit,i=e.index;s(2),u(i+1),s(2),u(l.flag),s(2),m("src",l.flags.svg,R)("alt",l.name.common),s(2),u(l.name.common),s(2),u(l.capital),s(2),u(D(13,8,l.population)),s(3),m("routerLink",w(10,de,l.cca3))}}function he(t,e){if(t&1&&(r(0,"table",3)(1,"thead")(2,"tr")(3,"th"),a(4,"#"),o(),r(5,"th"),a(6,"Icon"),o(),r(7,"th"),a(8,"Bandera"),o(),r(9,"th"),a(10,"Nombre"),o(),r(11,"th"),a(12,"Capital"),o(),r(13,"th"),a(14,"Poblacion"),o(),p(15,"th"),o()(),r(16,"tbody"),d(17,ue,17,12,"tr",4),o()()),t&2){let l=S();s(17),m("ngForOf",l.countries)}}var E=(()=>{let e=class e{constructor(){this.countries=[]}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=h({type:e,selectors:[["countries-table"]],inputs:{countries:"countries"},decls:3,vars:2,consts:[["class","alert alert-warning text-center",4,"ngIf","ngIfElse"],["table",""],[1,"alert","alert-warning","text-center"],[1,"table","table-hover"],[4,"ngFor","ngForOf"],[3,"src","alt"],["href","#",3,"routerLink"]],template:function(n,c){if(n&1&&d(0,pe,2,0,"div",0)(1,he,18,1,"ng-template",null,1,V),n&2){let y=L(2);m("ngIf",c.countries.length===0)("ngIfElse",y)}},dependencies:[M,g,ie,N],styles:["img[_ngcontent-%COMP%]{width:50px}"]});let t=e;return t})();function ge(t,e){t&1&&p(0,"shared-loading-spinner")}var re=(()=>{let e=class e{constructor(i){this.countriesService=i,this.countries=[],this.isLoading=!1,this.initialValue=""}ngOnInit(){this.countries=this.countriesService.cacheStore.byCapital.countries,this.initialValue=this.countriesService.cacheStore.byCapital.term}searchByCapital(i){this.isLoading=!0,this.countriesService.searchCapital(i).subscribe(n=>{this.countries=n,this.isLoading=!1})}};e.\u0275fac=function(n){return new(n||e)(f(v))},e.\u0275cmp=h({type:e,selectors:[["app-by-capital-page"]],decls:11,vars:3,consts:[[1,"row"],[1,"col"],["placeholder","Buscar por Capital",3,"initialValue","onValue","onDebounce"],[4,"ngIf"],[3,"countries"]],template:function(n,c){n&1&&(r(0,"p"),a(1,"Por Capital"),o(),p(2,"hr"),r(3,"div",0)(4,"div",1)(5,"shared-search-box",2),b("onValue",function(B){return c.searchByCapital(B)})("onDebounce",function(B){return c.searchByCapital(B)}),o()()(),p(6,"hr"),r(7,"div",0)(8,"div",1),d(9,ge,1,0,"shared-loading-spinner",3),p(10,"countries-table",4),o()()),n&2&&(s(5),m("initialValue",c.initialValue),s(4),m("ngIf",c.isLoading),s(),m("countries",c.countries))},dependencies:[g,O,I,E]});let t=e;return t})();function ye(t,e){t&1&&p(0,"shared-loading-spinner")}var ae=(()=>{let e=class e{constructor(i){this.countriesService=i,this.countries=[],this.isLoading=!1,this.initialValue=""}ngOnInit(){this.countries=this.countriesService.cacheStore.byCountries.countries,this.initialValue=this.countriesService.cacheStore.byCountries.term}searchByCountries(i){this.isLoading=!0,this.countriesService.searchCountry(i).subscribe(n=>{this.countries=n,this.isLoading=!1})}};e.\u0275fac=function(n){return new(n||e)(f(v))},e.\u0275cmp=h({type:e,selectors:[["app-by-country-page"]],decls:11,vars:3,consts:[[1,"row"],[1,"col"],["placeholder","Buscar por Pais",3,"initialValue","onDebounce"],[4,"ngIf"],[3,"countries"]],template:function(n,c){n&1&&(r(0,"p"),a(1,"Por Pais"),o(),p(2,"hr"),r(3,"div",0)(4,"div",1)(5,"shared-search-box",2),b("onDebounce",function(B){return c.searchByCountries(B)}),o()()(),p(6,"hr"),r(7,"div",0)(8,"div",1),d(9,ye,1,0,"shared-loading-spinner",3),p(10,"countries-table",4),o()()),n&2&&(s(5),m("initialValue",c.initialValue),s(4),m("ngIf",c.isLoading),s(),m("countries",c.countries))},dependencies:[g,O,I,E]});let t=e;return t})();var ve=t=>({"btn-outline-primary":t});function Ce(t,e){if(t&1){let l=W();r(0,"button",6),b("click",function(){let c=H(l).$implicit,y=S();return G(y.searchByRegion(c))}),a(1),o()}if(t&2){let l=e.$implicit,i=S();m("ngClass",w(2,ve,i.selectedRegion===l)),s(),_(" ",l," ")}}function Se(t,e){t&1&&p(0,"shared-loading-spinner")}var se=(()=>{let e=class e{constructor(i){this.countriesService=i,this.countries=[],this.regions=["Africa","Americas","Asia","Europe","Oceania"],this.isLoading=!1}ngOnInit(){this.countries=this.countriesService.cacheStore.byRegion.countries,this.selectedRegion=this.countriesService.cacheStore.byRegion.region}searchByRegion(i){this.isLoading=!0,this.selectedRegion=i,this.countriesService.searchRegion(i).subscribe(n=>{this.countries=n,this.isLoading=!1})}};e.\u0275fac=function(n){return new(n||e)(f(v))},e.\u0275cmp=h({type:e,selectors:[["app-by-region-pages"]],decls:11,vars:3,consts:[[1,"row"],[1,"col","text-center"],["class","btn mx-2",3,"ngClass","click",4,"ngFor","ngForOf"],[1,"col"],[4,"ngIf"],[3,"countries"],[1,"btn","mx-2",3,"ngClass","click"]],template:function(n,c){n&1&&(r(0,"p"),a(1,"Por Region"),o(),p(2,"hr"),r(3,"div",0)(4,"div",1),d(5,Ce,2,4,"button",2),o()(),p(6,"hr"),r(7,"div",0)(8,"div",3),d(9,Se,1,0,"shared-loading-spinner",4),p(10,"countries-table",5),o()()),n&2&&(s(5),m("ngForOf",c.regions),s(4),m("ngIf",c.isLoading),s(),m("countries",c.countries))},dependencies:[X,M,g,I,E]});let t=e;return t})();function xe(t,e){t&1&&(r(0,"div",2),a(1," Espere Por Favor "),o())}function be(t,e){if(t&1&&(r(0,"div")(1,"div",3)(2,"div",4)(3,"h2"),a(4," Pais: "),r(5,"strong"),a(6),o()()()(),r(7,"div",3)(8,"div",5)(9,"h3"),a(10,"Bandera:"),o(),p(11,"img",6),o(),r(12,"div",7)(13,"h3"),a(14,"Informacion"),o(),r(15,"ul",8)(16,"li",9)(17,"strong"),a(18,"Poblacion: "),o(),a(19),F(20,"number"),o(),r(21,"li",9)(22,"strong"),a(23,"Codigo: "),o(),a(24),o()()()(),r(25,"div",10)(26,"div",7)(27,"h3"),a(28,"Traducciones"),o(),r(29,"div",11)(30,"span",12),a(31),o(),r(32,"span",12),a(33),o(),r(34,"span",12),a(35),o(),r(36,"span",12),a(37),o(),r(38,"span",12),a(39),o()()()()()),t&2){let l=S();s(6),_(" ",l.country.name.common,""),s(5),m("src",l.country.flags.svg,R)("alt",l.country.name.common),s(8),_("",D(20,10,l.country.population)," "),s(5),_("",l.country.cca3," "),s(7),u(l.country.translations.ara.common),s(2),u(l.country.translations.bre.common),s(2),u(l.country.translations.ces.common),s(2),u(l.country.translations.deu.common),s(2),u(l.country.translations.ita.common)}}var ce=(()=>{let e=class e{constructor(i,n,c){this.activatedRouter=i,this.countriesServices=n,this.router=c}ngOnInit(){this.activatedRouter.params.pipe(J(i=>this.countriesServices.searchCountryByCode(i.id))).subscribe(i=>i?this.country=i:this.router.navigateByUrl(""))}};e.\u0275fac=function(n){return new(n||e)(f(ee),f(v),f(te))},e.\u0275cmp=h({type:e,selectors:[["app-country-pages"]],decls:3,vars:2,consts:[["loading",""],[4,"ngIf","ngIfElse"],[1,"alert","alert-info","text-center"],[1,"row"],[1,"col-12"],[1,"col-4"],[1,"img-thumbnail",3,"src","alt"],[1,"col"],[1,"list-group"],[1,"list-group-item"],[1,"row","mt-2"],[1,"d-flex","flex-wrap"],[1,"badge","bg-primary","m-1"]],template:function(n,c){if(n&1&&d(0,xe,2,0,"ng-template",null,0,V)(2,be,40,12,"div",1),n&2){let y=L(1);s(2),m("ngIf",c.country)("ngIfElse",y)}},dependencies:[g,N]});let t=e;return t})();var _e=[{path:"by-capital",component:re},{path:"by-country",component:ae},{path:"by-region",component:se},{path:"by/:id",component:ce},{path:"**",redirectTo:"by-capital"}],le=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=T({type:e}),e.\u0275inj=P({imports:[q.forChild(_e),q]});let t=e;return t})();var We=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=T({type:e}),e.\u0275inj=P({imports:[Y,le,ne]});let t=e;return t})();export{We as CountriesModule};
