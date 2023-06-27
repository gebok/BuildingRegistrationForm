import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  stepForm: string | undefined;

  postArray: Array<string> = [
    'Post 1', 'Post 2', 'Post 3', 'Post 4', 'Post 5'
  ];

  objArray: Array<any> = [
    { id: 1, postTitle: 'Post 1', },
    { id: 2, postTitle: 'Post 2', },
    { id: 3, postTitle: 'Post 3', },
    { id: 4, postTitle: 'Post 4', },
    { id: 5, postTitle: 'Post 5', }
  ];

  constructor() {
    // for (let i = 0; i < this.postArray.length; i++);
    // console.log(this.postArray);
  }

  // addNew() {
  //   this.objArray.push({ id: 6, postTitle: 'Post 6' });
  // }

  // onDelete(index: number) {
  //   this.objArray.splice(index, 1);
  // }

  // onClick(status: any) {
  //   this.stepForm = status;
  // }

  // ----- ANGULAR DIRECTIVE TASK -----

  id: number | any;
  name: string | any;
  email: string | any;
  address: string | any;

  userDetail: Array<any> = [];

  // userDetail: Array<any> = [
  //   { id: 1, name: 'John James', email: 'john.james@gmail.com', address: 'SATRC, Portion 202, 10-Mile', },
  //   { id: 2, name: 'James John', email: 'james.john@gmail.com', address: 'SATRC, Portion 202, 9-Mile', },
  //   { id: 3, name: 'Paul Blow', email: 'paul.blow@gmail.com', address: 'SATRC, Portion 202, Markham Bridge', }
  // ];

  saveData() {
    this.userDetail.push({
      "name": this.name,
      "email": this.email,
      "address": this.address
    });
      console.log(this.userDetail);
  }
  
  onDelete(index: number) {
    this.userDetail.splice(index, 1);
  }

}