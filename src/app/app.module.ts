import { HttpClientModule } from '@angular/common/http';
import { RealDataService } from './providers/real-data.service';
import { NavModule } from './components/nav/nav.module';
import { BrowserModule } from '@angular/platform-browser';
import { WebStorageModule } from 'ngx-store';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { AppCommonModule } from './app-common.module';
import { FakeDataService } from './providers/fake-data.service';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    WebStorageModule,
    AppRoutingModule,
    AppCommonModule,
    BrowserAnimationsModule,
    NavModule,
    MatProgressSpinnerModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [
    { provide: 'DataService', useClass: RealDataService }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
