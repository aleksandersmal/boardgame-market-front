import { NgModule } from "@angular/core";
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatSliderModule } from '@angular/material/slider';


@NgModule({
  imports: [
    MatSliderModule,
    MatListModule,
    MatButtonModule

  ],
  providers: [],
  bootstrap: [],
  exports:[
    MatSliderModule,
    MatListModule,
    MatButtonModule
  ],
})
export class MaterialModule { }
