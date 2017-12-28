import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CommonService } from '../services/common/common.service';
import { Domaine } from '../models/domaine';

@Component({
  selector: 'app-domaine',
  templateUrl: './domaine.component.html',
  styleUrls: ['./domaine.component.css']
})
export class DomaineComponent implements OnInit {
  @Input() public domaineId: number;
  @Output() onChoose = new EventEmitter();
  @Output() onError = new EventEmitter();
  public domaines: Domaine[];

  constructor(
    private commonService: CommonService
  ) { }

  ngOnInit() {
    this.getDomaines();
  }

  getDomaines(): void {
    this.commonService.getDomaines().subscribe(
      (domaines) => {
        this.domaines = domaines;
      },
      (error) => {
        this.onError.emit(error.message);
      }
    )
  }

  onChange(value: string) {
    this.domaineId = +value;
    this.onChoose.emit(this.domaineId);
  }
}
