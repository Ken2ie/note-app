import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatText',
  standalone: true
})
export class FormatTextPipe implements PipeTransform {

  transform(value: string): string {
    if (!value) return '';

    // Replace markdown-like syntax with HTML tags
    value = value.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>'); // Bold
    value = value.replace(/_(.*?)_/g, '<em>$1</em>'); // Italics
    value = value.replace(/__(.*?)__/g, '<u>$1</u>'); // Underline

    return value;
  }
}
