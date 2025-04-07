import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map, Observable, startWith } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
 
  candidateOptions:any[]= [
    { name: 'Harshal' }, { name: 'Abhi' }, { name: 'Roshan' }, { name: 'Jay' }
    ];

    filteredOptions!:Observable<any[]>;
    myControl = new FormControl(''); 

    ngOnInit(): void {
      this.filteredOptions = this.myControl.valueChanges.pipe(
        startWith(''),
        map(value => this._filter(value||''))
      )
    }
    
    displayOptions(item:any){
      return item?item.name:undefined;
    }

    private _filter(value:string):string[] {
     const filteredValue = value.toLowerCase();
     return this.candidateOptions.filter(option => option.name.toLowerCase().includes(filteredValue));
    }


  
}
