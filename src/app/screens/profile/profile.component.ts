import { Component, OnInit } from '@angular/core';
import { PexelsService } from 'src/app/shared/services/photos/pexels.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent  implements OnInit {

  public photo: String[] = [];

  constructor( private pexelsService: PexelsService) { }

  ngOnInit() {
    this.getPhotos();
  }

  getPhotos() {
    this.pexelsService.getPhotoPexels().subscribe(v => {
      console.log(v);
      v.media.map(v=>{
        this.photo.push(v.src.medium);
      })
    })
  }

}
