import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalendarModule } from './pages/calendar/calendar.module';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/calendar/calendar.module').then(m => m.CalendarModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
