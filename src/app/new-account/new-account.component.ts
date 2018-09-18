import { Component, ViewChild, ElementRef } from '@angular/core';
import { LogStatusService } from '../shared/services/LogStatus.service';
import { AccountStorageService } from '../shared/services/accountStorage.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers:[LogStatusService]
})
export class NewAccountComponent{

  @ViewChild('accountName') accountName: ElementRef;
  @ViewChild('accountStatus') accountStatus: ElementRef;

  public constructor(private logStatus: LogStatusService, private accountStorage: AccountStorageService) { }

  onAddAccount() {
    //storage service
    this.accountStorage.onAddAccount(this.accountName.nativeElement.value, this.accountStatus.nativeElement.value);
    this.logStatus.logStatusUpdate(this.accountStatus.nativeElement.value);  
    return false;
  }

}
