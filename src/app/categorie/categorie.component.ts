import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Categorie } from '../models/categorie';
import { Client } from '../models/client';
import { CategorieService } from '../services/categorie/categorie.service';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.css']
})
export class CategorieComponent implements OnInit {

  public error: string;
  public categories: Categorie;

  @Output() onChoose = new EventEmitter();
  @Output() onError = new EventEmitter();
  @Input() public idCategorie: number;
  constructor(
    private categorieService: CategorieService
  ) { }

  ngOnInit() {
    this.getCategories();
  }

  getCategories() {
    this.categorieService.getCategories().subscribe(
      (categories) => {
        this.categories = categories;
      },
      (error) => {
        this.error = error.message;
        this.onError.emit(this.error);
      }
    );
  }

  onChange(value: string) {
    this.idCategorie = +value;
    this.onChoose.emit(this.idCategorie);
  }

}
