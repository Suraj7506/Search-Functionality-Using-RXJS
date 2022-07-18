
import { AfterViewInit, Component } from '@angular/core';
import { MyserviceService } from './myservice.service';

  export class Search{
    Username!: string;
    email!:string;
    mobileno!:number;
    gender!:string;
    password!:string;
}


@Component({
  
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {
  title = 'rxjs';
  // @ViewChild('searchForm') searchForm: NgForm;
  searchResults: Search[] = [];
  searchTerm: any;

  constructor(private _myservice: MyserviceService) {}

  ngAfterViewInit() {
    this._myservice.getSearches().subscribe((res: Search[]) => {
      console.log(res);
      this.searchResults = res;
      this.data = res;
    });

    // const formValue = this.searchForm.valueChanges;

    // formValue.pipe(
    //   map(data => data['searchTerm']),
    //   debounceTime(500),
    //   distinctUntilChanged()

    // )
  }

  data: Search[] = [];

  onChange() {
    console.log(this.searchTerm);
    if (this.searchTerm.length > 0) {
      this.data = [];

      this.searchResults.forEach((e) => {
        if (
          e.Username.includes(this.searchTerm.trim().toLowerCase()  )  ||
          e.email.toLowerCase().includes(this.searchTerm.trim())
        ) {
          this.data.push(e);
        }
      });
      console.log(this.data);
    } else {
      this.data = this.searchResults;
    }
  }
}