import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { DynamicRoutingComponent } from '../../components/dynamic-routing/dynamic-routing.component';
import { ProfileComponent } from '../../components/profile/profile.component';
import { Note } from '../../../constants_models/data.types';
import { EditorComponent } from '../editor/editor.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [RouterOutlet, RouterLink, ProfileComponent, RouterLinkActive, DynamicRoutingComponent, EditorComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

  

  userName : string = "Pandit";
  receivedNote! : Note;

  receiveNote(message: Note) {
    this.receivedNote = message;
  }

}
