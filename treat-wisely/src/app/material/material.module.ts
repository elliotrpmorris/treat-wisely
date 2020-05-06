import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MatCardModule } from "@angular/material/card";
import { MatMenuModule } from "@angular/material/menu";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatCardModule,
  ],
  exports: [MatButtonModule, MatMenuModule, MatToolbarModule, MatCardModule],
})
export class MaterialModule {}
