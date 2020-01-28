
import { Subject, Subscription } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { NgScrollbar } from 'ngx-scrollbar';
import { Component, OnInit, HostListener, Inject } from '@angular/core';  
import { trigger, state, transition, style, animate } from '@angular/animations';  
import { DOCUMENT } from '@angular/common';

import { Router, NavigationEnd } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],

})
export class HomeComponent implements OnInit {

 

constructor(@Inject(DOCUMENT) document) { }

  ngOnInit() {  }



}