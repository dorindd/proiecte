import { AfterViewInit, Component, ElementRef, OnInit } from '@angular/core';
import { QuizsService } from '../quizs.service';

@Component({
  selector: 'app-html',
  templateUrl: './html.component.html',
  styleUrls: ['./html.component.scss'],
})
export class HtmlComponent implements OnInit, AfterViewInit {
  allhtml: any[] = [];
  currentPage: number = 1;
  pageSize: number = 1;
  show = true;

  youranswer: any;

  allanswers: any;

  correctAsnawes: any[] = [];

  counter = 40;
  showclasstimer = false;
  timecheck = false;
  timer:any
  constructor(private service: QuizsService, private elementRef: ElementRef) {}
  ngAfterViewInit(): void {
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor =
      'white';
  }

  cunostomObs: any;
  ngOnInit(): void {
    this. timer = setInterval(() => {
      this.counter--;
      if (this.counter === 0) {
        clearInterval(this.timer);
        this.showclasstimer = true;
        this.timecheck = true;
      }
    }, 2000);

    this.service.myhtml.subscribe((res: any) => {
      this.allhtml = res;
    });

    this.service.pickanswer.subscribe((res: any) => {
      this.youranswer = res;
      console.log(res);
    });

    // pt scor

    this.service.pickanswer.subscribe((res: any) => {
      this.allanswers = res;
      if (this.allanswers.isCorrect === true) {
        this.correctAsnawes.push(this.allanswers);
      }
      console.log(this.correctAsnawes.length);
    });
  }

  pick(userAnswer: any, questionId: number) {
    const question = this.allhtml.find((q) => q.id === questionId);

    if (question) {
      const isCorrect = userAnswer === question.correct;
      this.service.userAnswer({ questionId, userAnswer, isCorrect });
      
    }
  }

  visibleData() {
    let startPage = (this.currentPage - 1) * this.pageSize;
    let endPage = startPage + this.pageSize;
    return this.allhtml.slice(startPage, endPage);
  }
  pageNumber() {
    let totalPages = Math.ceil(this.allhtml.length / this.pageSize);

    let pageNumArray = new Array(totalPages);
    console.log(pageNumArray);
    return pageNumArray;
  }
  next() {
    if (this.currentPage !== this.pageNumber().length) {
      this.currentPage++;
      this.visibleData();
    } else {
      this.show = false;
      clearInterval(this.timer)
    }
  }
}
