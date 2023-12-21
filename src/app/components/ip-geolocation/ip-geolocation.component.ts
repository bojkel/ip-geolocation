import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { IpGeolocationService } from 'src/app/services/ip-geolocation.service';
import { Geolocation } from "../../models/geolocation.model";
import { HttpErrorResponse } from "@angular/common/http";
import { ipValidator } from "../../utils/validators/IpValidator";

@Component({
  selector: 'app-ip-geolocation',
  templateUrl: './ip-geolocation.component.html',
  styleUrls: ['./ip-geolocation.component.scss']
})

export class IpGeolocationComponent implements OnInit{

  ipGeolocation: Geolocation | undefined;
  currentIpAddress!: Geolocation;
  httpError: HttpErrorResponse | undefined;
  loading = true;
  ipFormControl: FormControl<string | null> = new FormControl('', [
    Validators.required, ipValidator()
  ]);

  constructor(private ipGeolocationService: IpGeolocationService) {}

  ngOnInit() {
    this.getCurrentIpAddress();
  }

  getIPGeolocationData(): void {
    console.log("The searched IP address: ", this.ipFormControl.value);
    this.ipGeolocationService.getIpGeolocation(this.ipFormControl.value)
      .subscribe(geolocationData => {
        if (geolocationData) {
            console.log("Received data: ", geolocationData);
            this.ipGeolocation = geolocationData;
            this.loading = false;
          }
        },
        (error => {
          this.httpError = error;
          console.log('there was an error fetching: ', error);
        })
      );
  }

  getCurrentIpAddress(): void {
    this.ipGeolocationService.getIpGeolocation("")
      .subscribe(currentIpAddress => {
        this.currentIpAddress = currentIpAddress;
        this.ipGeolocation = this.currentIpAddress;
        this.loading = false;
    });
  }

  resetIpGeolocation(): void {
    this.ipFormControl.reset();
    this.ipFormControl.patchValue('');
    this.httpError = undefined;
    this.ipGeolocation = undefined;
  }

}
