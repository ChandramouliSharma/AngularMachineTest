import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SaleteamService } from 'src/app/shared/saleteam.service';

@Component({
  selector: 'app-saleteam',
  templateUrl: './saleteam.component.html',
  styleUrls: ['./saleteam.component.css']
})
export class SaleteamComponent implements OnInit {

  constructor(public saleService:SaleteamService,private toastrService:ToastrService,
    private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {}

  onSubmit(form:NgForm)
  {
    console.log(form.value);

    let addId=this.saleService.formData.VisitId;
    //insert
    if(addId==0 || addId==null)
    {
      this.insertVisitRecord(form);
    }
    else
    {
      //update
      console.log("Updating record...");
      this.updateVisitRecord(form);
    }
    
  }
    //clear all contents at initialization
    resetForm(form?:NgForm){
      if(form != null){
        form.resetForm();
      }
    }
    
    //defining insert record
    insertVisitRecord(form?:NgForm)
    {
      console.log("Inserting a record...");
      this.saleService.insertVisit(form.value).subscribe(
        (result)=>{
          console.log(result);
          this.resetForm(form);
        }
      );
      window.location.reload();
    }
    //defining update record
    updateVisitRecord(form?:NgForm)
    {
      this.saleService.updateVisit(form.value).subscribe(
      (result)=>{
        console.log(result);
        this.resetForm(form);
      }
      );
      window.location.reload();
    }

}
