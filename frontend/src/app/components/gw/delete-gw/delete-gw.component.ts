import { Component, OnInit } from '@angular/core';
import { GwService } from '../../../services/gw.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-delete-gw',
  templateUrl: './delete-gw.component.html',
  styleUrls: ['./delete-gw.component.css']
})
export class DeleteGwComponent implements OnInit {

  message;
  messageClass;
  foundGw = false;
  processing = false;
  gw;
  currentUrl;

  constructor(
    private gwService: GwService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  deleteGw(){
    this.processing = true;
    this.gwService.deleteGw(this.currentUrl.id).subscribe(data => {
      if(!data.success){
        this.messageClass = 'danger';
        this.message = data.message;
      } else {
        this.messageClass = 'success';
        this.message = data.message;
        setTimeout(() => {
          this.router.navigate(['/gw']);
        }, 1000);
      }
    });
  }

  ngOnInit() {
    this.currentUrl = this.activatedRoute.snapshot.params;
    this.gwService.getSingleGw(this.currentUrl.id).subscribe(data => {
      if(!data.success){
        this.messageClass = 'danger';
        this.message = data.message;
      } else {
        this.gw = {
          title: data.gw.title,
          body: data.gw.body,
          createBy: data.gw.createdBy,
          createdAt: data.gw.createdAt
        }
        this.foundGw = true;
      }
    });
  }

}
