import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { App } from './app';
import { PropertyBinding } from './src/app/property-binding/property-binding';
import { AttributeBinding } from './src/app/attribute-binding/attribute-binding';

@NgModule({
  declarations: [
    App,
    PropertyBinding,
    AttributeBinding
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
