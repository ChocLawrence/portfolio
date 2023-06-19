import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { ViewRoutingModule } from "./view-routing.module";
import { ViewComponent } from "./view.component";
import { SharedModule } from "../components/shared/shared.module";

@NgModule({
  declarations: [ViewComponent],
  imports: [CommonModule, ViewRoutingModule,RouterModule, SharedModule],
})
export class ViewModule {}
