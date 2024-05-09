import { Injectable, OnInit } from '@angular/core';
import { Character } from '../models/character';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CharacterService implements OnInit {

  private _characters: BehaviorSubject<Character[]> = new BehaviorSubject<Character[]>([]);

  currentPage?: number;
  maxPages?: number;
  prevUrl?: string;
  url: string = 'https://rickandmortyapi.com/api/character';
  nextUrl?: string;

  get characters(): Observable<Character[]> {
    return this._characters.asObservable();
  }

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
  }

  load() {
    this.callApi(this.url);
  }

  goBack() {
    this.callApi(this.prevUrl || null)
  }

  goForward() {
    this.callApi(this.nextUrl || null);
  }

  private callApi(url: string | null) {
    const finalUrl: string = url ?? this.url;
    console.log(finalUrl);

    this.http.get(finalUrl)
      .subscribe(({ info, results }: any) => {
        this.prevUrl = info.prev;
        this.nextUrl = info.next;

        this._characters.next(results);
      });
  }

}
