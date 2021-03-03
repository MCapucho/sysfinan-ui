// Angular
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// Componentes
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

// Módulos
import { CoreModule } from '../core/core.module';

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
  ],

  imports: [
    CommonModule,
    CoreModule,
    RouterModule
  ],

  exports: [
    FooterComponent,
    HeaderComponent
  ]
})
export class TemplateModule { }
