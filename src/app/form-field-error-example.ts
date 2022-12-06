import { Component } from '@angular/core';
import { FormControl, Validators, AbstractControl } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { delay, map, first, tap } from 'rxjs/operators';

/** @title Form field with error messages */
@Component({
  selector: 'form-field-error-example',
  templateUrl: 'form-field-error-example.html',
  styleUrls: ['form-field-error-example.css'],
})
export class FormFieldErrorExample {
  email = new FormControl('', [], [this.asyncVal]);

  private asyncVal(control: AbstractControl): Observable<any> {
    return of(control.value).pipe(
      map((value) => (value === '123' ? { error: 'error' } : null))
      //      tap((error) => error && this.email.markAsTouched())
    );
  }
}

/**  Copyright 2022 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at https://angular.io/license */
