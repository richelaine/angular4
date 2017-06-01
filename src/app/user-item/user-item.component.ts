import { Component, 
         OnInit,
         Input // <-- added this DECORATOR
       } from '@angular/core';

@Component(
  {
    selector: 'app-user-item',
    templateUrl: './user-item.component.html',
    styleUrls: ['./user-item.component.css']
  })

export class UserItemComponent implements OnInit 
{
  //name: string; <-- added name PROPERTY
  @Input() name: string; // <-- added Input annotation - @Input allows us to pass in a value from the parent template.


  constructor() 
  { 
    //this.name = 'Daboo'; <-- set the name
  }

  ngOnInit() { }

}
