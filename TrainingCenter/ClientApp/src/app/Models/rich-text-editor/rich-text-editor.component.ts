import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from "@angular/core";
import { FormControl } from "@angular/forms";
import { QuillConfiguration } from "./quill-configuration";
import { EditorChangeContent, EditorChangeSelection, QuillViewComponent } from "ngx-quill";

@Component({
  selector: 'app-rich-text-editor',
  templateUrl: './rich-text-editor.component.html',
  styleUrls: ['./rich-text-editor.component.css']
})
export class RichTextEditorComponent {
  quillConfiguration = QuillConfiguration;
  @Input() control: FormControl = new FormControl("");
  @Output() descriptiondetailsdata = new EventEmitter<string>();
  @Output() descriptiondetailscontrol = new EventEmitter<FormControl>();
  message!: string 
  constructor() {}

  ngOnInit() {
    this.control = this.control ?? new FormControl();
  }

  changedEditor(event: EditorChangeContent | EditorChangeSelection) {
    this.message = event.editor.getText();
    this.descriptiondetailsdata.emit(this.message);
    this.descriptiondetailscontrol.emit(this.control)
  }
}
