import { Component, ElementRef, Renderer2,HostListener } from '@angular/core';
import {  NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

import { ViewportScroller } from '@angular/common';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isMenuOpen = false;
  constructor(
  private renderer: Renderer2, private el: ElementRef, private route:Router,private viewportScroller: ViewportScroller
){
  this.route.events.pipe(
    filter((event): event is NavigationEnd => event instanceof NavigationEnd)
  ).subscribe((event: NavigationEnd) => {
    // If you have an anchor fragment in the URL, scroll to it
    const targetElementId = event.url.split('#')[1];
    if (targetElementId) {
      this.scrollTo(targetElementId);
    }
  });
}

scrollTo(fragment: string): void {
  // Use the Angular ViewportScroller to scroll to the specified fragment
  this.viewportScroller.scrollToAnchor(fragment);
  const element = document.getElementById(fragment);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
    }
}
///////////////////////////////// click to scroll to section by id ////////////////////////
  scrollToSection(sectionId: string): void {
    const element = this.el.nativeElement.querySelector(`#${sectionId}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
    }
  }

//////////////////////////// listen to scroll to hide/show header /////////////////////////
  isHeaderHidden = false;
  private lastScrollTop = 0;
  @HostListener('window:scroll', ['$event'])
  onScroll(event: any) {
    const st = window.pageYOffset || document.documentElement.scrollTop;
    this.isHeaderHidden = st > this.lastScrollTop && st > 50;
    this.lastScrollTop = st <= 0 ? 0 : st;
  }
////////////////////////////////////////////////////////////////////////////////////////////
}
