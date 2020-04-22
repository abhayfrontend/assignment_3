import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpBackend } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
@Injectable({
  providedIn: 'root',
})
export class FcmService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'key = AAAAYHBeiJU:APA91bGjHHhLr7Vb-9NOXwRL9xLWiu4IxQB-TNOGgYhDxOasRT9jZZIW7l780O1VPq4rWX_Ak75FUbjObzh45CBnqfYV8oq_NhC_-EQRgJaoayYqwhZjj6wRAxG_dRHEiZnXJP1OBPpW',
    }),
  };
  private http: HttpClient;
  constructor(handler: HttpBackend) {
    this.http = new HttpClient(handler);
  }




  sendPushNotification(fcm): Observable<any> {
    const url = 'https://fcm.googleapis.com/fcm/send';
    return this.http.post(url, fcm, this.httpOptions);
  }
}