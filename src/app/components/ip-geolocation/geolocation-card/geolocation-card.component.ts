import {Component, Input} from '@angular/core';
import {Geolocation} from "../../../models/geolocation.model";

@Component({
  selector: 'app-geolocation-card',
  templateUrl: './geolocation-card.component.html',
  styleUrls: ['./geolocation-card.component.scss']
})
export class GeolocationCardComponent {

  @Input() geolocation!: Geolocation;

}
