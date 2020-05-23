import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { from,Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {
  //url1 = "https://cors-anywhere.herokuapp.com/";
  url1 = "https://api.codetabs.com/v1/proxy?quest=";

  url2 = "https://sistemas.sefaz.am.gov.br/nfceweb/consultarNFCe.jsp?p=13200500835261000555650550001005601007172695";


  constructor(
    private http: HttpClient
  ) {

  }

  get() {
    return this.http.get(
      this.url1+this.url2,{
        headers:{
          "Connection":"keep-alive",
          "User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.138 Safari/537.36",
          "Accept":"*/*",
          "Sec-Fetch-Site":"cross-site",
          "Sec-Fetch-Mode":"cors",
          "Host":"cors-anywhere.herokuapp.com"
        },
        reportProgress:true,
        responseType:"text"
      }

    )


    // return from(
    //   fetch(
    //     'http://sistemas.sefaz.am.gov.br/nfceweb/consultarNFCe.jsp?p=13200500835261000555650550001005601007172695', // the url you are trying to access
    //     {
    //       headers: {
    //         'Connection': 'keep-alive',
    //       },
    //       method: 'GET', // GET, POST, PUT, DELETE
    //       mode: 'no-cors' // the most important option
    //     }
    //   ));
  }

}
