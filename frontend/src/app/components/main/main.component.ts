import { Component, OnInit, NgZone } from '@angular/core';
import { SliderComponent } from './slider/slider.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(
    private zone: NgZone
  ) {  }

  reloadPage() { // click handler or similar
    this.zone.runOutsideAngular(() => {
      location.reload();
    });
  }

ngOnInit() { }

}
