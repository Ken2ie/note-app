import { Component, EventEmitter, Output } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Note } from '../../../constants_models/data.types';
import { NotesService } from '../../../services/storage/notes.service';

@Component({
  selector: 'app-dynamic-routing',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './dynamic-routing.component.html',
  styleUrl: './dynamic-routing.component.css'
})
export class DynamicRoutingComponent {

  @Output() note = new EventEmitter<string>();

  newNote : Note = {
    id: 1,
    title: "",
    noteBody: ""
  }
  
  noteList: Note[] = [];


  constructor(private notesService: NotesService) { }

  ngOnInit(): void {
    this.noteList = this.notesService.getNotes();
  }

  onNoteUpdated(updatedNote: Note): void {
    this.notesService.updateNote(updatedNote);
  }
  
}
