import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class ValidationMessageService {

    validationErrorObj: any = [];

    public getValidationMsg(validationId: string): string {
        return this.validationErrorObj[validationId];
    }
}