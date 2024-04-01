import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-transactions',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './transactions.component.html',
  styleUrl: './transactions.component.scss'
})
export class TransactionsComponent {

  transactionForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService
  )
  {}

  ngOnInit() {
    this.transactionForm = this.formBuilder.group({
      type: ['', Validators.required],
      source: ['', Validators.required],
      destination: ['', Validators.required],
      amount: ['', Validators.required],
      category: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  onSubmit() {
    console.log(this.transactionForm.getRawValue())
    this.userService.userTransactions(this.transactionForm.getRawValue()).subscribe({
      next: (data) => {
        console.log(data);
      },
      error: (err) => {
        console.log(err);
      }
    });
  }
}
