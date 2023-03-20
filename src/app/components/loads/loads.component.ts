import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadView } from 'src/app/models/views/storeView.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-loads',
  templateUrl: './loads.component.html',
  styleUrls: ['./loads.component.css']
})
export class LoadsComponent implements OnInit {

  loads: Array<LoadView> = [];

  constructor(
    private data: DataService,
    private router: Router 
  ) {}

  ngOnInit(): void {
    this.getStores();
  }

  async getStores() {
    await this.data.findByParams('/sucursales', '').subscribe((res) => {
      this.loads = res;
      console.log(this.loads);
    });
  }

}
