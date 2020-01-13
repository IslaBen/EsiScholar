import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DetailComponent } from './detail/detail.component';
import { NgAutoCompleteComponent } from './ng-auto-copmplete/ng-auto-complete.component';
import { HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import {ChartsModule} from 'ng2-charts';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DetailComponent,
    NgAutoCompleteComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ChartsModule
  ],
  exports: [
    ReactiveFormsModule,
  ],
  providers: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
