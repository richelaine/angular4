import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { UserItemComponent } from './user-item/user-item.component';
import { UserListComponent } from './user-list/user-list.component';

@NgModule({ // <-- DECORATOR - adds metadata to the class immediately following (in this case, AppModule)
            //@NgModule has 4 keys - 'declarations', 'imports', 'providers' and 'bootstrap'
            // **you have to declare components in a NgModule before you can use them in your templates. 

  declarations: //specifies the 'components' that are 'defined in this module' 
                //declaration states what component are 'owned by' this module
  [
    AppComponent,
    HelloWorldComponent,
    UserItemComponent,
    UserListComponent
  ],

  imports: //describes which dependencies this module has.
  [
    BrowserModule,
    FormsModule,
    HttpModule
  ],

  providers: [], //used for dependency injection

  bootstrap: //tells angular that when this module is used to bootstrap an app, 
             //we need to load the AppComponent component as the top-level component
  [
    AppComponent
  ]
})
export class AppModule { }
