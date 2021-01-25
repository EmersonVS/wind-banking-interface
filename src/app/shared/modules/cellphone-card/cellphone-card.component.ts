import { Component, Input, OnInit, } from '@angular/core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { User } from '../../class/user';
import { AccountCardInfo } from '../../interface/account-card-info';
import { FinancialService } from '../../services/financial/financial.service';
import { environment } from '../../../../environments/environment'

@Component({
  selector: 'app-cellphone-card',
  templateUrl: './cellphone-card.component.html',
  styleUrls: ['./cellphone-card.component.css']
})
export class CellphoneCardComponent implements OnInit {

  @Input() accountInfo: User;
  @Input() cardInfo: AccountCardInfo;
  actionButtons = environment.actionButtons

  constructor(library: FaIconLibrary, private financialService : FinancialService) {
    library.addIcons(faUser)
  }

  ngOnInit() {
  }

}
