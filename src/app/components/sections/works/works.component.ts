import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss']
})
export class WorksComponent implements OnInit {
  public workFilter: string;
  public singleGallery1: any;
  public albums: any = [];
  public designAlbums: any = [];

  videoObject: Array<object> = [
    {
      video: 'https://www.youtube.com/watch?v=6CKfaoN2WoY',
      posterImage: 'assets/images/works/20.png'
    }
  ];

  constructor() {
    this.workFilter = 'all';
    this.singleGallery1 = [
      {
        src: 'assets/images/works/15.png',
        caption: 'Dashboard Bohikor',
        thumb: 'assets/images/works/15.png'
      },
      {
        src: 'assets/images/works/16.png',
        caption: 'Bohikor Score',
        thumb: 'assets/images/works/16.png'
      },
      {
        src: 'assets/images/works/17.png',
        caption: 'Budget and Spending',
        thumb: 'assets/images/works/17.png'
      },
      {
        src: 'assets/images/works/18.png',
        caption: 'Income reports',
        thumb: 'assets/images/works/18.png'
      },
      {
        src: 'assets/images/works/19.png',
        caption: 'Create Budgets',
        thumb: 'assets/images/works/19.png'
      }
    ];

    for (let i = 5; i >= 1; i--) {
      const album = {
        src: 'assets/images/works/' + i + '.png',
        caption: 'Image ' + i + '',
        thumb: 'assets/images/works/' + i + '.png'
      };

      this.albums.push(album);
    }

    for (let i = 21; i <= 29; i++) {
      const dalbum = {
        src: 'assets/images/works/' + i + '.png',
        caption: 'Image ' + i + '',
        thumb: 'assets/images/works/' + i + '.png'
      };

      this.designAlbums.push(dalbum);
    }
  }

  ngOnInit(): void {}

  onChange(e) {
    this.workFilter = e.target.value;
  }
}
