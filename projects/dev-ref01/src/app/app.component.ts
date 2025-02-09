import { Component, AfterContentInit, contentChild, ElementRef, viewChild, Signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ChildComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements AfterContentInit {
  title = 'dev-ref01';

  projectedParagraph = contentChild<ElementRef>('contentParagraph'); // テンプレート参照変数で取得
  projectedChildComponent = contentChild(ChildComponent); // コンポーネント自体を取得
  viewChildComponent = viewChild(ChildComponent); // viewChild 関数版 (自身のテンプレート内)

  ngAfterContentInit() {
    if (this.projectedParagraph()) {
      console.log('ContentChild (段落):', this.projectedParagraph()?.nativeElement.textContent);
    } else {
      console.log('ContentChild (段落): 段落要素が見つかりません');
    }

    if (this.projectedChildComponent()) {
      console.log('ContentChild (子コンポーネント):', this.projectedChildComponent()?.message);
    } else {
      console.log('ContentChild (子コンポーネント): 子コンポーネントが見つかりません');
    }

    if (this.viewChildComponent()) {
      console.log('ViewChild (子コンポーネント):', this.viewChildComponent()?.message);
    } else {
      console.log('ViewChild (子コンポーネント): ViewChild で子コンポーネントが見つかりません');
    }
  }

}
