import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoadsComponent } from './components/loads/loads.component';
import { StoresComponent } from './components/stores/stores.component';
import { MainComponent } from './layout/main/main.component';

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  {
    path: "", component: MainComponent, children: [
      { path: 'stores', component: StoresComponent },
      { path: 'loans', component: LoadsComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
