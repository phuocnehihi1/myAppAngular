import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyComponentComponent } from './my-component/my-component.component';
import { AubaucomponentComponent } from './aubaucomponent/aubaucomponent.component';
import { AboutnewmoduleComponent } from './aboutnewmodule/aboutnewmodule.component';

@NgModule({
  declarations: [
    AppComponent,
    MyComponentComponent,
    AubaucomponentComponent,
    AboutnewmoduleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
