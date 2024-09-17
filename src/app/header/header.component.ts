import { Component } from '@angular/core';
import { SubscribeService } from '../service/subscribe.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private subscribeService: SubscribeService) {}

  AdminClicked() {

  }

  HomeClicked() {

  }

  OnSubscribe() {
    this.subscribeService.onUniqueSubscribe('SRK');
  }

}
