import { Component, OnInit } from '@angular/core';

@Component ({
     selector : 'app-editha' ,
     templateUrl : './editha.component.html' ,
     styleUrls : [ './editha.component.scss' ]
})
export class EdithaComponent implements OnInit {

     public mail = "brunoeditha90@gmail.com" ;

     public laptop : any = [
          {
               photo : "data :https://cdn.mos.cms.futurecdn.net/QMa729pgead8uFrroav5f5-650-80.jpg.webp " ,
               name : " Apple MacBook Pro (13-inch, M1" ,
               specs : "CPU: Apple M1  GPU: Apple M1 GPURAM: 16GB Storage: 1TB  Display: 13.3-inches, 1600  Size: 12 x 8.4 x 0.6 inches  Weight: 3 pounds" ,
               price : "US$2,099.99" ,
          },
          {
               photo : "data :image/jpeg;https://cdn.mos.cms.futurecdn.net/QN5ikoE4ECLKwW3NFXaK47-650-80.jpeg.webp",
               name : "Acer Swift 3 (Late 2021)" ,
               specs : "CPU: Intel Core i7-1165G7  GPU: Integrated Intel Iris Xe Graphics  RAM: 16GB Storage:512GB SSD  Display: 14-inch, 1080p Size: 12.7 x. 8.6 x 0.6 inches Weight: 2.6 pounds" ,
               price : "US$1,003" ,
          },
          {
               photo : "data : image/jpeg;https://cdn.mos.cms.futurecdn.ne/TAnZfuBEsLXH4UzTUr57f7-650-80.jpg.webp" ,
               name : "Dell XPS 13 2-in-1" ,
               specs : " CPU: Intel Core i7-1165G7  GPU: Intel Iris Xe Graphics  RAM: 16GB  Storage: 512GB SSD  Display: 13.4-inch, 1200  Size : 11.6 x 7.8 x 0.6 inches  Weight: 2.9 pounds" ,
               price : "US$2,053" ,
          },
         {
               photo : "data : image/jpeg;https://cdn.mos.cms.futurecdn.net/Bjz9rakzK69gMqKcJfsycF-650-80.jpeg.webp" ,
               name : "Acer Chromebook Spin 713 (2021)" ,
               specs : "CPU: Intel Core i5-1135G7  GPU: Intel Iris Xe Graphics  RAM: 8GB  Storage: 256GB SSD  Display: 13.5 inches, 1504p  Size: 11.8 x 9.3 x 0.7 inches  Weight: 3.2 pounds" ,
               price : "US$499" ,
         }
        {
               photo : "data : image/jpeg;https://cdn.mos.cms.futurecdn.net/rvZMp6ZXyNyfL5bRVc39i3-650-80.jpeg.webp" ,
               name : "Asus Zenbook 13 (UX325) OLED" ,
               specs : "CPU: Intel Core i7-1165G7  GPU: Intel Iris Xe Graphics  RAM: 16GB  Storage: 512GB SSD  Display: 13.3-inch, 1080p  Size: 11.9 x 8 x 0.6 inches  Weight: 2.5 pounds" ,
               price : "US$1,549.99" ,
          },
         {
               photo : "data : image/jpeg;https://cdn.mos.cms.futurecdn.net/LZWqZbr3no4PgyXp6nstFX-650-80.jpg.webp " ,
               name : "HP Envy 13 (2021)" ,
               specs : "CPU: Intel Core i5-1135G7  GPU: Iris Xe Graphics  RAM: 16GBStorage: 256GB SSD  Display: 13.3-inch, 1080p  Size: 12.1 x 7.7 x 0.7 inches  Weight: 2.9 pounds" ,
               price : " US$899" ,
          }
     ]

     contructor() { }
     ngOnInit() : void {
     }

}
