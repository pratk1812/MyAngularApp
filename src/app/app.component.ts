import { Component, OnInit } from '@angular/core';
import { NoificationServiceService } from './noification-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'MyApp';

  message:String = '';

  constructor(private notification:NoificationServiceService){}

  ngOnInit(): void {
      this.notification.source.subscribe(message => this.message=message)
  }
}
