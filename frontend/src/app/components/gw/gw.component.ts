import { Component, OnInit, NgZone } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { GwService } from '../../services/gw.service';


@Component({
  selector: 'app-gw',
  templateUrl: './gw.component.html',
  styleUrls: ['./gw.component.css']
})
export class GwComponent implements OnInit {

  messageClass;
  message;
  newPost = false;
  loadingBlogs = false;
  form;
  processing = false;
  username;

  constructor(
    // private zone: NgZone,
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private gwService: GwService
  ) {
    this.createNewGwForm();
  }


  createNewGwForm(){
    this.form = this.formBuilder.group({
      title: ['', Validators.compose([
        Validators.required,
        Validators.maxLength(50),
        Validators.minLength(3)
      ])],
      body: ['', Validators.compose([
        Validators.required,
        Validators.maxLength(100000),
        Validators.minLength(10)
      ])]
    })
  }


  enableFormNewGwForm() {
    this.form.get('title').enable();
    this.form.get('body').enable();
  }


  disableFormNewGwForm() {
    this.form.get('title').disable();
    this.form.get('body').disable();
  }



  newBlogForm(){
    this.newPost = true;
  }

  reloadBlogs(){
    this.loadingBlogs = true;
    //Get all blogs
    setTimeout(() => {
      this.loadingBlogs = false;
    }, 4000);
  }


  // reloadPage() {
  //   this.zone.runOutsideAngular(() => {
  //     location.reload();
  //   });
  // }

  onGwSubmit(){
    this.processing = true;
    this.disableFormNewGwForm();
    const gw = {
      title: this.form.get('title').value,
      body: this.form.get('body').value,
      createdBy: this.username
    }


    this.gwService.newGw(gw).subscribe(data => {
      if (!data.success) {
        this.messageClass = 'danger';
        this.message = data.message;
        this.processing = false;
        this.enableFormNewGwForm();
      } else {
        this.messageClass = 'success';
        this.message = data.message;
        setTimeout(() => {
          this.newPost = false;
          this.processing = false;
          this.message = '';
          this.form.reset();
          this.enableFormNewGwForm();
        }, 1000);
      }
    });
  }

  goBack(){
    window.location.reload();
  }

  ngOnInit() {
    this.authService.getProfile().subscribe(profile => {
      this.username = profile.user.username;
    });
  }

}
