import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegControlComponent } from './reg-control/reg-control.component';
import { HttpClientModule } from '@angular/common/http';
import { RegisterService } from './register.service';
import { ActivityControlComponent } from './activity-control/activity-control.component';
import { ActivityService } from './activity.service';
import { SuccessComponent } from './success/success.component';
@NgModule({
  declarations: [
    AppComponent,
    RegControlComponent,
    ActivityControlComponent,
    SuccessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [RegisterService,ActivityService],
  bootstrap: [AppComponent]
})
export class AppModule { }
