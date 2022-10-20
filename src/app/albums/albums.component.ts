import { Component, OnInit } from '@angular/core';
import { Album } from '../model/album.model';
import { AlbumService } from '../services/album.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {

  albums : Album[];

  constructor(private albumService: AlbumService) {
    this.albums = albumService.AlbumList();
  }

  ngOnInit(): void {
  }

}
