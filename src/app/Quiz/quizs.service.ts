import { Injectable } from '@angular/core';
import { Subject, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class QuizsService {
  html: any[] = [
    {
      id: 1,
      question: 'What is the full form of HTML?',
      answer1: 'HyperText Markup Language',
      answer2: 'HyperText Markdown Language',
      answer3: 'HyperText  Language',
      correct: 'HyperText Markup Language',
      text:'HTML'
    },
    {
      id: 2,
      question:
        'What is the difference between an opening tag and a closing tag?',
      answer1: 'Opening tag has a / in front',
      answer2: 'Closing tag has a / in front',
      answer3: 'There is no difference.',
      correct: 'Closing tag has a / in front',
       text:'HTML'
    },
    {
      id: 3,
      question:
        '< br  / > What type of tag is this?',
      answer1: 'Break tag',
      answer2: 'A broken one',
      answer3: 'An opening tag',
      correct: 'Break tag',
       text:'HTML'
    },
    {
      id: 4,
      question:
        ' Which is the correct way to tag an image?',
      answer1: 'src=”image.jpg/gif” alt=”type some text”',
      answer2: 'Src=”image.jpg/gif” alt=type some text”',
      answer3: '<img src="image.jpg/gif" alt="type some text">',
      correct: '<img src="image.jpg/gif" alt="type some text">',
       text:'HTML'
    },
    {
      id: 5,
      question:'What is the term for an HTML element that lacks a closing tag?',
      answer1: 'Tag',
      answer2: 'Empty element',
      answer3: 'Closed element',
      correct: 'Empty element',
       text:'HTML'
    },
    
    {
      id: 6,
      question:'Which of the following CSS selectors are used to specify a group of elements?',
      answer1: 'tag',
      answer2: 'id',
      answer3: 'class',
      correct: 'class',
       text:'CSS'
    },
    {
      id: 7,
      question:'Which of the following CSS selector is used to specify a rule to bind a particular unique element?',
      answer1: 'tag',
      answer2: 'id',
      answer3: 'class',
      correct: 'id',
        text:'CSS'
    },
    {
      id: 8,
      question:'Which of the following type of HTML tag is used to define an internal style sheet?',
      answer1: '<script>',
      answer2: '<link>',
      answer3: '<style>',
      correct: '<style>',
        text:'CSS'
    },
    {
      id: 9,
      question:'Which of the following CSS style property is used to specify an italic text?',
      answer1: 'style',
      answer2: 'font',
      answer3: 'font-style',
      correct: 'font-style',
        text:'CSS'
    },
    {
      id:10,
      question:'Which of the following function defines a linear gradient as a CSS image?',
      answer1: 'gradient()',
      answer2: 'linear-gradient()',
      answer3: 'grayscale()',
      correct: 'linear-gradient()',
        text:'CSS'
    },
    {
      id:11,
      question:'Which statement cannot be used to declare a variable in JavaScript',
      answer1: 'let',
      answer2: 'var',
      answer3: 'int',
      correct: 'int',
        text:'JAVASCRIPT'
    },
    {
      id:12,
      question:'Which of the following is an array method?',
      answer1: 'filter',
      answer2: 'map',
      answer3: 'both',
      correct: 'both',
        text:'JAVASCRIPT'
    },
    {
      id:13,
      question:'Which of the following is considered a first class citizen in JavaScript?',
      answer1: 'functions',
      answer2: 'class',
      answer3: 'array',
      correct: 'functions',
        text:'JAVASCRIPT'
    },
    {
      id:14,
      question:'Which is the correct way to bind an object to the current method?',
      answer1: 'Func = func.bind(this)',
      answer2: 'Let func = () => {}',
      answer3: 'both',
      correct: 'both',
        text:'JAVASCRIPT'
    },
   
    {
      id:15,
      question:'What is the full form of DOM?',
      answer1: 'Data Object Model',
      answer2: 'Document or Model',
      answer3: 'Document Object Model',
      correct: 'Document Object Model',
        text:'JAVASCRIPT'
    },
  ];

  myhtml = of(this.html);

  pickanswer = new Subject();

  userAnswer(d: any) {
    this.pickanswer.next(d);
   
  }
  constructor() {}
}
