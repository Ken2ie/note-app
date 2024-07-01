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

  @Output() aNote = new EventEmitter<Note>();

  newNote : Note = {
    id: 0,
    title: "Untitled",
    noteBody: ""
  }
  
  noteList: Array<Note> = [];


  constructor(private notesService: NotesService) { }

  ngOnInit(): void {
    this.getNotes()
  }

  getNotes(){
    this.noteList = this.notesService.getNotes();
  }

  onNoteUpdated(updatedNote: Note): void {
    this.notesService.updateNote(updatedNote);
  }

  aNewNote(){
    this.notesService.addNote(this.newNote);
    this.getNotes();
  }
  
  pushNote(note: Note){
    this.noteList.push(this.newNote);
  }
  
}
