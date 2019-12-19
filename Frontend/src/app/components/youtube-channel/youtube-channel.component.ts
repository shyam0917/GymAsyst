import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { YoutubeService } from '../../services/youtube.service';

import trainerChannel from '../../../assets/json/trainerChannel.json';

@Component({
  selector: 'app-youtube-channel',
  templateUrl: './youtube-channel.component.html',
  styleUrls: ['./youtube-channel.component.css']
})

export class YoutubeChannelComponent implements OnInit {
  videos: any[];
  paramData:any;

  constructor(private youTubeService: YoutubeService,
    private route: ActivatedRoute) {
      this.route.params.subscribe( params => this.paramData=params );
     }

  ngOnInit() {
  this.getVideos();
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
