import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './components/main/main.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule
  ],
  exports: [MainComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ModulesModule { }
