import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LoginService {
  private employeesSrvUrl = 'http://localhost/EmployeesSrv/';

  constructor(private httpClient: HttpClient) { }

  public getUser(login: string): Observable<any> {
    return this.httpClient.post(this.employeesSrvUrl + 'getUser', JSON.stringify(login));
  }
}
