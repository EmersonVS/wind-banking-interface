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
        label: 'Resgatar'
      },
      {
        icon: "university",
        label: 'Investir'
      },
      {
        icon: "hand-holding-usd",
        label: 'Doar'
      }
    ],
    ccButtons: [
      {
        icon: "exchange-alt",
        label: 'Transferir'
      },
      {
        icon: "piggy-bank",
        label: 'Guardar'
      },
      {
        icon: "spinner",
        label: 'Pix'
      }
    ]
  }

  constructor(library: FaIconLibrary) {
    library.addIcons(faUser)
  }

  ngOnInit() {
  }

}
