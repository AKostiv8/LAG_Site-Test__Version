import { Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
declare var jQuery: any;

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  messageClass;
  message;
  newPost = false;
  loadingBlogs = false;
  form;
  processing = false;

  constructor(
    private formBuilder: FormBuilder,
  ) {
    this.createNewWallperForm();
  }

  createNewWallperForm(){
    this.form = this.formBuilder.group({
      headline: ['', Validators.compose([
        Validators.required,
        Validators.maxLength(75),
        Validators.minLength(3)
      ])],
      description: ['', Validators.compose([
        Validators.required,
        Validators.maxLength(2000),
        Validators.minLength(30)
      ])],
      position: ['', Validators.compose([
        Validators.required
      ])]
    })
  }


  enableFormNewWallperForm() {
    this.form.get('headline').enable();
    this.form.get('description').enable();
    this.form.get('position').enable();
  }


  disableFormNewWallperForm() {
    this.form.get('headline').disable();
    this.form.get('description').disable();
    this.form.get('position').disable();
  }


  onWallperSubmit(){
    this.processing = true;
    this.disableFormNewWallperForm();
    const wallper = {
      headline: this.form.get('headline').value,
      description: this.form.get('description').value,
      position: this.form.get('position').value,
      createdBy: this.username
    }


    this.wallperService.newWallper(wallper).subscribe(data => {
      if (!data.success) {
        this.messageClass = 'danger';
        this.message = data.message;
        this.processing = false;
        this.enableFormNewWallperForm();
      } else {
        this.messageClass = 'success';
        this.message = data.message;
        this.getAllWallpers();
        setTimeout(() => {
          this.newPost = false;
          this.processing = false;
          this.message =  '';
          this.form.reset();
          this.enableFormNewWallperForm();
        }, 1000);
      }
    });
  }


  newBlogForm(){
    this.newPost = true;
  }

  goBack(){
    window.location.reload();
  }

  reloadBlogs(){
    this.loadingBlogs = true;
    //Get all blogs
    setTimeout(() => {
      this.loadingBlogs = false;
    }, 4000);
  }

  ngOnInit() {

  }

}
