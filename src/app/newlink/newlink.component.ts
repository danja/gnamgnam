import { NgModule } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { from } from 'rxjs';

import { Bookmark, Person, Tag } from '../model/model'

/*
@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    NewlinkComponent
  ],
  bootstrap: [NewlinkComponent]
})
*/

@Component({
  selector: 'app-newlink',
  templateUrl: './newlink.component.html',
  styleUrls: ['./newlink.component.css']
})
export class NewlinkComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder
  ) { }

  bookmarkForm = this.formBuilder.group({
    name: '',
    address: ''
  });

  onSubmit(): void {
    // Process checkout data here
    // this.items = this.cartService.clearCart();
    console.warn('submitted', this.bookmarkForm.value);
    this.bookmarkForm.reset();
  }

  ngOnInit(): void {
  }

}
