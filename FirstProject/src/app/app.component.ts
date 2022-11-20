import { Component, EventEmitter, Input, Output,OnInit} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductsService } from './products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'FirstProject';


  //Find the User and Navigation
  theadmin:boolean=false;
  theuser:boolean=false;
  //End of the Navogation

  signout()
  {
    this.theadmin=false;
    this.theuser=false;
    this.service.setsign();
    this.rt.navigateByUrl('/Login');
  }
  constructor(private service:ProductsService,private rt:Router){}
  printsum(ts:any)
  {
    if(this.service.isadmin()==true)
    {
      this.theadmin=true;
    }
    else if(this.service.isuser()==true)
    {
      this.theuser=true;
    }
  }



  List=new FormGroup({
    listval:new FormControl('1')
  })
  play=new Audio();
  song={
    '1':'https://masstamilan.dev/downloader/YOZGaxCu45igjyRTrgGoOQ/1668268755/p128_cdn/23076',
    '2':'https://vedimuthu.com/downloader/t8IS12Pkk3_WvOcmxbvPhw/1668272063/d128_cdn/22485',
    '3':'https://vedimuthu.com/downloader/cbTkF4BYLFCiOsaA_8LrsA/1668293360/zip320/2169'
  }

  icns:string[]=['https://img.icons8.com/ios-glyphs/512/play-button-circled.png','https://img.icons8.com/ios-glyphs/512/circled-pause.png'];
  isplay:boolean=true;
  src:string='https://img.icons8.com/ios-glyphs/512/circled-pause.png';
  findsong():string
  {
    if(this.List.controls.listval.value=='1')
    {
      return this.song['1'];
    }
    else if(this.List.controls.listval.value=='2')
    {
      return this.song['2'];
    }
    else if(this.List.controls.listval.value=='3')
    {
      return this.song['3'];
    }
    else{
      return this.song['1'];
    }
  }
  change():void
  {
    if(this.isplay)
    {
      this.isplay=false;
      this.src=this.icns[0];
      this.play.pause();
    }
    else{
      this.isplay=true;
      this.src=this.icns[1];
      this.play.play();
    }
  }
  chpl()
  {
    this.play.src=this.findsong();
    this.play.play();
    
  }
  ngOnInit(){
    this.play.src=this.findsong();
    this.play.play();
    
  }
  ngOnDestroy()
  {
    
    this.play.pause();
    
  }
}
