import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators  } from '@angular/forms';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.styl']
})
export class TransactionComponent implements OnInit {
  transactionForm: FormGroup;
  actions = ['Compra', 'Venda']
  transactions = localStorage.getItem('transactions') ? JSON.parse(localStorage.getItem('transactions')) : []
  submitted = false
  constructor(private fb: FormBuilder) {}

  ngOnInit() {  
    this.transactionForm = this.fb.group({
      transaction: ['Compra', Validators.required],
      name:  ['', Validators.required],
      price: ['', Validators.required]
    })
    localStorage.setItem('transactions', JSON.stringify(this.transactions))
    console.log(localStorage)
    console.log(this.transactionForm.errors)
  }
  
  get validate() { return this.transactionForm.controls; }
  
  onSubmit() {
    this.submitted = true
    if(this.transactionForm.invalid) return;

    this.transactions.unshift(this.transactionForm.value)
    localStorage.setItem('transactions', JSON.stringify(this.transactions))
    console.log(this.transactionForm.value)
    console.log(this.transactions)
    console.log(localStorage)
    this.transactionForm.reset()
  }
}
