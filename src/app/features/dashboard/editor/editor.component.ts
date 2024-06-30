import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormatTextPipe } from "./pipe/format-text.pipe";
import { TitleUpdaterService } from '../../../services/titleUpdater/title-updater.service';

@Component({
    selector: 'app-editor',
    standalone: true,
    templateUrl: './editor.component.html',
    styleUrl: './editor.component.css',
    imports: [FormsModule, FormatTextPipe]
})
export class EditorComponent {
  editorContent: string = ''; // Content of the text editor
  previewContent: string = ''; // Preview content
  
  constructor(private titleUpdater : TitleUpdaterService){}

  title! : string;

  @ViewChild('myTextarea') myTextarea!: ElementRef;

  
  ngOnInit(): void {
    this.titleUpdater.updatePageTitle(this.title);
  }
  
  adjustTextareaHeight(event: any): void {
    const textarea: HTMLTextAreaElement = event.target;
    textarea.style.height = 'auto'; // Reset the height
    textarea.style.height = `${textarea.scrollHeight}px`; // Set the new height
  }


  titleOnChanged(){
    this.titleUpdater.updatePageTitle(this.title);
    
    if(this.title == "") {
      this.title = "Untitled";
      this.titleUpdater.updatePageTitle(this.title);
    }
  }

  ngAfterViewInit(): void {
    const textarea = this.myTextarea.nativeElement;
    textarea.focus();
    textarea.selectionStart = textarea.selectionEnd = textarea.value.length;
  }

}

