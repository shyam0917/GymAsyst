import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { YoutubeChannelComponent } from './components/youtube-channel/youtube-channel.component';

const routes: Routes = [
{path:"",component:HomeComponent},
{path:"trainer/:id/:channelid", component: YoutubeChannelComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
