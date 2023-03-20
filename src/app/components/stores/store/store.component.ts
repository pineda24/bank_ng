import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from 'src/app/models/store.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css'],
})
export class StoreComponent implements OnInit {
  store: Store = new Store();
  idStore: any;
  action: any;
  regions: Array<number> = [1, 2];

  constructor(
    private data: DataService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  async ngOnInit() {
    this.idStore = this.route.snapshot.paramMap.get('id');
    this.action = this.idStore ? 'edit' : 'create';
    if (this.action == 'edit') {
      // this.store = await this.data
      //   .findByParams('/sucursales', this.idStore)
      //   .toPromise();
      this.data
        .findById('/sucursales', `${this.idStore}/`)
        .subscribe((res: any) => {
          if (res.sucursales) this.store = res.sucursales[0];
        });
    }
  }

  saveCollection() {
    if (this.action == 'edit') {
      this.updateCollection();
    } else {
      this.createCollection();
    }
  }

  async createCollection() {
    console.log(this.store);
    this.data
      .insertOne('/sucursales', JSON.stringify(this.store))
      .subscribe((res: any) => {
        this.router.navigate(['..'], { relativeTo: this.route });
      });
  }

  async updateCollection() {
    this.data
      .updateOnee('/sucursales',`${this.idStore}/`, this.store)
      .subscribe((res: any) => {
        this.router.navigate(['..'], { relativeTo: this.route });
      });
  }
}
