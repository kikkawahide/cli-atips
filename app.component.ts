import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';
@Component({
  selector: 'app-root',
  template:`
<!-- 入力フォームを準備　-->
<form #myForm="ngForm"(ngSubmit)="show()">
    <ng-container *ngFor="let b of books; index as i">
      <label>
        <!-- 1name属性は一意に設定 -->
        <input type="checkbox" name="book{{i}}"
          id="book{{i}}"
          [(ngModel)]="books[i].selected"
          [value]="b.isbn" 
          (change)="show4()">{{b.title}}
      </label><br />
    </ng-container>  


<ng-container *ngFor="let b of books; index as i">
  <label>
  <!--  ラジオボタンを生成　-->
  <input type="radio" name="book" 
      id="book{{i}}" 
      [(ngModel)]="sbook"
      [value]="b.isbn" [checked]="sbook == b.isbn" 
      (change)="show4(i)">{{b.title}}
  </label><br />
  </ng-container>
  
 
  <div>
  <label for="name">名前：</label><br />
  <!-- 3検証用の属性を付与したinput要素 -->
  <input id="nm" name="nm" type="text" [(ngModel)]="user.nm"
    required #nm="ngModel" minlength="2" maxlength="10" />
  <!-- 4検証結果を参照 -->
  <span [hidden]="!(nm.errors?.required && nm.dirty)">
    名前は必須です。</span>
  <span [hidden]="!nm.errors?.minlength">
    名前は2文字以上で入力してください。</span>
  <span [hidden]="!nm.errors?.maxlength">
    名前は10文字以内で入力してください。</span>
  </div>
  <div>
  <label for="age">年齢:</label><br />
  <input id="age" name="age" type="number" [(ngModel)]="user.age"
    required #age="ngModel" />
    <span [hidden]="!age.errors?.required">
    年齢は必須です。 </span>
</div>
  <div>
    <label for="mail">メールアドレス：</label><br />
    <input id="mail" name="mail" type="email" [(ngModel)]="user.mail"
    required email #mail="ngModel" />
    <span [hidden]="!mail.errors?.required">
        メールアドレスは必須です。</span>
    <span [hidden]="!mail.errors?.email">
      メールアドレスは正しい形式で入力してください。</span>
  </div>
  <div>
      <label for="entry">入会希望日：</label><br />
      <input id="entry" name="entry" type="date" [(ngModel)]="user.entry"
        required date #entry="ngModel" />
      <span [hidden]="!entry.errors?.required">
        入会希望日は必須です。</span>
    </div>
    <div>
      <label for="memo">備考：</label><br />
      <textarea id="memo" name="memo" rows="5" cols="30"
       [(ngModel)]="user.memo" maxlength="10" #memo="ngModel">
      </textarea>
      <span [hidden]="!memo.errors?.maxlength">
        備考は10文字以内で入力してください。</span>
    </div>
    <div>
      <!-- 5エラーが存在する場合はボタンを無効化 -->
      <input type="submit" value="申込" 
        [disabled]="myForm.invalid || myForm.submitted" />
    </div>
    </form>



  <div [ngStyle]="style">
  複数のスタイルプロパティをまとめて設定したい場合には、ngStyleディレクティブを利用すべきです。<br />
  サンプルでは、ngStyleディレクティブを利用して、&lt;div&gt;要素に枠線や背景色、フォントサイズなどを付与しています。
  </div>

  <h1>{{title}} TIPS</h1>
    <p>目的別にまとめた{{title}}の解説記事</p>

  <form>
  <label for="switch">適用／除外：</label>
  <input id="switch" name="switch" type="checkbox"
    (change)="flag=!flag" />
</form>
<div id="panel" [ngClass]="{'box light big': flag}">
  <form>
    <label for="switch">背景色:</label>
    <!-- チェックのオン/オフでstyles配下のプロパティを反転 -->
    <input id="switch" name="switch" type="checkbox" 
      (change)="styles.light=!styles.light" />
      <br />
      <label for="switch2">文字サイズ:</label>
      <input id="switch2" name="switch2" type="checkbox" 
      (change)="styles.big=!styles.big" />

   </form>
   <!-- stylesプロパティをngClassディレクティブにバインド -->
   <div id="panel" [ngClass]="styles">
   <p>Class bindingでは一度に一つのスタイルクラスしか操作できないという制限があります。
   　Class binding構文を複数列記することも可能ですｇ、そのような場合にはngClassディレクティブを利用することをお勧めします。<br />
    bgClassはClass Bindingのディレクティブ版で、複数のスタイルクラスをまとめて捜査できる点が異なります。<p>
    </div>

   
   

  <div [ngPlural]="mails.length">
    <ng-template ngPluralCase="=0">新着メールはありません。
    </ng-template>
    <ng-template ngPluralCase="=1">新着メールがあります。
    </ng-template>
    <ng-template ngPluralCase="other">
      {{mails.length}}件の新着メールがあります。
    </ng-template>
  </div>
  <label for="switch">表示:</label>
  <!-- チェックボックスをshow3プロパティに紐付け -->
  <input id="switch" name="switch" type="checkbox" [(ngModel)]="show3" />
  <hr />
  <!-- show3プロパティのtrue/falseに応じてパネルを表示/非表示 -->
  <div id="panel" *ngIf="show3"
    style="border:solid 1px #000; width: 400px; padding: 10px;">
    あいうえおかきくけこさしすせそあいうえおかきくけこさしすせそあいうえおかきくけこさしすせそあいうえおかきくけこさしすせそあいうえおかきくけこさしすせそあいうえおかきくけこさしすせそあいうえおかきくけこさしすせそあいうえおかきくけこさしすせそあいうえおかきくけこさしすせそあいうえおかきくけこさしすせそあいうえおかきくけこさしすせそあいうえおかきくけこさしすせそあいうえおかきくけこさしすせそあいうえおかきくけこさしすせそあいうえおかきくけこさしすせそあいうえおかきくけこさしすせそあいうえおかきくけこさしすせそあいうえおかきくけこさしすせそあいうえおかきくけこさしすせそあいうえおかきくけこさしすせそあいうえおかきくけこさしすせそ
    </div>
   <div id="panel" *ngIf="show3; then showContent; else hideContent">
   </div>
   <ng-template #showContent>
        <div style="border:solid 1px #000; width: 400px; padding: 10px;">
        あいうえおかきくけこ
        </div>
        </ng-template>
        <ng-template #hideContent>
          <h3 style="color:#FoF">非表示状態です。</h3>
        </ng-template>


  <table class="table">
  <tr>
    <th>タイトル</th><th>著者</th><th>公開日</th>
  </tr>
  <!--配列articlesの内容を順番に出力-->
  <tr *ngFor="let article of articles">
    <td><a href="{{article.url}}">{{article.title}}</a></td>
    <td>{{article.author}}</td>
    <td>{{article.released | date: 'mediumDate'}}</td>
  </tr>
  </table>
   
  {{datat}}
  <div *ngFor="let datat of datat ; let j = index">  {{j}} : {{datat}} </div>
  <li *ngFor="let datat of datat ; let j = index">  {{j}} : {{datat}} </li>
  <form>
  <label for="switch">背景色：</label>
      <!--2チェックボックスをflagプロパティにひも付け-->
    <input id="switch" name="switch" type="checkbox"
    [(ngModel)]="flag" />
    <br>
    <label for="switch">文字サイズ：</label>
    <input id="switch2" name="switch2" type="checkbox"
    [(ngModel)]="flag2" />
</form>
<!--1flagプロパティのtrue／falseに応じてスタイルを適用／解除-->
<div id="panel" class="box" [class.light]="flag"  [class.big]="flag2">
  スタイル定義はできるだけスタイルクラスとしてスタイルシートに分離し、これを着脱するのがベターです。そして、そのスタイルクラスを操作するのがClass Bindingの役割です。<br />
  まずは、具体的な例として、チェックボックスのオンオフに応じて、テキスト領域に対してスタイルを変更するサンプルを見てみましょう。
</div>
<br>
<form>
<!--src属性にsiteプロパティの値をバインド-->
<iframe [src]="safeSite"></iframe>
  <br>
  <label for="name">名前:</label>
  <input id="txtname" name="txtname" type="text" #name /> 
   <!-- イベントハンドラーにテキストボックスへの入力値を引き渡す -->
   <input type="button" value="送信" (click)="onclick(name.value)" />
   <div>{{msg}}</div>
   <!-- テキストボックスtxtnameに対して、nameプロパティをひも付け -->
   <input id="txtName" name="txtName" type="text" 
    [(ngModel)]="name2" 
    (input)="name2=$event.target.value" />
    <div> Hello, {{name2}}!!</div>
   
    
   </form>

   <div>{{ mails.length |i18nPlural: labels }}
 <!--イベントハンドラーにイベントオブジェクトを渡す-->
    <input type="button" value="ログ出力" (click)="onclick($event)" />
 
<!--  イベントハンドラーを登録 -->
<input type="button" value="現在時刻" (click)="onclick()" />
<div>{{result}}</div>
<ol>
<li>元の値：{{value}}</li>
<li>percent（デフォルト）：{{value | percent}}</li>
<li>percent（桁数指定）：{{value | percent : '3.1-2'}}</li>
</ol>
<ol>
      <li>元の値：{{value2}}</li>
      <li>currency（デフォルト）：{{value2 | currency}}</li>
      <li>currency（コードのみ）：{{value2 | currency : 'JPY'}}</li>
      <li>currency（円）：{{value2 | currency : 'JPY': true}}</li>
      <li>currency（ユーロ）：{{value2 | currency : 'EUR': true}}</li>
      <li>currency（桁数）：{{value2 | currency : 'JPY': true: '5.1-3'}}</li>
    </ol>
    <form>
    <label><input id="style1" name="style" type="radio"
      (click)="bgcolor=''" />ノーマル</label>
    <label><input id="style1" name="style" type="radio"
      (click)="bgcolor='#FF7F50'" />暖色</label>
    <label><input id="style1" name="style" type="radio"
      (click)="bgcolor='#00FFFF'" />寒色</label>
  </form>  
  <!--1bgcolorプロパティの値に応じて背景色を変更-->
  <div [style.background-color]="bgcolor">
    要素のスタイルプロパティを操作するには、Style Bindingを使います。
  </div>
  <form>
    <label><input id="style1" name="style" type="radio"
      (click)="size='150%'" />大</label>
    <label><input id="style1" name="style" type="radio"
      (click)="size='100%'" />中</label>
    <label><input id="style1" name="style" type="radio"
      (click)="size='50%'" />小</label>
  </form>
      <div [style.font-size.%]="size">
  要素のスタイルプロパティを操作するには...
</div>

`,

styles: [`
  .box {
    border:solid 1px #000;
    width: 400px;
    padding: 10px;
  }
  
  .light {
    color: #f00;
    background-color: #ffc;
  }
  .big {
    font-size: 150%;
    line-height: 150%;
  }
  h1 {
    color: #f00;
    background-color: #ffc;
    font-style: italic;
  }

  p {
    color: #f0c;    
    font-weight: bold;
  }
`]
})
export class AppComponent {
  
  sbook = '978-4-7741-9130-0';
  books = [
    { isbn: '978-4-8222-9894-4', title: '基礎からしっかり学ぶC#の教科書' },
    { isbn: '978-4-8222-5355-4', title: 'アプリを作ろう！ Visual C#入門' },
    { isbn: '978-4-7741-9130-0', title: 'Angularアプリケーションプログラミング' },
    { isbn: '978-4-7741-9030-3', title: 'C#ポケットリファレンス' },
    { isbn: '978-4-7741-8994-9', title: 'HTML&CSS 超入門' }
  ];

  show4(i : number) {
    console.log('ISBN：' + this.sbook);
    console.log('書名：' + this.books[i].title);
  }
   //フォームのディフォルト値
   user={
     name:"",
     age:20,
     mail:'dummy@example.com',
     entry:'2018-01-01',
     memo:''
   };
   //サブミット時に入力値をログ出力
   show(){
     console.log('名前：'+this.user.name);
     console.log('年齢：'+this.user.age);
     console.log('メールアドレス：'+this.user.mail);
     console.log('入会希望日：' + this.user.entry);
     console.log('備考：' + this.user.memo);
    
   }
   //変数resultを初期化
   // 1stylesプロパティを定義
   style = {
    border: 'solid 1px #000',
    width: '400px',
    color: '#f00',
    // 1camelCase形式の表記に
    backgroundColor: '#ffc',
    // 2単位付きのスタイルプロパティ
    fontSize: '150%'
  }
  styles = {
    box: true,
    light : false,
    big : false
  };
  name = 'Tom';
  name2 = 'Tom';
  result='現在時刻は不明です。';
  msg= '';
  value = 0.98765;
  value2 = 1234.98765;
  bgcolor = '';
  flag = false;
  flag2 = false;
  show3 = false;
  title = 'Angular';
  //site = 'http://tcs-o.co.jp/TESTY/an-top.html/';
  safeSite: SafeResourceUrl;
  //site = 'http://tcs-o.co.jp/TESTY/cal2-takasa.html';
  site = 'http://tcs-o.co.jp/TESTY/an-top.html';

  constructor(private sanitizer: DomSanitizer) {
    this.safeSite = sanitizer.bypassSecurityTrustResourceUrl(this.site);
  }
  // 表示すべきメッセージ
  labels = {
    '=0'   : '新着メッセージはありません。',
    '=1'   : 'メッセージがあります。',
    'other': '#件のメッセージがあります。',
  }

  // 新着メール情報
  mails = [
    { name: '山田太郎', body: 'こんにちは。今年は暑いねー。' },
    { name: '鈴木久美子', body: 'お久しぶりです。元気にしてますか？' },
    { name: '佐藤雄二', body: '今度の日曜日、ランチしに行きませんか。' },
    { name: '山口夕夏', body: 'お誕生日おめでとう！' },
    { name: '田中仁', body: 'いつもお世話になっております。明日はよろしくお願い致します。' }
  ];

  datat = [100,110,121,130,142];
  articles = [
    {
      url: 'https://www.buildinsider.net/web/jqueryref',
      title: 'jQuery逆引きリファレンス',
      author: 'WINGSプロジェクト',
      released: new Date(2017, 10, 1)
    },
    {
      url: 'https://www.buildinsider.net/web/jqueryref',
      title: 'jQuery逆引きリファレンス2',
      author: 'WINGSプロジェクト2',
      released: new Date(2017, 10, 2)
    },
    {
      url: 'https://www.buildinsider.net/web/jqueryref',
      title: 'jQuery逆引きリファレンス3',
      author: 'WINGSプロジェクト3',
      released: new Date(2017, 10, 3)
    } 
  ];
   
   // イベント情報をログに出力
   onclick(e: any) {
    console.log(e);
    this.msg = `Hello, ${e}!!`;
  
    this.result=`現在時刻は ${new Date().toLocaleTimeString()}です。`;
  }
  
}
