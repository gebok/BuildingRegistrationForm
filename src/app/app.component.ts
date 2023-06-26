import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { PostComponent } from './post/post.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

  title = 'Post Form';
  parentMessage: string = "Message coming from parent component";

  message: string | undefined;
  fromChildOutput: string | undefined;

  // -----------------------------------------------------------

  postTitle: string | any;
  postDetails: string | any;
  imgURL: string | any;
  postUrl: string | any;
  addBackground: boolean = false;

  @ViewChild(PostComponent) childComp: any;

  constructor() {
    // console.log(this.childComp);
  }

  ngAfterViewInit(): void {
    // console.log(this.childComp);
    // this.message = this.childComp.childMessage; 
  }

  receiveMessage($event: any) {
    console.log($event);
    this.fromChildOutput = $event;
  }
}
