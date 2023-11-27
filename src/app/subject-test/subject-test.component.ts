import { Component } from '@angular/core';
import { NoificationServiceService } from '../noification-service.service';


@Component({
  selector: 'app-subject-test',
  templateUrl: './subject-test.component.html',
  styleUrl: './subject-test.component.css'
})
export class SubjectTestComponent {

  userInput : string = '';

  constructor(private notificationService : NoificationServiceService){}

  onClick(){
    this.notificationService.changeNotification(this.userInput)
  }
}
