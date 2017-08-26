import { Component, OnInit, NgZone } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { GwService } from '../../services/gw.service';
import { DomSanitizer } from "@angular/platform-browser";


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
  gwPosts;
  pdfUrl;
  drive;


  constructor(
    // private zone: NgZone,
    public authService: AuthService,
    private formBuilder: FormBuilder,
    private gwService: GwService,
    private domSanitizer : DomSanitizer
  ) {
    this.createNewGwForm();
  }


  createNewGwForm(){
    this.form = this.formBuilder.group({
      date: ['', Validators.compose([
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
        this.getAllGws();
        setTimeout(() => {
          this.newPost = false;
          this.processing = false;
          this.message =  '';
          this.form.reset();
          this.enableFormNewGwForm();
        }, 1000);
      }
    });
  }

  goBack(){
    window.location.reload();
  }

  getAllGws(){
    this.gwService.getAllGws().subscribe(data => {
      this.gwPosts = data['gws'];
    });
  }




  ngOnInit() {
    this.getAllGws();

    this.authService.getProfile().subscribe(profile => {
      this.username = profile.user.username;
    });

    // this.gwService.getAllGws().subscribe(magazine => {
    //   this.drive = magazine.gw['body'];
    // });
    //
    // console.log(this.drive);



    // this.drive = this.gw['body'];
    // console.log(this.drive);
    //   // 'https://drive.google.com/file/d/0B1arWWIvxFZDS2ZtNlY4Si1MSW8/preview';
    //
    // this.pdfUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(this.drive);
  }

}
