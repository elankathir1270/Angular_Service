import { Component, inject } from '@angular/core';
import { SubscribeService } from 'src/app/service/subscribe.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  //constructor(private subscribeServive: SubscribeService) {}

  subscribeServive = inject(SubscribeService)


  subscribePrime() {
    let onSubccribe = new SubscribeService();
    onSubccribe.onUniqueSubscribe('Prime')
  }

  subscribeHotstar() {
    this.subscribeServive.onUniqueSubscribe('Hotstar')
  }

  subscribeNetflix() {
    this.subscribeServive.onUniqueSubscribe('Netflix')
  }

}
