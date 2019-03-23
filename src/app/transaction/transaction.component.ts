import { Component, OnInit } from '@angular/core'
import { FormGroup, FormBuilder, Validators  } from '@angular/forms'

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
  totalPrice = 0
  constructor(private fb: FormBuilder) {}

  calculateTransaction() {
    this.totalPrice = this.transactions.reduce((acc, elem, index, array) => {
      const price = parseFloat(elem.price.replace(',', '.'))
      const operator = (elem.transaction === 'Compra' ? '-': '+')
      return (operator === '-') ? acc - price : acc + price
    }, 0)
  }

  ngOnInit() {  
    this.transactionForm = this.fb.group({
      transaction: ['Compra', Validators.required],
      name:  ['', Validators.required],
      price: ['', Validators.required]
    })
    localStorage.setItem('transactions', JSON.stringify(this.transactions))
    
    this.calculateTransaction()
  }
  
  get validate() { return this.transactionForm.controls }
  
  onSubmit() {
    this.submitted = true
    if(this.transactionForm.invalid) return;

    this.transactions.unshift(this.transactionForm.value)
    localStorage.setItem('transactions', JSON.stringify(this.transactions))
   
    this.calculateTransaction()
    this.transactionForm.reset()
  }
}
