import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Load } from 'src/app/models/load.model';
import { Store } from 'src/app/models/store.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-load',
  templateUrl: './load.component.html',
  styleUrls: ['./load.component.css'],
})
export class LoadComponent implements OnInit {
  load:Load = new Load();
  stores:Array<Store> = [];
  idLoad: any;
  action: any;

  constructor(
    private data: DataService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  async ngOnInit() {
    this.idLoad = this.route.snapshot.paramMap.get('id');
    this.action = this.idLoad ? 'edit' : 'create';
    if (this.action == 'edit') {
      this.load = await this.data
        .findByParams('/prestamos', this.idLoad)
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
    this.data.insertOne('/prestamos', this.load).subscribe((res: any) => {
      this.router.navigate(['..'], { relativeTo: this.route });
    });
  }

  async updateCollection() {
    this.data
      .updateOnee('/prestamos', this.idLoad, this.load)
      .subscribe((res: any) => {
        this.router.navigate(['..'], { relativeTo: this.route });
      });
  }

  async getStores(){
    this.stores = await await this.data.findByParams('/sucursales', '').toPromise();
  }
}
