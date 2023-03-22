import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from 'src/app/models/store.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-stores',
  templateUrl: './stores.component.html',
  styleUrls: ['./stores.component.css'],
})
export class StoresComponent implements OnInit {

  stores: Array<Store> = [];

  constructor(
    private data: DataService,
    // private route: ActivatedRoute,
    private router: Router // private securityService: SecurityService, // private toast: MessageService,
  ) {}

  ngOnInit(): void {
    this.getStores();
  }

  async getStores() {
    await this.data.findByParams('/sucursales', '').subscribe(
      (res) => {
        this.stores = res.sucursales;
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
