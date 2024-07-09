import { Injectable } from '@angular/core';
import { Note } from '../../constants_models/data.types';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  private readonly sessionStorageKey = 'notes';
  private readonly previousNoteStorageKey = 'previous';

  constructor(private router : Router) { }

  getNotes(): Note[] {
    return JSON.parse(localStorage.getItem(this.sessionStorageKey) || '[]');
  }

  saveNotes(notes: Note[]): void {
    localStorage.setItem(this.sessionStorageKey, JSON.stringify(notes));
  }

  addNote(newNote: Note): void {
    const notes = this.getNotes();
    newNote.id = this.generateNoteId();
    notes.push(newNote);
    this.saveNotes(notes);
  }

  updateNote(updatedNote: Note): void {
    let notes = this.getNotes();
    const index = notes.findIndex(note => note.id === updatedNote.id);
    if (index !== -1) {
      notes[index] = updatedNote;
      this.saveNotes(notes);
    }
  }

  findNoteById(id: string): Note | undefined {
    const notes = this.getNotes();
    return notes.find(note => note.id.toString() === id);
  }

  deleteNoteById(id: string): void {
    let notes = this.getNotes();
    notes = notes.filter(note => note.id.toString() !== id);
    this.saveNotes(notes);
  }

  previousNote( id : string){
    localStorage.setItem(this.previousNoteStorageKey, id);
  }

  getPreviousNote() : Note{
    const previousNoteId = localStorage.getItem(this.previousNoteStorageKey);
    this.router.navigate(['/'+previousNoteId])
    return this.findNoteById(previousNoteId!)!;
  }


  private generateNoteId(): number {
    const notes = this.getNotes();
    return notes.length > 0 ? Math.max(...notes.map(note => note.id)) + 1 : 1;
  }
}
