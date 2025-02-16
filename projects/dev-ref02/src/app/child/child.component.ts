
import { Component } from '@angular/core';
import { AfterContentChecked,AfterContentInit, ElementRef, OnDestroy, contentChild, signal } from '@angular/core';
import { Subject } from 'rxjs';
import { effect } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true, // signal-based template queries を使う場合は standalone: true が必要
  imports: [],
  template: './child.component.html',
  styleUrl: './child.component.scss'
})
export class ChildComponent implements AfterContentInit,AfterContentChecked, OnDestroy {
  headingElement = contentChild.required<ElementRef<HTMLHeadingElement>| undefined>('h'); 
  // signal-based contentChild
  //headingElement = contentChild.required<ElementRef<HTMLHeadingElement>>('h');
  //console.log('headingElement =', this.headingElement());
  
    private ngUnsubscribe = new Subject<void>();
  
    constructor() {      
      // effect(() => {
      //   console.log('effect 実行'); // ログを追加        
      //   const headingEl = this.headingElement(); // シグナルから値を取得
      //   console.log('headingEl 実行',headingEl);
      //   if (headingEl ) {
      //     console.log('射影されたh要素:', headingEl.nativeElement);//error
      //     headingEl.nativeElement.classList.add('highlighted-heading'); // 例: クラスを追加
      //   }else {
      //     console.log('射影されたh要素は見つかりませんでした。');
      //   }
      // });
    }
 
    ngAfterContentInit(){
      console.log('ngAfterContentInit 実行');     
    }
   
    ngAfterContentChecked(){
      // effect(() => {
        
         console.log('ngAfterContentChecked 実行'); // ログを追加
        //const headingEl = this.headingElement(); // error: シグナルから値を取得
        //console.log('headingEl 実行',headingEl);
        // if (headingEl ) {
        //   console.log('射影されたh要素:', headingEl.nativeElement);//error
        //   headingEl.nativeElement.classList.add('highlighted-heading'); // 例: クラスを追加
        // }else {
        //   console.log('射影されたh要素は見つかりませんでした。');
        // }
      // });

    }
  
    ngOnDestroy() {
      this.ngUnsubscribe.next();
      this.ngUnsubscribe.complete();
    }  
}
