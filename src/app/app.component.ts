// import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';
  // readonly Apiurl = "http://localhost:3000/"

  // constructor(private http: HttpClient){
  // }
  // name:any = "";

  // refer(){
  //   this.http.get(this.Apiurl+'/');
  // }

  // ngOnInit(){
  //   this.refer();
  // }
}
