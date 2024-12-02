import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrevisaoHomeComponent } from './modules/previsao/pages/previsao-home/previsao-home.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'previsao',
    pathMatch: 'full',
  },
  {
    path: 'previsao',
   component: PrevisaoHomeComponent,
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
