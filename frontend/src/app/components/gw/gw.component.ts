import { Component, OnInit, NgZone } from '@angular/core';

@Component({
  selector: 'app-gw',
  templateUrl: './gw.component.html',
  styleUrls: ['./gw.component.css']
})
export class GwComponent implements OnInit {

  constructor(
    private zone: NgZone
  ) {  }

  reloadPage() {
    this.zone.runOutsideAngular(() => {
      location.reload();
    });
  }

  ngOnInit() {
  }

}
