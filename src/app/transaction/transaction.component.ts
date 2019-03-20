import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder  } from '@angular/forms';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.styl']
})
export class TransactionComponent implements OnInit {

  actionForm: FormGroup;

  actions = ['Compra', 'Venda']
  constructor(private fb: FormBuilder) {}

  ngOnInit() {  
    this.actionForm = this.fb.group({
      actionControl: ['Compra']
    });
  }
}
