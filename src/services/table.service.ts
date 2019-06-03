import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TableService {

  constructor(private http: HttpClient) { }
  table() {
  //   const y = localStorage.getItem('password');
  //  const encodedpassword = btoa( y);
    const url = 'https://www.w3schools.com/angular/customers.php';
    // const params = {
    //   application_number : x,
    //     password : usersecret,
    //     clientId : AppComponent.CLIENT_ID
    // };
    // const options = { headers: { 'Content-Type': 'application/json' } };
    return this.http.get(url).pipe(map((res: any) => {
        return res;
    }));
}
}
