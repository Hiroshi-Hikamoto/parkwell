import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

import { environment } from "../../environments/environment";

@Injectable({
    providedIn: 'root'
})
export class APIService {

    static URL = environment.ws;

    constructor(
        private http: HttpClient
    ) {}

    cocktailList(keyword: string) {
        return this.http.get(`${APIService.URL}search.php?s=${keyword}`);
    }

    cocktailDetail(id: number) {
        return this.http.get(`${APIService.URL}lookup.php?i=${id}`);
    }
}