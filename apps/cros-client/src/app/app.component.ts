import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Message } from '@cros-examples/api-interfaces';

@Component({
  selector: 'cros-examples-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  hello$ = this.http.get<Message>('http://localhost:3333/api/hello');

  constructor(private http: HttpClient) {}

  onPost() {
    // fetch('http://localhost:3333/api/hello', {
    //   method: 'POST',
    //   headers: {
    //     'x-custon': 'HOGE',
    //   }
    // }).then(res => res.json())
    // .then(console.log)
    // .catch(e => {
    //   console.log(e);
    // });
    this.http
      .post<Message>('http://localhost:3333/api/hello', {
        headers: new HttpHeaders().set('x-custon', 'HOGE')
      })
      .subscribe(v => console.log(v), console.log);
  }
}
