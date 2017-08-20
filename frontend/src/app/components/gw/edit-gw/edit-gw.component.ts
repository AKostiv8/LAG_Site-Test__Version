import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { GwService } from '../../../services/gw.service';

@Component({
  selector: 'app-edit-gw',
  templateUrl: './edit-gw.component.html',
  styleUrls: ['./edit-gw.component.css']
})
export class EditGwComponent implements OnInit {

  message;
  messageClass;
  gw;
  processing = false;
  currentUrl;
  loading = true;


  constructor(
    private location: Location,
    private activatedRoute: ActivatedRoute,
    private gwService: GwService,
    private router: Router
  ) { }

  updateGwSubmit(){
    this.processing = true;
    this.gwService.editGw(this.gw).subscribe(data => {
      if(!data.success) {
        this.messageClass = 'danger';
        this.message = data.message;
        this.processing = false;
      } else {
        this.messageClass = 'success';
        this.message = data.message;
        setTimeout(() => {
          this.router.navigate(['/gw']);
        }, 1000);
      }
    });
  }

  goBack(){
    this.location.back();
  }

  ngOnInit() {
    this.currentUrl = this.activatedRoute.snapshot.params;
    this.gwService.getSingleGw(this.currentUrl.id).subscribe(data => {
      if(!data.success){
        this.messageClass = 'danger';
        this.message = data.message
      } else {
        this.gw = data.gw;
        this.loading = false;
      }
    });
  }

}
