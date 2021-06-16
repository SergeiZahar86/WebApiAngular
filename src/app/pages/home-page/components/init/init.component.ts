import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-init',
  templateUrl: './init.component.html',
  styleUrls: ['./init.component.scss']
})
export class InitComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  showChange($event: MouseEvent) {
    /*let myDialog:any = <any>document.getElementsByClassName("detail");
    myDialog.toggleClass('open');*/
  }
}
