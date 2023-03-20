import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CleanComponent } from './layout/clean/clean.component';
import { FooterComponent } from './layout/main/footer/footer.component';
import { HeaderComponent } from './layout/main/header/header.component';
import { MenuComponent } from './layout/main/menu/menu.component';
import { MainComponent } from './layout/main/main.component';
import { SideComponent } from './layout/main/side/side.component';
import { MenuVerticalComponent } from './layout/main/menu/menu-vertical/menu-vertical.component';
import { StoresComponent } from './components/stores/stores.component';
import { LoadsComponent } from './components/loads/loads.component';


@NgModule({
  declarations: [
    AppComponent,
    CleanComponent,
    MainComponent,
    MenuComponent,
    MenuVerticalComponent,
    FooterComponent,
    HeaderComponent,
    SideComponent,
    StoresComponent,
    LoadsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
