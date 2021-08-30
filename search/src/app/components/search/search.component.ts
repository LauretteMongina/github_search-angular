import { Component, OnInit ,Output,EventEmitter} from '@angular/core';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  userName : string;
  @Output() searchEmitter = new EventEmitter<any>();
  constructor() { }

  ngOnInit(){
  }
  search(){
    this.searchEmitter.emit(this.userName);
    this.userName="";
  }
}
