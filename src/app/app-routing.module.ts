import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/navigation',
    pathMatch: 'full'
  },
  {
    path: 'folder/navigation',
    loadChildren: () => import('./screens/navigation/navigation.module').then( m => m.NavigationModule)
  },
  {
    path: 'folder/profile',
    loadChildren: () => import('./screens/profile/profile.module').then( m => m.ProfileModule)
  },
  {
    path: 'folder/favorites',
    loadChildren: () => import('./screens/favorites/favorites.module').then( m => m.FavoritesModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
