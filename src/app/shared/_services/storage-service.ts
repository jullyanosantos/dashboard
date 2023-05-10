import { Injectable } from "@angular/core";

const USER_KEY = 'auth-user';

@Injectable({
    providedIn: 'root'
})
export class StorageService {

    constructor() { }

    clean(): void {
        window.sessionStorage.clear();
    }

    public saveUser(user: any): void {
        window.sessionStorage.removeItem(USER_KEY);
        window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
    }

    public setToken(token: any) {
        localStorage.setItem("accessToken", token);
    }

    public setRefreshToken(token: any) {
        localStorage.setItem("refreshToken", token);
    }

    public getUser() {
        const user = window.sessionStorage.getItem(USER_KEY);
        if (user) {
            return JSON.parse(user);
        }
    }

    public isLoggedIn(): boolean {
        const user = window.sessionStorage.getItem(USER_KEY);
        
        // if (user) return true;
        
        return true;
    }
}