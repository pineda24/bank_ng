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

  constructor(
    private data: DataService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  async ngOnInit() {
    this.idStore = this.route.snapshot.paramMap.get('id');
    this.action = this.idStore ? 'edit' : 'create';
    if (this.action == 'edit') {
      this.store = await this.data
        .findByParams('/sucursales', this.idStore)
        .toPromise();
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
    this.data
      .insertOne('/sucursales', this.store)
      .subscribe((res: any) => {
        this.router.navigate(['..'], { relativeTo: this.route });
      });
  }

  async updateCollection() {
    this.data
      .updateOnee('/sucursales', this.idStore, this.store)
      .subscribe((res: any) => {
        this.router.navigate(['..'], { relativeTo: this.route });
      });
  }
}
