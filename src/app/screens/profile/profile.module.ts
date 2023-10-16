import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { ProfileComponent } from './profile.component';


@NgModule({
  declarations: [
    ProfileComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    FormsModule,
    IonicModule
  ]
})
export class ProfileModule { }
