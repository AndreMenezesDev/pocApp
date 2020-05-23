import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner/ngx';
import { ApplicationService } from '../services/application.service';


@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {

  qrData = null;
  createdCode = null;
  scannedCode= null;
  barOption: BarcodeScannerOptions;

  compras = new comprasVM;

  constructor(
    private activatedRoute: ActivatedRoute,
    private barcodeScanner: BarcodeScanner,
    private applicatioService: ApplicationService

    ) {

    }

  ngOnInit() {

  }

  createCode(){
    this.createdCode = this.qrData;
  }

  scanCode(){
    this.barOption = {
      showTorchButton: true,

    }
    //this.barcodeScanner.scan(this.barOption).then(barcodeData => {
      //this.scannedCode = barcodeData.text;
      this.scannedCode = "https://sistemas.sefaz.am.gov.br/nfceweb/consultarNFCe.jsp?p=13200500835261000555650550001005601007172695";
      this.processarUrl(this.scannedCode);
    //})
  }
  processarUrl(url: string) {
      let that = this;
      this.applicatioService.get().subscribe((res:string)=>{
        let parse = new DOMParser();
        let parsedHtml = parse.parseFromString(res,'text/html');
        let items = parsedHtml.querySelectorAll("tr");
        let listaProd = [];
        let that=this;
        let produto = [];
        let dados = [];
        let produtos = items.forEach((item)=>{
          if (item.id.includes("Item +")){
            listaProd.push(item);
            item.childNodes.forEach(campo => {
              dados.push(campo.textContent);
            });
            produto.push(dados);
            dados = [];
          }
        })
        let a = 0;

        this.compras.total = listaProd.length;


      });


  }

}

class comprasVM{
  total:number;
  lista: produtosVM[];
}

class produtosVM{
  codigo: string;
  descricao: string;
  qtde: number;
  unidade: string;
  valorUnitario: number;
  valorTotal: number;
}