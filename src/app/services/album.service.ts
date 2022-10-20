import { Injectable } from '@angular/core';
import { Album } from '../model/album.model';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  albums : Album[];

  constructor() {
    this.albums = [
      {
        id: 1,
        title: 'The Life Of Pablo',
        artist: 'Kanye West',
        releaseDate: new Date('2016-02-14'),
        genre: 'Hip-Hop'
      },

      {
        id: 2,
        title: 'Blonde',
        artist: 'Frank Ocean',
        releaseDate: new Date('2016-08-20'),
        genre: 'R&B'
      },

      {
        id: 3,
        title: 'After Hours',
        artist: 'The Weeknd',
        releaseDate: new Date('2020-03-20'),
        genre: 'R&B'
      },

      {
        id: 4,
        title: 'The Blueprint',
        artist: 'Jay-Z',
        releaseDate: new Date('2001-09-11'),
        genre: 'Hip-Hop'
      },

      {
        id: 5,
        title: 'The College Dropout',
        artist: 'Kanye West',
        releaseDate: new Date('2004-02-10'),
        genre: 'Hip-Hop'
      }
    ];
    }

    AlbumList():Album[] {
      return this.albums;
    }

    AddAlbum(al:Album) {
      this.albums.push(al);
    }
  }
