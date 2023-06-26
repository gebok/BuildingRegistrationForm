import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  title: string = "";
  messagePost: string = "Message Post";

  postParentMessage: string = "Message Post coming from post parent"
  
  childMessage: string = "From Child Component";

  outputChildMessage: string = "Message from Child Component via Output";

  @Input() fromParent: string | undefined;

  @Output() messageEvent = new EventEmitter<string>();

  constructor() { }
  
  ngOnInit(): void { }

  sendMesssage() {
    this.messageEvent.emit(this.outputChildMessage);
  }

}
