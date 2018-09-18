import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { AccountStorageService } from './shared/services/accountStorage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AccountStorageService]
})
export class AppComponent implements OnInit{

  accounts: { name: string, status: string }[] = [];
  
  public constructor(private accountStorage: AccountStorageService) { }

  ngOnInit() {
    this.accounts = this.accountStorage.accounts;
  }
  
}
