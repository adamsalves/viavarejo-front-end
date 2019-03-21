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
  transactions = localStorage.getItem('transactions') ? JSON.parse(localStorage.getItem('transactions')) : []
  constructor(private fb: FormBuilder) {}

  ngOnInit() {  
    this.transactionForm = this.fb.group({
      transaction: ['Compra'],
      name: '',
      price: ''
    })
    localStorage.setItem('transactions', JSON.stringify(this.transactions))
    console.log(localStorage)
  }
  onSubmit() {
    this.transactions.unshift(this.transactionForm.value)
    localStorage.setItem('transactions', JSON.stringify(this.transactions))
    console.log(this.transactionForm.value)
    console.log(this.transactions)
    console.log(localStorage)
    this.transactionForm.reset()
  }
}
