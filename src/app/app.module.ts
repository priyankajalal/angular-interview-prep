import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {SquarePipe} from  './pipes/squarePipe';
import {UppercasePipe} from  './pipes/uppercasePipe';
import { KeyValuePipe } from  './pipes/keyValuePipe';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { ChildComponent } from './components/viewchild/child/child.component';
import { ParentComponent } from './components/viewchild/parent/parent.component';
import {HttpClientModule} from '@angular/common/http';
import {CardService} from './services/card.service';
import { BaseLoggerService } from './services/base-logger.service';
import { HttpLoggerService } from './services/http-logger.service';
import {ColorDirective} from './directives/color_directive';
import { AsyncComponent } from './components/async/async.component';
import { PipedemoComponent } from './components/pipedemo/pipedemo.component'

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    ChildComponent,
    ParentComponent,
    SquarePipe,
    UppercasePipe,
    KeyValuePipe,
    ColorDirective,
    AsyncComponent,
    PipedemoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    {provide:CardService,useClass:CardService},
    {provide:BaseLoggerService,useClass:HttpLoggerService}
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
