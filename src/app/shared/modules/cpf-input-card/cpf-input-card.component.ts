import { Component, OnInit } from '@angular/core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-cpf-input-card',
  templateUrl: './cpf-input-card.component.html',
  styleUrls: ['./cpf-input-card.component.css']
})
export class CpfInputCardComponent implements OnInit {

  constructor(library: FaIconLibrary) {
    library.addIcons(faArrowRight)
  }

  ngOnInit() {
  }

}
