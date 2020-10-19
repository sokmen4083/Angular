import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MatToolbarModule, MatListModule, MatGridListModule, MatButtonModule, MatCardModule } from '@angular/material'; 
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import 'hammerjs';

import { MenuComponent } from './menu/menu.component';
import { DishDetailComponent } from './dishdetail/dishdetail.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

import { DishService } from './services/dish.service';

import { AppRoutingModule } from './app-routing/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DishDetailComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    AppRoutingModule,    
    MatToolbarModule, 
    MatListModule,   
    MatGridListModule, 
    MatButtonModule,
    MatCardModule
  ],
  providers: [
    DishService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }