import { Component, OnInit, NgZone } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DomSanitizer } from "@angular/platform-browser";
import { EventsService } from '../../services/events.service';
import { SliderComponent } from './slider/slider.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  messageClass;
  message;
  newPost = false;
  loadingEvents = false;
  form;
  processing = false;
  username;
  eventsPosts;
  pdfUrl;
  drive;

  constructor(
    private zone: NgZone,
    public authService: AuthService,
    private formBuilder: FormBuilder,
    private eventsService: EventsService,
    private domSanitizer : DomSanitizer
  ) {
    this.createNewEventForm();
  }

  reloadPage() { // click handler or similar
    this.zone.runOutsideAngular(() => {
      location.reload();
    });
  }


  createNewEventForm(){
    this.form = this.formBuilder.group({
      date: ['', Validators.compose([
        Validators.required,
        Validators.maxLength(50),
        Validators.minLength(3)
      ])],
      event: ['', Validators.compose([
        Validators.required,
        Validators.maxLength(100),
        Validators.minLength(5)
      ])]
    })
  }


  enableFormNewEventForm() {
    this.form.get('date').enable();
    this.form.get('event').enable();
  }


  disableFormNewEventForm() {
    this.form.get('date').disable();
    this.form.get('event').disable();
  }


  newEventForm(){
    this.newPost = true;
  }

  reloadEvents(){
    this.loadingEvents = true;
    //Get all events
    setTimeout(() => {
      this.loadingEvents = false;
    }, 4000);
  }


  onEventSubmit(){
    this.processing = true;
    this.disableFormNewEventForm();
    const event = {
      date: this.form.get('date').value,
      event: this.form.get('event').value,
      createdBy: this.username
    }


    this.eventsService.newEvent(event).subscribe(data => {
      if (!data.success) {
        this.messageClass = 'danger';
        this.message = data.message;
        this.processing = false;
        this.enableFormNewEventForm();
      } else {
        this.messageClass = 'success';
        this.message = data.message;
        this.getAllEvents();
        setTimeout(() => {
          this.newPost = false;
          this.processing = false;
          this.message =  '';
          this.form.reset();
          this.enableFormNewEventForm();
        }, 1000);
      }
    });
  }

  goBack(){
    window.location.reload();
  }

  getAllEvents(){
    this.eventsService.getAllEvents().subscribe(data => {
      this.eventsPosts = data['events'];
    });
  }


ngOnInit() {

  this.getAllEvents();

  this.authService.getProfile().subscribe(profile => {
    this.username = profile.user.username;
  });

}
}
