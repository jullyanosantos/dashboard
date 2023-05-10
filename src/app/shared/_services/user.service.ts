import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment.prod";
import { BaseResult } from "../_models/base-result";
import { UserDropDownList } from "../_models/user-dropdownlist";
import { UserList } from "../_models/user-list";

const httpOptions = {
    headers: new Headers({
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": 'http://localhost:4300'
    })
};

@Injectable({
    providedIn: 'root'
})
export class UserService {

    constructor(
        private httpClient: HttpClient
    ) {

    }

    getUserDropDownList() {

        return this.httpClient.get<BaseResult<UserDropDownList[]>>(`${environment.apiUrl}/assets/data-source/user.json`)
            .toPromise()
            .then(res => <BaseResult<UserDropDownList[]>>res)
            .then(resp => {
                return resp;
            })
    }

    getAll() {

        return this.httpClient.get<BaseResult<UserList[]>>(`${environment.apiUrl}/assets/data-source/user.json`)
            .toPromise()
            .then(res => <BaseResult<UserList[]>>res)
            .then(resp => { return resp; })
    }
}