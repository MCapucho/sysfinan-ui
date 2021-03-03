// Angular
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// Componentes
import { ReceitasComponent } from './receitas/receitas.component';

// Módulos
import { CadastrosRoutingModule } from './cadastros-routing.module';
import { CoreModule } from '../shared/core/core.module';

@NgModule({
  declarations: [
    ReceitasComponent
  ],

  imports: [
    CadastrosRoutingModule,
    CommonModule,
    CoreModule
  ], 
  
  exports: [
    ReceitasComponent
  ]
})
export class CadastrosModule { }
