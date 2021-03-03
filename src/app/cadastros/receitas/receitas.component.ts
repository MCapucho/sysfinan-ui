// Angular
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupName, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

// Models
import { Receita } from 'src/app/shared/model/receita.model';

// Serviços
import { ReceitasService } from './shared/receitas.service';

@Component({
  selector: 'app-receitas',
  templateUrl: './receitas.component.html',
  styleUrls: ['./receitas.component.css']
})
export class ReceitasComponent implements OnInit {

  formReceita: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private receitaService: ReceitasService,
              public snackBar: MatSnackBar) {
                  this.formReceita = this.formBuilder.group ({
                    codigo: formBuilder.control({value: null, disabled: true}),
                    descricao: formBuilder.control('', Validators.compose([
                      Validators.required, 
                      Validators.maxLength(150)])),
                    ativo: formBuilder.control(true)
                  })
                }

  ngOnInit(): void {
    this.limparCampos();
  }

  limparCampos() {
    this.formReceita.reset(new Receita());
  }

  onSubmit() {
    this.receitaService.create(this.formReceita.value).subscribe(() => {
      this.limparCampos();
      this.snackBar.open("A receita foi criada com sucesso", 'X', {
        duration: 3000
      });
    });
  }
}
