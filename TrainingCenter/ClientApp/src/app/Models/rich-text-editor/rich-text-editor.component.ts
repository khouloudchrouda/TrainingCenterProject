import { Component, Input, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { QuillConfiguration } from "./quill-configuration";

@Component({
  selector: 'app-rich-text-editor',
  templateUrl: './rich-text-editor.component.html',
  styleUrls: ['./rich-text-editor.component.css']
})
export class RichTextEditorComponent {
  quillConfiguration = QuillConfiguration;
  @Input() control: FormControl = new FormControl("");
  constructor() {}

  ngOnInit() {
    this.control = this.control ?? new FormControl();
  }
}
