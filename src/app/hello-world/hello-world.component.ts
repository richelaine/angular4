import { Component, OnInit } from '@angular/core';

@Component( //DECORATORS
  {
    selector: 'app-hello-world', //defines new tag that will be used in HTML
    templateUrl: './hello-world.component.html',
    // template: ` 
    //   <p> hello-world works inline! </p>`,
    styleUrls: ['./hello-world.component.css'] //accepts an array of stylesheets for a single component
  })

export class HelloWorldComponent implements OnInit 
{
  constructor() { }

  ngOnInit() { }
}
