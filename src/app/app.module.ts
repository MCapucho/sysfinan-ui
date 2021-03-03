// Angular
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Componentes
import { AppComponent } from './app.component';

// Módulos
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './shared/core/core.module';
import { HttpClientModule } from '@angular/common/http';
import { TemplateModule } from './shared/template/template.module';

@NgModule({
  declarations: [
    AppComponent
  ],

  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    CoreModule,
    HttpClientModule,
    TemplateModule
  ],

  providers: [],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
