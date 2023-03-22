import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadView } from 'src/app/models/views/storeView.model';
import { DataService } from 'src/app/services/data.service';
import { Load } from 'src/app/models/load.model';

@Component({
  selector: 'app-loads',
  templateUrl: './loads.component.html',
  styleUrls: ['./loads.component.css']
})
export class LoadsComponent implements OnInit {

  loads: Array<Load> = [];

  constructor(
    private data: DataService,
    private router: Router 
  ) {}

  ngOnInit(): void {
    this.getStores();
  }

  async getStores() {
    await this.data.findByParams('/prestamos', '').subscribe((res) => {
      this.loads = res.prestamos;
    });
  }

  async deleteLoad(id: string) {
    await this.data.deleteOne('/prestamos', `${id}/`).subscribe((res) => {
      console.log(res);
      this.getStores();
    });
  }
}
