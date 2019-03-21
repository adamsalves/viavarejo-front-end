import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder  } from '@angular/forms';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.styl']
})
export class TransactionComponent implements OnInit {
  transactionForm: FormGroup;
  actions = ['Compra', 'Venda']
  transactions = []
  constructor(private fb: FormBuilder) {}

  ngOnInit() {  
    this.transactionForm = this.fb.group({
      transaction: ['Compra'],
      name: '',
      price: ''
    })
  }
  onSubmit() {
    this.transactions.push(this.transactionForm.value)
    console.log(this.transactionForm.value)
    console.log(this.transactions)
    this.transactionForm.reset()
  }
}
