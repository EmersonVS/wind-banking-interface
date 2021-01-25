import { Component, Input, OnInit, } from '@angular/core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { AccountBasicInfo } from '../../class/account-basic-info';
import { AccountCardInfo } from '../../interface/account-card-info';

@Component({
  selector: 'app-cellphone-card',
  templateUrl: './cellphone-card.component.html',
  styleUrls: ['./cellphone-card.component.css']
})
export class CellphoneCardComponent implements OnInit {

  @Input() accountInfo: AccountBasicInfo;
  @Input() cardInfo: AccountCardInfo;
  actionButtons = {
    ppButtons: [
      {
        icon: "wallet",
        label: 'Resgatar',
        function: 'redeem'
      },
      {
        icon: "university",
        label: 'Investir',
        function: 'soon'
      },
      {
        icon: "hand-holding-usd",
        label: 'Doar',
        function: 'soon'
      }
    ],
    ccButtons: [
      {
        icon: "exchange-alt",
        label: 'Transferir',
        function: 'transfer'
      },
      {
        icon: "piggy-bank",
        label: 'Guardar',
        function: 'save'
      },
      {
        icon: "spinner",
        label: 'Pix',
        function: 'soon'
      }
    ]
  }

  constructor(library: FaIconLibrary) {
    library.addIcons(faUser)
  }

  ngOnInit() {
  }

}
