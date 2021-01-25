import { Component, Input, OnInit } from '@angular/core';
import { ActionButton } from 'src/app/shared/interface/action-button';

import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faExchangeAlt, faEye, faHandHoldingUsd, faPiggyBank, faSpinner, faUniversity, faUser, faWallet } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-cellphone-card-content',
  templateUrl: './cellphone-card-content.component.html',
  styleUrls: ['./cellphone-card-content.component.css']
})
export class CellphoneCardContentComponent implements OnInit {

  @Input() saldo;
  @Input() type;
  @Input() actionButtons: Array<ActionButton>;
  saldoRegex: string;

  constructor(library: FaIconLibrary) {
    library.addIcons(faEye, faExchangeAlt, faPiggyBank, faWallet, faSpinner, faUniversity, faHandHoldingUsd)
  }

  ngOnInit() {
    this.saldoRegex = this.setReaisMask(this.saldo);
  }

  setReaisMask = (number) => {
    return `R$ ${number.toFixed(2).replace('.', ',').replace(/(\d)(?=(\d{3})+\,)/g, "$1.")}`;
  }

  transfer = () => {
    console.log("Transferindo");
  }

  soon = () => {
    console.log("Em breve");
  }

  save = () => {
    console.log("Guardando");
  }

  redeem = () => {
    console.log("Resgatando");
  }

  doAction = (specificFunction) => {
    switch (specificFunction) {
      case 'transfer':
        this.transfer()
        break;
      case 'save':
        this.save()
        break;
      case 'redeem':
        this.redeem()
        break;
      case 'soon':
        this.soon()
        break;
    }
  }

}
