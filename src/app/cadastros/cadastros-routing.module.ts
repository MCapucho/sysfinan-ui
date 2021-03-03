// Angular
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Componentes
import { ReceitasComponent } from './receitas/receitas.component';

const ROUTES: Routes = [
    {
        path: 'receitas',
        component: ReceitasComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(ROUTES)],
    exports: [RouterModule]
})
export class CadastrosRoutingModule { }