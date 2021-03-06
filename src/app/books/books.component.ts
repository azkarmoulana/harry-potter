import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  books = [
    {
       "name": "Harry Potter and the Philosopher's Stone",
       "imagePath":"https://vignette.wikia.nocookie.net/harrypotter/images/7/7b/Harry01english.jpg/revision/latest?cb=20150208225304"

    },
    {
       "name": "Harry Potter and the Chamber of Secrets",
       "imagePath":"https://images.gr-assets.com/books/1474169725l/15881.jpg"
    },
    {
       "name": "Harry Potter and the Prisoner of Azkaban",
       "imagePath":"https://vignette3.wikia.nocookie.net/harrypotter/images/1/11/Prisoner_of_Azkaban_cover.jpg/revision/latest?cb=20070328184627"
    },
    {
       "name": "Harry Potter and the Goblet of Fire",
       "imagePath":"https://images-na.ssl-images-amazon.com/images/I/51gR-u2VnlL.jpg"

    },
    {
       "name": "Harry Potter and the Order of the Phoenix",
       "imagePath":"https://vignette.wikia.nocookie.net/what-you-love/images/5/5d/Harry_Potter_And_The_Order_Of_The_Phoenix.jpeg/revision/latest?cb=20150330170917"

    },
    {
       "name": "Harry Potter and the Half-Blood Prince",
       "imagePath":"https://hpmedia.bloomsbury.com/rep/s/9781408855942_309034.jpeg"

    },
    {
       "name": "Harry Potter and the Deathly Hallows",
       "imagePath":"https://images.gr-assets.com/books/1474171184l/136251.jpg"

    }
]

  constructor() { }

  ngOnInit() {
  }

}
