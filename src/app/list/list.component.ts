import { Component, OnInit, ViewChild } from '@angular/core';
import { ListService } from './list.service'
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Input } from '@angular/core';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @ViewChild('content', { static: false }) private content;

  data: any = [];
  filteredData=[]
  bankitem={};
  totalRecords:number;
  p: number = 1;
  itemKeys=[];
  loader:any;

  constructor(private _service: ListService,
    private modalService: NgbModal) { }

  ngOnInit(): void {
    this.loader=true;
    this._service.getList('DELHI').subscribe((res: any) => {
      this.data = res
      this.filteredData=res
      this.totalRecords=res.length
      this.loader=false;
    })

  }
  //change city method
  selecteCity(event) {
    this.loader=true;
    this._service.getList(event.target.value).subscribe((res: any) => {
      this.data = res
      this.filteredData=res
      this.totalRecords=res.length
      this.loader=false;
    })
  }

  //popup method
  onSubmit(item) {
    this.bankitem = item;
    this.itemKeys=Object.keys(item)
    this.modalService.open(this.content);

  }
  open() {
    this.modalService.open(this.content);
  }


  //filter branch
  filterbranch(event){
    let value = event.target.value;
  
    if (value.length > 3) {

      this.filteredData = this.data.filter((item) => {
        if (item.branch.toLowerCase().match(value.toLowerCase()))  {
          return item;
        }
      })
    }
this.totalRecords=this.filteredData.length
  }

  //filter address
  filteraddress(event){

    let value = event.target.value;
  
    if (value.length > 3) {
      this.filteredData = this.data.filter((item) => {
        if (item.address.toLowerCase().match(value.toLowerCase()))  {
          return item;
        }
      })
    }
    this.totalRecords=this.filteredData.length
  }


} 
