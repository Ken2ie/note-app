import { Injectable } from '@angular/core';
import { Note } from '../../constants_models/data.types';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  private readonly sessionStorageKey = 'notes';

  constructor() { }

  getNotes(): Note[] {
    return JSON.parse(sessionStorage.getItem(this.sessionStorageKey) || '[]');
  }

  saveNotes(notes: Note[]): void {
    sessionStorage.setItem(this.sessionStorageKey, JSON.stringify(notes));
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

  private generateNoteId(): number {
    const notes = this.getNotes();
    return notes.length > 0 ? Math.max(...notes.map(note => note.id)) + 1 : 1;
  }
}
