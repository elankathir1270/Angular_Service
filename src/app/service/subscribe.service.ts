import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SubscribeService {

  constructor() { }

  onUniqueSubscribe(chanel: string) {
    alert(`You have been successfully subscribed ${chanel}`)
  }
}
