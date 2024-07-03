import { Component, ElementRef, Input, ViewChild, OnInit, AfterViewInit, signal } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormatTextPipe } from './pipe/format-text.pipe';
import { TitleUpdaterService } from '../../../services/titleUpdater/title-updater.service';
import { Note } from '../../../constants_models/data.types';
import { NotesService } from '../../../services/storage/notes.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editor',
  standalone: true,
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css'],
  imports: [FormsModule, ReactiveFormsModule, FormatTextPipe]
})
export class EditorComponent implements OnInit, AfterViewInit {
  editorContent: string = ''; // Content of the text editor
  previewContent: string = ''; // Preview content
  noteForm: FormGroup; // Form group for the note

  @Input() noteData!: Note;
  @ViewChild('myTextarea') myTextarea!: ElementRef;

  contentSignal = signal<Note[]>([{
    id: 0,
    title: "",
    noteBody: ""
  }]);

  id: string | null = null;
  aNote: Note = {
    id: 0,
    title: '',
    noteBody: ''
  };

  constructor(
    private fb: FormBuilder,
    private titleUpdater: TitleUpdaterService,
    private route: ActivatedRoute,
    private noteService: NotesService
  ) {
    this.noteForm = this.fb.group({
      id: [''],
      title: [''],
      noteBody: ['']
    });
  }

  ngOnInit(): void {
    this.getNoteFromId();
    this.noteForm.setValue(this.noteService.getPreviousNote());
    console.log(this.noteService.getPreviousNote());
  }

  getNoteFromId() {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
      if (this.id) {
        // Fetch the note based on the id
        const note = this.noteService.findNoteById(this.id);
        if (note) {
          this.noteService.previousNote(this.id);
          this.noteForm.setValue(note);
          this.titleUpdater.updatePageTitle(this.aNote.title);
          this.noteForm.patchValue(note); // Update the form with note data
        } else {
          this.noteService.getPreviousNote();
        }
      }
    });
  }

  adjustTextareaHeight(event: any): void {
    const textarea: HTMLTextAreaElement = event.target;
    textarea.style.height = 'auto'; // Reset the height
    textarea.style.height = `${textarea.scrollHeight}px`;
    this.updateNote()
    this.getAllNotes();
    this.noteForm.setValue(this.noteService.getPreviousNote());
    console.log(this.noteService.getPreviousNote());
  }

  getAllNotes(){
    this.contentSignal.set(this.noteService.getNotes())
  }

  titleOnChanged() {
    this.titleUpdater.updatePageTitle(this.noteForm.value.title);
    // if (this.noteForm.value.title === '') {
    //   this.noteForm.patchValue({ title: 'Untitled' });
    //   this.titleUpdater.updatePageTitle('Untitled');
    // }
    this.updateNote()
    this.getAllNotes();
  }

  updateNote() {
    if (this.noteForm.valid) {
      this.noteService.updateNote(this.noteForm.value);
    }
  }

  ngAfterViewInit(): void {
    const textarea = this.myTextarea.nativeElement;
    textarea.focus();
    textarea.selectionStart = textarea.selectionEnd = textarea.value.length;
  }
}
