import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class TitleUpdaterService {

  constructor(private titleService: Title) {}
  
  updatePageTitle(title : string){
      this.titleService.setTitle(title);
  }

}
