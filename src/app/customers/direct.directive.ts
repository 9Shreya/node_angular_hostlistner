import {Directive,ElementRef,Renderer2,HostListener} from '@angular/core';
import {DataService} from '../service/data.service';

@Directive({
  selector: '[appDirect]'
})

export class DirectDirective {

  constructor(private e1: ElementRef,private render: Renderer2,private _dataService: DataService) {}


  @HostListener('click',['$event']) onClick(event: any) {
    console.log(`You clicked on ${event.target.id}`);
    console.log(event.target.id);
    //console.log(event.target.value);
    console.log(event);
    if (event.target.id !== "") {
      this._dataService.postUsers(
        {
          "id": event.target.id,

        }
      ).subscribe((posts) => {
        console.log(posts);
      })
    }
  }
  @HostListener('keyup',['$event']) onClic(event: any) {
    console.log(`You clicked on ${event.target.id}`);
    console.log(event.target.id);
    console.log(event.target.value);

    console.log(event);

  }
  @HostListener('change',['$event']) onlic(event: any) {
    console.log(`You clicked on ${event.target.id}`);
    console.log(event.target.id);
    console.log(event.target.value);
    console.log(event);

  }
  @HostListener('submit',['$event']) onli(event: any) {
    console.log(`You clicked on ${event.target.id}`);
    console.log(event.target.input[0].value);
    console.log(event.target.input[1].value);
    console.log(event.target.input);
    console.log(event);
    event.preventDefault();
    console.log(event.preventDefault());
    if (event.target.id == '') {
      this._dataService.postUsers(
        {
          "name": event.target.input[0].value,
          "file": event.target.input[1].value,

        }
      ).subscribe((posts) => {
        console.log(posts);
      })
    }
  }
  id: any = Math.round(Math.random() * 1000000000);
  @HostListener('transitionend',['$event']) onl(event: any) {
    console.log(`You clicked on ${event.target.id}`);
    console.log(event.target.li);
    // console.log(event.target.input[1].value);
    console.log(event.target.value);
    console.log(event);
    event.preventDefault();
    console.log(event.preventDefault('lk'));
  }

  @HostListener('focusin',['$event']) on(event: any) {
    console.log(`You clicked on ${event.target.id}`);
    console.log(event.target.li);
    // console.log(event.target.input[1].value);
    console.log(event.target.value);
    console.log(event);
    event.preventDefault();
    console.log(event.preventDefault());
  }



  @HostListener('abort',['$event'])
  @HostListener('afterprint',['$event'])
  @HostListener('animationend',['$event'])
  @HostListener('animationiteration',['$event'])
  @HostListener('animationstart',['$event'])
  @HostListener('beforeprint',['$event'])
  @HostListener('beforeunload',['$event'])
  @HostListener('blur',['$event'])
  @HostListener('canplay',['$event'])
  @HostListener('canplaythrough',['$event'])
  // @HostListener('change',['$event'])
  // @HostListener('click',['$event'])
  @HostListener('contextmenu',['$event'])
  @HostListener('copy',['$event'])
  @HostListener('cut',['$event'])
  @HostListener('dblclick',['$event'])
  @HostListener('drag',['$event'])
  @HostListener('dragend',['$event'])
  @HostListener('dragenter',['$event'])
  @HostListener('dragleave',['$event'])
  @HostListener('dragover',['$event'])
  @HostListener('dragstart',['$event'])
  @HostListener('drop',['$event'])
  @HostListener('durationchange',['$event'])
  @HostListener('ended',['$event'])
  @HostListener('error',['$event'])
  @HostListener('focus',['$event'])
  // @HostListener('focusout',['$event'])
  // @HostListener('focusin',['$event'])
  @HostListener('fullscreenchange',['$event'])
  @HostListener('fullscreenerror',['$event'])
  @HostListener('hashchange',['$event'])
  @HostListener('input',['$event'])
  @HostListener('invalid',['$event'])
  // @HostListener('keydown',['$event'])
  // @HostListener('keypress',['$event'])
  // @HostListener('keyup',['$event'])
  @HostListener('load',['$event'])
  @HostListener('loadeddata',['$event'])
  @HostListener('loadedmetadata',['$event'])
  @HostListener('loadstart',['$event'])
  @HostListener('message',['$event'])
  // @HostListener('mousedown',['$event'])
  // @HostListener('mouseenter',['$event'])
  // @HostListener('mouseleave',['$event'])
  // @HostListener('mousemove',['$event'])
  // @HostListener('mouseover',['$event'])
  // @HostListener('mouseout',['$event'])
  // @HostListener('mouseup',['$event'])
  // @HostListener('mousewheel',['$event'])
  @HostListener('offline',['$event'])
  @HostListener('online',['$event'])
  @HostListener('open',['$event'])
  @HostListener('pagehide',['$event'])
  @HostListener('pageshow',['$event'])
  @HostListener('paste',['$event'])
  @HostListener('pause',['$event'])
  @HostListener('play',['$event'])
  @HostListener('playing',['$event'])
  @HostListener('popstate',['$event'])
  @HostListener('progress',['$event'])
  @HostListener('ratechange',['$event'])
  @HostListener('resize',['$event'])
  @HostListener('reset',['$event'])
  @HostListener('scroll',['$event'])
  @HostListener('search',['$event'])
  @HostListener('seeked',['$event'])
  @HostListener('seeking',['$event'])
  @HostListener('select',['$event'])
  @HostListener('show',['$event'])
  @HostListener('stalled',['$event'])
  @HostListener('storage',['$event'])
  //@HostListener('submit',['$event'])
  @HostListener('suspend',['$event'])
  @HostListener('timeupdate',['$event'])
  @HostListener('toggle',['$event'])
  @HostListener('touchcancel',['$event'])
  @HostListener('touchend',['$event'])
  @HostListener('touchmove',['$event'])
  @HostListener('touchstart',['$event'])

  @HostListener('unload',['$event'])
  @HostListener('volumechange',['$event'])
  @HostListener('waiting',['$event'])
  @HostListener('wheel',['$event'])
  @HostListener('scroll',['$event'])

  public onAnything($event): void {
    console.log(`onAnything ${$event.type}`);
  }
  // @HostListener('mouseenter',['$event'])
  // onMouseEn(event: any) {

  //   console.log(event.target.id);
  //   console.log(event);
  // }
  // @HostListener('mouseout',['"hello!"','$event']) onMouseEnter(greeting: string,event: any) {
  // Logs the string argument, "hello!"
  // console.log(greeting);
  // Logs the id of the element 
  // where the event is originally invoked.    
  //   console.log(event.target.id);
  // }



}
