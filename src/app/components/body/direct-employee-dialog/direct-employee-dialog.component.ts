import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-direct-employee-dialog',
  templateUrl: './direct-employee-dialog.component.html',
  styleUrls: ['./direct-employee-dialog.component.css']
})
export class DirectEmployeeDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DirectEmployeeDialogComponent>) {
  }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
