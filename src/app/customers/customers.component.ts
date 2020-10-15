import {Component,OnInit,Input} from '@angular/core';
import {ConvertActionBindingResult} from '@angular/compiler/src/compiler_util/expression_converter';
import {HttpClient} from '@angular/common/http';
import {Subscription} from 'rxjs';
import {take} from 'rxjs/operators';
import {AsyncTrackerFactory,AsyncTracker} from 'angular-async-tracker';
import {DataService} from '../service/data.service';


@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {



  ngOnInit(): void {

  }

  log = console.log.bind(console);
  id = val => document.getElementById(val)
  gUMbtn = this.id('gUMbtn')
  start = this.id('start')
  stop = this.id('stop')
  stream
  recorder
  counter = 1
  chunks
  media;


  gUMbtnn() {
    let mv = this.id('mediaVideo'),
      mediaOptions = {
        video: {
          tag: 'video',
          type: 'video/webm',
          ext: '.mp4',
          gUM: {video: true,audio: true}
        },
        audio: {
          tag: 'audio',
          type: 'audio/ogg',
          ext: '.ogg',
          gUM: {audio: true}
        }
      };
    this.media = (<HTMLInputElement>mv).checked ? mediaOptions.video : mediaOptions.audio;
    navigator.mediaDevices.getUserMedia(this.media.gUM).then(_stream => {
      this.stream = _stream;
      this.id('gUMArea').style.display = 'none';
      this.id('btns').style.display = 'inherit';
      this.recorder = new MediaRecorder(this.stream);
      this.recorder.ondataavailable = e => {
        console.log('jk');

        this.chunks.push(e.data);
        if (this.recorder.state == 'inactive') {
          this.makeLink();
          console.log("inactivel");
        }
      };
      this.log('got media successfully');
    }).catch(this.log);
  }

  starth() {
    this.chunks = [];
    this.recorder.start();
  }


  stopl() {
    this.recorder.stop();
  }

  inpi;
  count;
  makeLink() {
    let blob = new Blob(this.chunks,{type: this.media.type})
      ,url = URL.createObjectURL(blob)
      ,li = document.createElement('li')
      ,mt = document.createElement(this.media.tag)
      ,hf = document.createElement('a')
      ,inp = document.createElement('input')
      ;
    (<HTMLInputElement>inp).value = url;
    (<HTMLInputElement>inp).name = 'input';
    mt.controls = true;
    mt.src = url;
    hf.href = url;
    hf.download = `${this.counter++}${this.media.ext}`;
    hf.innerHTML = `donwload ${hf.download}`;
    hf.id = this.count;

    console.log(url);
    li.appendChild(inp)
    li.appendChild(mt);
    li.appendChild(hf);

    document.getElementById('ull').appendChild(li);
    let to = document.getElementById('ul')

    this.hekkk = hf
  }

  hekkk;

  hur; hry

  onsun(onsun) {
    this._dataService.postUsers(
      {
        "id": onsun.id,

      }
    ).subscribe((posts) => {
      console.log(posts);
    })
  }

  mydata = []
  onSelectFile(event) {
    const files = event.target.files;
    if (files) {
      for (const file of files) {
        const reader = new FileReader();
        reader.onload = (e: any) => {
          if (file.type.indexOf("image") > -1) {
            this.mydata.push({
              url: e.target.result,
              type: 'img'
            });
          } else if (file.type.indexOf("video") > -1) {
            this.mydata.push({
              url: e.target.result,
              type: 'video'
            });
          }
        };
        reader.readAsDataURL(file);
      }
    }
  }
  hi() {
    console.log("hi");

  }
  onSubmit(form) {}
  asyncTracker: AsyncTracker;

  constructor(
    private http: HttpClient,
    asyncTrackerFactory: AsyncTrackerFactory,
    private _dataService: DataService
  ) {
    this.asyncTracker = asyncTrackerFactory.create();
  }

  save() {
    const saved: Subscription = this.http
      .post('/foo',{bar: 'bam'})
      .pipe(take(1))
      .subscribe(result => {
        console.log(result);
      });
    // `asyncTracker.add` accepts promises or observable subscriptions
    this.asyncTracker.add(saved);
  }
} 
