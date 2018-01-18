import { MenssageComponent } from './menssage/menssage.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MenssageComponent],
  exports: [MenssageComponent]

})
export class SharedModule { }
