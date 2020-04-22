import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';



import { LoginComponent } from './login/login.component';

import { AppRoutingModule } from './/app-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthGuardService } from '../app/auth-services/auth-guard.service';
import { AuthService } from '../app/auth-services/auth.service';
import { TokenInterceptor } from '../app/interceptors/TokenInterceptor';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';





@NgModule({
  declarations: [
    AppComponent,
   
    
  
    LoginComponent,
    LayoutComponent,
    FirstComponent,
    SecondComponent,
  
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
 
  

  ],
  providers: [AuthGuardService, AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }
