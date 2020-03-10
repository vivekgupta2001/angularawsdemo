import { Component, OnInit } from '@angular/core';
import { CourceService } from './cources.service';

@Component({
  selector: 'app-cources',
  templateUrl: './cources.component.html',
  styleUrls: ['./cources.component.css']
})
export class CourcesComponent implements OnInit {

  title = "Cources Available";
  cources;
  constructor(courceService:CourceService) {
    this.cources = courceService.getCources(); 
   }

  ngOnInit(): void {
  }

}
