import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

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

//primeng
import { TabMenuModule } from 'primeng/tabmenu';
import { ChartModule } from 'primeng/chart';
import { TabViewModule } from 'primeng/tabview';
import { CalendarModule } from 'primeng/calendar';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { DialogModule } from 'primeng/dialog';
import { ListboxModule } from 'primeng/listbox';
import { ColorPickerModule } from 'primeng/colorpicker';
import { DropdownModule } from 'primeng/dropdown';
import { ToolbarModule } from 'primeng/toolbar';
import { TableModule } from 'primeng/table';
import { MenuModule } from 'primeng/menu';
import { ImageModule } from 'primeng/image';
import { StepsModule } from 'primeng/steps';
import { SelectButtonModule } from 'primeng/selectbutton';
import { DragDropModule } from 'primeng/dragdrop';
import { PanelModule } from 'primeng/panel';

import { HttpClientModule } from '@angular/common/http';
import { StoreComponent } from './components/stores/store/store.component';
import { LoadComponent } from './components/loads/load/load.component';

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
    LoadsComponent,
    StoreComponent,
    LoadComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    TabMenuModule,
    ChartModule,
    TabViewModule,
    CalendarModule,
    ToggleButtonModule,
    DialogModule,
    ListboxModule,
    DropdownModule,
    ToolbarModule,
    TableModule,
    MenuModule,
    ImageModule,
    StepsModule,
    PanelModule,
    DragDropModule,
    ColorPickerModule,
    SelectButtonModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
