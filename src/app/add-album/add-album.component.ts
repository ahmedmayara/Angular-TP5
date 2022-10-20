import { Component, OnInit } from '@angular/core';
import { Album } from '../model/album.model';
import { AlbumService } from '../services/album.service';

@Component({
  selector: 'app-add-album',
  templateUrl: './add-album.component.html',
  styleUrls: ['./add-album.component.css']
})
export class AddAlbumComponent implements OnInit {

  newAlbum = new Album();

  addAlbum() {
    this.albumService.AddAlbum(this.newAlbum);
  }

  constructor(private albumService: AlbumService) {}

  ngOnInit(): void {
  }

}
