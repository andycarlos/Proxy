import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proxy';
  constructor(private http:HttpClient)
  {
    const body = `<?xml version="1.0" encoding="utf-8"?>
    <soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
      <soap:Body>
        <getTracking xmlns="http://tempuri.org/">
          <pAwbno>57650272784</pAwbno>
        </getTracking>
      </soap:Body>
    </soap:Envelope>`;
    let head : HttpHeaders = new HttpHeaders().set("Content-Type","text/xml");
    http.post('/api/wsutil.asmx',body,{responseType:'text', headers:head}).subscribe(resul=>console.log(resul));  
  }
}
