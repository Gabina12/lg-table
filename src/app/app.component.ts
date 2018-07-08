import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  dataSource = [
    {FirstName: 'ლაშა', LastName: 'გაბინაშვილი', Age: 25, Gender: 1},
    {FirstName: 'თამარ', LastName: 'ტერმაკოზაშვილი', Age: 24, Gender: 0},
    {FirstName: 'გიორგი', LastName: 'გაბინაშვილი', Age: 22, Gender: 1},
    {FirstName: 'ვაჟა', LastName: 'დიდმანიძე', Age: -9, Gender: 1},
    {FirstName: 'ზაზა', LastName: 'ზუბიაშვილი', Age: 21, Gender: 1},
    {FirstName: 'ჰურა', LastName: 'ბერიკაშვილი', Age: -1, Gender: 1}
  ]

  columns = [
    {label: 'სახელი', name: 'FirstName', allowFilter: true},
    {label: 'გვარი', name: 'LastName', allowFilter: true},
    {label: 'ასაკი', name: 'Age', allowFilter: true},
    {label: 'სქესი', name: 'Gender', allowFilter: true}
  ]

}
