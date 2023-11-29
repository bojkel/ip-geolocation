import {Component, OnInit} from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { IpGeolocationService } from 'src/app/services/ip-geolocation.service';
import {Geolocation} from "../../models/geolocation.model";

@Component({
  selector: 'app-ip-geolocation',
  templateUrl: './ip-geolocation.component.html',
  styleUrls: ['./ip-geolocation.component.scss']
})

export class IpGeolocationComponent implements OnInit{

  ipGeolocation: Geolocation | undefined;
  currentIpAddress!: Geolocation;
  loading = true;
  ipFormControl: FormControl<string | null> = new FormControl('', [Validators.required]);

  constructor(private ipGeolocationService: IpGeolocationService) {}

  ngOnInit() {
    this.getCurrentIpAddress();
  }

  getIPGeolocationData(): void {
    console.log("The searched IP address: ", this.ipFormControl.value);
    this.ipGeolocationService.getIpGeolocation(this.ipFormControl.value).subscribe(geolocationData => {
      if (geolocationData) {
        this.ipGeolocation = geolocationData;
        console.log("Received data: ", geolocationData);
        this.loading = false;
      }
      else console.error("No geolocation found.")
    });
  }

  getCurrentIpAddress(): void {
    this.ipGeolocationService.getIpGeolocation("").subscribe(currentIpAddress => {
      this.currentIpAddress = currentIpAddress;
    });
  }

  resetIpGeolocation(): void {
    this.ipFormControl.reset();
    this.ipGeolocation = undefined;
  }

}
