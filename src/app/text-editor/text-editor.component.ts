import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-text-editor',
  templateUrl: './text-editor.component.html',
  styleUrls: ['./text-editor.component.less']
})
export class TextEditorComponent implements OnInit {
    @ViewChild('sizeBtn') sizeBtn;
    @ViewChild('colorBtn') colorBtn;
    @ViewChild('input') input;
    @ViewChild('editor') editor;
    @Output('Text') Text =  new EventEmitter();

    public fontToggle: Boolean = true;
    public sizeToggle: Boolean = true;
    public colorToggle: Boolean = true;
    public linkToggle: Boolean = true;
    public sizeBtnPosition: Number;
    public colorBtnPosition: Number
    public windowWidth: number =  window.innerWidth;

    public boldToggle: Boolean = false;
    public italicToggle: Boolean = false;
    public underlineToggle: Boolean = false;
    public strikethroughToggle: Boolean = false;
    public justifyLeftToggle: Boolean = false;
    public justifyCenterToggle: Boolean = false;
    public justifyRightToggle: Boolean = false;
    public orderedlistToggle: Boolean = false;
    public unorderedlistToggle: Boolean = false;

  constructor() { }

  ngOnInit() {
    window.addEventListener('resize', e=>{
      this.windowWidth = window.innerWidth;
    })
    this.editor.nativeElement.addEventListener('click', e=> {
      this.boldToggle = document.queryCommandState('bold');   
      this.italicToggle = document.queryCommandState('italic');   
      this.underlineToggle = document.queryCommandState('underline');   
      this.strikethroughToggle = document.queryCommandState('strikethrough');   
      this.justifyLeftToggle = document.queryCommandState('justifyLeft');   
      this.justifyCenterToggle = document.queryCommandState('justifyCenter');   
      this.justifyRightToggle = document.queryCommandState('justifyRight');   
      this.orderedlistToggle = document.queryCommandState('insertorderedlist');   
      this.unorderedlistToggle = document.queryCommandState('insertunorderedlist');   
    })
    this.input.nativeElement.addEventListener('input', e=>{
      this.boldToggle = document.queryCommandState('bold');   
      this.italicToggle = document.queryCommandState('italic');   
      this.underlineToggle = document.queryCommandState('underline');   
      this.strikethroughToggle = document.queryCommandState('strikethrough');   
      this.justifyLeftToggle = document.queryCommandState('justifyLeft');   
      this.justifyCenterToggle = document.queryCommandState('justifyCenter');   
      this.justifyRightToggle = document.queryCommandState('justifyRight');   
      this.orderedlistToggle = document.queryCommandState('insertorderedlist');   
      this.unorderedlistToggle = document.queryCommandState('insertunorderedlist');   
    })

    if(this.windowWidth > 500) {
      this.sizeBtnPosition = this.sizeBtn.nativeElement.offsetLeft;
      this.colorBtnPosition = this.colorBtn.nativeElement.offsetLeft;
      this.Text.emit(this.input.nativeElement.innerHTML);
    }
  }
  
  bold(input) {
    // const selection = window.getSelection();
    document.execCommand('bold');    
  }
  strikethrough() {
    document.execCommand('strikethrough');
  }
  
  font() {
    this.fontToggle = !this.fontToggle;
  }

  fontBlur(bold) {
    this.fontToggle = true;
  }


  changeFont(font) {
    document.execCommand('fontName', false, font);
  }

  size() {
    this.sizeToggle = !this.sizeToggle;
  }

  sizeBlur() {
    this.sizeToggle = true;
  }

  changeSize(size) {
    document.execCommand('fontSize', false, size);
  }

  italic() {
    document.execCommand('italic');
  }

  underline() {
    document.execCommand('underline');
  }

  unorderedList() {
    document.execCommand('insertunorderedlist');
  }

  orderedList() {
    document.execCommand('insertorderedList');
  }

  indent() {
    document.execCommand('indent');
  }

  outdent() {
    document.execCommand('outdent');
  }

  color() {
    this.colorToggle = !this.colorToggle;
  }

  colorBlur() {
    this.colorToggle = true;
  }

  changeColor(color) {
    document.execCommand('foreColor', false, color);
  }

  alignLeft() {
    document.execCommand('justifyLeft');
  }

  alignCenter() {
    document.execCommand('justifyCenter');
  }

  alignRight() {
    document.execCommand('justifyRight');
  }


  returnText() {
    this.Text.emit(this.input.nativeElement.innerHTML);
  }
  
  link() {
    const url = prompt('Insert URL', 'http://');
    document.execCommand('createLink', false, url);
  }

}
