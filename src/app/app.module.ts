import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { SimpleuiComponent } from './simpleui/simpleui.component';
import { RegisterComponent } from './register/register.component';
import { WelcomComponent } from './welcom/welcom.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'simpleui', component: SimpleuiComponent },
  { path: 'register', component: RegisterComponent},
  { path: '', component: WelcomComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SimpleuiComponent,
    RegisterComponent,
    WelcomComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule
  ],
  exports: [RouterModule],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
