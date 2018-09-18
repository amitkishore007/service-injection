import { Component, Input} from '@angular/core';
import { LogStatusService } from '../shared/services/LogStatus.service';
import { AccountStorageService } from '../shared/services/accountStorage.service';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css'],
  providers: [LogStatusService]
})
export class AccountsComponent{
  
  @Input() account: {name:string, status:string};
  @Input() pos: number;

  public constructor(private logStatus: LogStatusService, private accountStorage: AccountStorageService) { }

  onUpdateStatus(id: number, status: string) {
    this.accountStorage.onAccountUpdate(id, status);
    this.logStatus.logStatusUpdate(status);
    return false;
  }
}
