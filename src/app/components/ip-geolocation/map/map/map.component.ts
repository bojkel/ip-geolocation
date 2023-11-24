import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {MapsAPILoader} from "@agm/core";

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit{

  @Input() latitude!: number;
  @Input() longitude!: number;
  @Input() zoom!: number;

  @ViewChild('search')
  public searchElementRef!: ElementRef;

  constructor(
    private mapsAPILoader: MapsAPILoader,
  ) {}

  ngOnInit() {
    this.mapsAPILoader.load().then(() => {});
  }

  onMapClicked(event: any): void {
    this.latitude = event.coords.lat;
    this.longitude = event.coords.lng;
  }

}
