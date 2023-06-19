import { BrowserModule } from "@angular/platform-browser";
import { ClickOutsideModule } from "ng-click-outside";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LayoutComponent } from "./theme/layout/layout.component";
import { LoaderModule } from "./components/loader/loader.module";
import { SharedModule } from "./components/shared/shared.module";

@NgModule({
  declarations: [AppComponent, LayoutComponent],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    LoaderModule,
    ClickOutsideModule,
    RouterModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
