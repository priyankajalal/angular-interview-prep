import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AsyncComponent } from './components/async/async.component';
import { CardComponent } from './components/card/card.component';
import { PipedemoComponent } from './components/pipedemo/pipedemo.component';
import { ParentComponent } from './components/viewchild/parent/parent.component';


const routes: Routes = [
      {
        path: 'card',
        component: CardComponent
      },
      {
        path: 'viewchild',
        component: ParentComponent
      },
      {
        path: 'async',
        component: AsyncComponent
      },
      {
        path: 'pipe',
        component: PipedemoComponent
      }
      
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
