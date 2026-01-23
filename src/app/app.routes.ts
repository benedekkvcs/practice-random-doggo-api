import { RouterModule, Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Search } from './components/search/search';
import { Favourites } from './components/favourites/favourites';
import { NgModule } from '@angular/core';
import { Navbar } from './components/navbar/navbar';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: Home },
    { path: 'search', component: Search },
    { path: 'favourites', component: Favourites }
];

@NgModule ({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
