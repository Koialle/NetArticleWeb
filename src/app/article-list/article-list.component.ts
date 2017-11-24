import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Article } from '../models/article';
import { Router } from '@angular/router';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {
  public error: string;
  @Input() public articles: Article[];
  @Output() reload = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
