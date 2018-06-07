import { Component } from '@angular/core';
import { DataTableResource } from 'angular-4-data-table';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  persons = [
    { 'name': 'Aaron 2Moore', 'email': 'Heath44@hotmail.com', 'jobTitle': 'Regional Configuration Producer',
      'active': true, 'phoneNumber': '611-898-6201', 'date': '2015-11-06T07:21:25.510Z' },
    { 'name': 'Yvonne Conroy Mrs.', 'email': 'Gideon9@yahoo.com', 'jobTitle': 'Global Mobility Orchestrator',
      'active': false, 'phoneNumber': '115-850-0969', 'date': '2014-12-20T00:48:40.276Z' },
    { 'name': 'Laron Padberg', 'email': 'Laney_Huels@hotmail.com', 'jobTitle': 'Senior Directives Supervisor',
      'active': false, 'phoneNumber': '632-654-3034', 'date': '2015-09-29T04:33:38.544Z' },
    { 'name': 'Dr. Maryam Spinka', 'email': 'Aletha.Labadie@hotmail.com', 'jobTitle': 'Dynamic Mobility Associate',
      'active': true, 'phoneNumber': '547-345-0067', 'date': '2015-09-23T01:13:39.320Z' },
    { 'name': 'Kiley Baumbach', 'email': 'Rogelio24@hotmail.com', 'jobTitle': 'Principal Metrics Orchestrator',
      'active': true, 'phoneNumber': '958-524-5164', 'date': '2014-12-05T23:39:27.340Z' },
    { 'name': 'Hollis MacGyver', 'email': 'Yazmin.Heidenreich97@gmail.com', 'jobTitle': 'Direct Markets Assistant',
      'active': true, 'phoneNumber': '603-607-3241', 'date': '2015-02-12T10:40:52.977Z' },
    { 'name': 'Axel McLaughlin', 'email': 'Deon_Heaney@gmail.com', 'jobTitle': 'Forward Mobility Architect',
      'active': false, 'phoneNumber': '983-639-0705', 'date': '2015-03-01T02:28:26.030Z' },
    { 'name': 'Ricardo Botsford', 'email': 'Melisa73@yahoo.com', 'jobTitle': 'Direct Quality Consultant',
      'active': true, 'phoneNumber': '408-082-9480', 'date': '2015-01-31T03:41:54.611Z' },
    { 'name': 'Corbin Funk Mrs.', 'email': 'Marjory.Morissette51@gmail.com', 'jobTitle': 'Human Configuration Manager',
      'active': true, 'phoneNumber': '386-937-8683', 'date': '2014-12-05T15:07:36.843Z' },
    { 'name': 'Rosalind Paucek', 'email': 'Ivy_Stanton@gmail.com', 'jobTitle': 'Future Creative Supervisor',
      'active': true, 'phoneNumber': '977-661-7403', 'date': '2015-06-10T17:42:38.644Z' },
    ];
  itemResource = new DataTableResource(this.persons);

  items = [];
  itemCount = 0;

  str = 'Description';
  namefiltre = '';
  currentRow;

  presence = [];

  constructor() {
    this.itemResource.count().then(count => this.itemCount = count);
    this.presence = this.persons;
    this.rowColors = this.rowColors.bind(this);
    console.log(this.persons);
    alert('Persons');
  }

  reloadItems(params) {
    //alert('Reload')
    this.itemResource.query(params).then(items => this.items = items);
  }

  // special properties:

  rowClick(rowEvent) {
    //console.log(rowEvent.row.index);
    this.currentRow = rowEvent.row.index;
  }

  rowDoubleClick(rowEvent) {
    //alert('Double clicked: ' + rowEvent.row.item.name);
  }

  rowTooltip(item) { return item.jobTitle; }

  FieldsChange(values: any) {
    //console.log(this.currentRow + ' ' + values.currentTarget.checked);
    this.presence[this.currentRow]['Present'] = values.currentTarget.checked
    //console.log(this.presence[this.currentRow]);
  }

  test(value) {
    //console.log(this.currentRow + ' ' +value);
    this.presence[this.currentRow]['Description'] = value;
  }

  save() {
    var x = 0;
    this.presence.forEach(element => {
      console.log('Etudiant N' + x + '   Present: ' + element.Present + '   Description ' + element.Description);
      //========> Call create Service Presence
      x++;
    });
  }


  rowColors(Etudiant) {

    if (this.namefiltre != "" && (Etudiant.name.indexOf(this.namefiltre) != -1) || (Etudiant.phoneNumber.indexOf(this.namefiltre) != -1)) { return 'rgb(255, 255, 197)'; };
  }
}
