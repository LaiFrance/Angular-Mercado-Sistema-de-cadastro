import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DescontosComponent } from './components/descontos/descontos.component';
import { EntregadoresComponent } from './components/entregadores/entregadores.component';
import { ProdutosComponent } from './components/produtos/produtos.component';
import { UsersComponent } from './components/users/users.component';
import { LoginComponent } from './components/login/login.component';
import { AppComponent } from './app.component';


const routes: Routes = [
  {
    path: "",
    component: AppComponent
},
  {
    path: "home", component: HomeComponent
    
  },
  {
    path: "login", component: LoginComponent
    
  },
  {
    path: 'produtos', component: ProdutosComponent
    
  },
  {
    path: 'users', component: UsersComponent
    
  },
  
  {
    path: 'descontos', component: DescontosComponent
    
  },
  {
    path:"entregadores", component: EntregadoresComponent
    
  },
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
