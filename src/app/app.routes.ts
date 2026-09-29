import { Routes } from '@angular/router';
import { Login } from './components/login/login';
import { Home } from './components/home/home';
import { Profile } from './components/profile/profile';
import { Errorpage } from './components/errorpage/errorpage';
import { Chat } from './components/chat/chat';

import { Router } from 'express';
import { inject } from '@angular/core';
let dummydata = [
  {name:"batman", email:"bruce@waynemansion.gt", password:"imasadorphan"}
]

let LoggedIn = false;
export const routes: Routes = [

  {path: 'login', 
  component: Login},
  
  {path: 'chat',
    component: Chat
  },

  {
    path:'edit',
    component: Profile,
  },
  {path:'',redirectTo:'login', pathMatch: 'full' },

  {
    path: 'ComponentNotFound',
    component: Errorpage
  },
  {
    path: '**',
    redirectTo:'componentNotFound'
  }


];
let Users = [
  {
    "name": "shigeo", "email":"kageyama@saltmiddleschool.jp", "password":"mobpsycho"
  },
  {
    "name": "reigen", "email":"arataka@sorcery.jp", "password":"conartist"
  },
  {
    "name": "saitama", "email":"saitama@hero.jp", "password":"onepunchman"
  }
]