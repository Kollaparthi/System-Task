import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TableService } from '../../services/table.service';
import { Event, Router, NavigationStart, NavigationEnd} from '@angular/router';
import {HttpClientModule, HttpClient, HttpRequest, HttpResponse, HttpEventType} from '@angular/common/http';
@Component({
  selector: 'app-tablelist',
  templateUrl: './tablelist.component.html',
  styleUrls: ['./tablelist.component.css']
})
export class TablelistComponent implements OnInit {
  data = []; data1; Name; City; Country; search;
  constructor( private route: ActivatedRoute, private tableservice: TableService, private router: Router, private http: HttpClient) { }

  ngOnInit() {
    this.tableservice.table().subscribe(resultData => {

      this.data = resultData.records;
      localStorage.setItem('data', JSON.stringify(this.data));

      // localStorage.setItem('loginObj', JSON.stringify(resultData.LoginDetails));
        // this.router.navigateByUrl('applicationform');
        // alert(this.data);
        // this.data.push(JSON.parse(localStorage.getItem('userdetails')));
        this.data1 = JSON.parse(localStorage.getItem('userdetails'));
        for (let i = 0; i < this.data1.length; i++) {
            this.data.push({
              Name : this.data1[i].Name,
              City:  this.data1[i].City,
              Country: this.data1[i].Country
            });
          }
          // localStorage.setItem('data', JSON.stringify(this.data));
    },

    error => {
    // this.loginError = 'Invalid Application Number/ password';
    });
  }
edit(index): void {
this.Name = index.Name;
this.City = index.City;
this.Country = index.Country;
}
}
