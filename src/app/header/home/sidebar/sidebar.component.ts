import { Component } from '@angular/core';
import { SubscribeService } from 'src/app/service/subscribe.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  constructor(private subscribeService: SubscribeService) {}

  subscribeCombo() {
    this.subscribeService.onUniqueSubscribe('COMBO PACK');
  }

}
