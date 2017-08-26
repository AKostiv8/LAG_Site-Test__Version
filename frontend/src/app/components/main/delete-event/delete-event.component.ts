import { Component, OnInit } from '@angular/core';
import { EventsService } from '../../../services/events.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-delete-event',
  templateUrl: './delete-event.component.html',
  styleUrls: ['./delete-event.component.css']
})
export class DeleteEventComponent implements OnInit {

  message;
  messageClass;
  foundEvent = false;
  processing = false;
  event;
  currentUrl;

  constructor(
    private eventsService: EventsService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  deleteEvent(){
    this.processing = true;
    this.eventsService.deleteEvent(this.currentUrl.id).subscribe(data => {
      if(!data.success){
        this.messageClass = 'danger';
        this.message = data.message;
      } else {
        this.messageClass = 'success';
        this.message = data.message;
        setTimeout(() => {
          this.router.navigate(['/']);
        }, 1000);
      }
    });
  }

  ngOnInit() {
    this.currentUrl = this.activatedRoute.snapshot.params;
    this.eventsService.getSingleEvent(this.currentUrl.id).subscribe(data => {
      if(!data.success){
        this.messageClass = 'danger';
        this.message = data.message;
      } else {
        this.event = {
          date: data.event.date,
          event: data.event.event,
          createBy: data.event.createdBy,
          createdAt: data.event.createdAt
        }
        this.foundEvent = true;
      }
    });
  }

}

