import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StencilLibraryModule } from './stencil-library/stencil-library.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StencilLibraryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
