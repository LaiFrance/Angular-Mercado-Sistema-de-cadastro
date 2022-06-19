import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/template/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { ProdutosComponent } from './components/produtos/produtos.component';
import { UsersComponent } from './components/users/users.component';
import { EntregadoresComponent } from './components/entregadores/entregadores.component';
import { DescontosComponent } from './components/descontos/descontos.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FooterComponent } from './components/footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule} from '@angular/material/list';
import { NavbarComponent } from './components/template/header/navbar/sidenavbar/navbar.component';
import { CarouselComponent } from './carousel/carousel.component';
import { BotoesComponent } from './botoes/botoes.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    HomeComponent,
    ProdutosComponent,
    UsersComponent,
    EntregadoresComponent,
    DescontosComponent,
    FooterComponent,
    NavbarComponent,
    CarouselComponent,
    BotoesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    AppRoutingModule,
    MatSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
