import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { EventsService } from '../../../services/events.service';

@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.css']
})
export class EditEventComponent implements OnInit {

  message;
  messageClass;
  event;
  processing = false;
  currentUrl;
  loading = true;


  constructor(
    private location: Location,
    private activatedRoute: ActivatedRoute,
    private eventsService: EventsService,
    private router: Router
  ) { }

  updateEventSubmit(){
    this.processing = true;
    this.eventsService.editEvent(this.event).subscribe(data => {
      if(!data.success) {
        this.messageClass = 'danger';
        this.message = data.message;
        this.processing = false;
      } else {
        this.messageClass = 'success';
        this.message = data.message;
        setTimeout(() => {
          this.router.navigate(['/']);
        }, 1000);
      }
    });
  }

  goBack(){
    this.location.back();
  }

  ngOnInit() {
    this.currentUrl = this.activatedRoute.snapshot.params;
    this.eventsService.getSingleEvent(this.currentUrl.id).subscribe(data => {
      if(!data.success){
        this.messageClass = 'danger';
        this.message = data.message
      } else {
        this.event = data.event;
        this.loading = false;
      }
    });
  }

}

