import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { YoutubeService } from '../../services/youtube.service';
import {DomSanitizer} from '@angular/platform-browser';
import trainerChannel from '../../../assets/json/trainerChannel.json';
import youTubeParser from 'youtube-parser';

@Component({
  selector: 'app-youtube-channel',
  templateUrl: './youtube-channel.component.html',
  styleUrls: ['./youtube-channel.component.css']
})

export class YoutubeChannelComponent implements OnInit {
  videos: any[];
  paramData:any;
  videourl:any;

  constructor(private youTubeService: YoutubeService,
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer) {
      this.route.params.subscribe( params => this.paramData=params );
     }

  ngOnInit() {
  this.getVideos();
  }


  getVideoId(id){
    this.videourl= this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/" +id);
    // youTubeParser.getURL('https://www.youtube.com/watch?v='+ id, {quality: 'medium', container: 'mp4'})
    // .then(
    //   function (urlList) {
    //     // Access URLs.
    //     console.log("hhh" + urlList[0]);
    //   }
    // );
  }


  getVideos(){
    this.videos=trainerChannel.items;
//     this.youTubeService.getVideosForChanel(this.paramData.channelid, 15)
//     .subscribe(res => {
//       console.log(JSON.stringify(res));
// this.videos=res['items'];
//     },err=>{
// console.log(err);
//     });
  }

}
