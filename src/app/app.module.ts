import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { IpGeolocationComponent } from './components/ip-geolocation/ip-geolocation.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/base/header/header.component';
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatInputModule } from "@angular/material/input";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTooltipModule } from "@angular/material/tooltip"
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {MatListModule} from "@angular/material/list";
import { LoadingComponent } from './components/base/loading/loading.component';
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {GoogleMapsApiKey} from "./utils/api/api.key";
import {AgmCoreModule} from "@agm/core";
import { MapComponent } from './components/ip-geolocation/map/map/map.component';
import { GeolocationCardComponent } from './components/ip-geolocation/geolocation-card/geolocation-card.component';
import { TableRowComponent } from './components/ip-geolocation/geolocation-card/table-row/table-row.component';

@NgModule({
  declarations: [
    AppComponent,
    IpGeolocationComponent,
    HeaderComponent,
    LoadingComponent,
    MapComponent,
    GeolocationCardComponent,
    TableRowComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatTooltipModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatListModule,
    MatProgressBarModule,
    AgmCoreModule.forRoot({
      apiKey: GoogleMapsApiKey,
    }),
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
