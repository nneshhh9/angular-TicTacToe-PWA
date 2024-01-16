import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { BoardComponent } from './Components/board/board.component';
// import { SquareComponent } from './Components/square/square.component';

const routes: Routes = [
  // {
  //   path: '',
  //   component: BoardComponent
  // },
  // {
  //   path: '',
  //   component: SquareComponent
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
