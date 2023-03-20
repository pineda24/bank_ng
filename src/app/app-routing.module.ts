import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoadComponent } from './components/loads/load/load.component';
import { LoadsComponent } from './components/loads/loads.component';
import { StoreComponent } from './components/stores/store/store.component';
import { StoresComponent } from './components/stores/stores.component';
import { MainComponent } from './layout/main/main.component';

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  {
    path: "", component: MainComponent, children: [
      { path: 'stores', component: StoresComponent },
      { path: 'stores/create', component: StoreComponent },
      { path: 'stores/:id', component: StoreComponent },
      { path: 'loans', component: LoadsComponent },
      { path: 'loans/create', component: LoadComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
