import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollWatcherService {


  init(){
    const header = document!.querySelector('#header');
    const nav = document.querySelector('nav');
    const headerObs = new IntersectionObserver((entries,obs)=>{
      nav!.classList.toggle('scrolled',!entries[0].isIntersecting);
    },{root: null, threshold: 0, rootMargin: "-20px"});

    headerObs.observe(header!);

    const sections = document.querySelectorAll('section')
    const flags:{id: string,isEntered: boolean}[] = [];
    const sectionObs = new IntersectionObserver((entries,obs)=>{
      let item;
      let main;
      let currentFlag;
      entries.forEach((entry)=>{
        item = document.querySelector('.li-'+ entry.target.id);
        item?.classList.toggle('active',entry.isIntersecting);

        currentFlag = flags.find((flag)=>flag.id===entry.target.id)
        if(currentFlag && !currentFlag?.isEntered){
          if(entry.isIntersecting){
            main = document.querySelector('.main-' + entry.target.id);
            main?.classList.add('animate');
            currentFlag.isEntered = true;
          }
        }

      })
    },{root: null, threshold: 0.5, rootMargin: "-150px"})
    sections.forEach((section)=>{
      sectionObs.observe(section);
      flags.push({id: section.id, isEntered: false})
    })
  }
}
