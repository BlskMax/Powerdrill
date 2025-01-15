import { IAlbum, IDate, Isong } from "@/interfaces/index"

export const mockDates: IDate[] = [
    {
        id:1,
        time: "20:00HRS",
        date: "Noviembre 23",
        location: "Boulverard Juarez 302, Cuernavaca Centro",
        name: "Cuernavaca, Morelos",
        link: "https://wa.me/525570680017",
        available: false,
    },
    
 ]

 export const mockSongs: Isong[] = [
    {
        id:1,
        title:"Pink Machine",
        link:"link",
        description:"descript",
        album:"My Loveless Valentine",
        image:"/images/pinkMaxxxine1.jpg",
        download:"https://www.youtube.com/@lustrabbit6136",
        listen:"https://www.youtube.com/@lustrabbit6136",
        lyrics:"/images/mausan.jpg",
        available:false,

    },
    {
        id:2,
        title:"Sueños Violentos (Tungsteno en Depresión)",
        link:"link",
        description:"descript",
        album:"BIG 4",
        image:"/images/sonica.jpg",
        download:"https://www.youtube.com/@lustrabbit6136",
        listen:"https://www.youtube.com/@lustrabbit6136",
        lyrics:"/images/mausan.jpg",
        available:false,
    },
    {
        id:3,
        title:"Eléctrica",
        link:"link",
        description:"descript",
        album:"BIG 4",
        image:"/images/drill.jpg",
        download:"https://www.youtube.com/@lustrabbit6136",
        listen:"https://www.youtube.com/@lustrabbit6136",
        lyrics:"/images/mausan.jpg",
        available:false,
    },
    {
        id:4,
        title:"Shock Value (A Song For Syd)",
        link:"link",
        description:"descript",
        album:"BIG 4",
        image:"/images/disco.png",
        download:"https://www.youtube.com/@lustrabbit6136",
        listen:"https://www.youtube.com/@lustrabbit6136",
        lyrics:"/images/mausan.jpg",
        available:false,

    },
    {
        id:5,
        title:"Coagula Megan Mason",
        link:"link",
        description:"descript",
        album:"BIG 4",
        image:"/images/protocoagula2.jpg",
        download:"https://www.youtube.com/@lustrabbit6136",
        listen:"https://www.youtube.com/@lustrabbit6136",
        lyrics:"/images/q1.jpg",
        available:false,
    },
 ]

 export const purpleLove: Isong[] = [
    {
        id:1,
        title:"Pink Machine",
        link:"link",
        description:"descript",
        album:"My Loveless Valentine",
        image:"/images/pinkMaxxxine1.jpg",
        download:"https://www.youtube.com/@lustrabbit6136",
        listen:"https://www.youtube.com/@lustrabbit6136",
        lyrics:"/images/mausan.jpg",
        available:false,

    },
    {
        id:2,
        title:"Sueños Violentos (Tungsteno en Depresión)",
        link:"link",
        description:"descript",
        album:"BIG 4",
        image:"/images/sonica.jpg",
        download:"https://www.youtube.com/@lustrabbit6136",
        listen:"https://www.youtube.com/@lustrabbit6136",
        lyrics:"/images/mausan.jpg",
        available:false,
    },
    {
        id:3,
        title:"Eléctrica",
        link:"link",
        description:"descript",
        album:"BIG 4",
        image:"/images/drill.jpg",
        download:"https://www.youtube.com/@lustrabbit6136",
        listen:"https://www.youtube.com/@lustrabbit6136",
        lyrics:"/images/mausan.jpg",
        available:false,
    },
    {
        id:4,
        title:"Shock Value (A Song For Syd)",
        link:"link",
        description:"descript",
        album:"BIG 4",
        image:"/images/disco.png",
        download:"https://www.youtube.com/@lustrabbit6136",
        listen:"https://www.youtube.com/@lustrabbit6136",
        lyrics:"/images/mausan.jpg",
        available:false,

    },
    {
        id:5,
        title:"Coagula Megan Mason",
        link:"link",
        description:"descript",
        album:"BIG 4",
        image:"/images/protocoagula2.jpg",
        download:"https://www.youtube.com/@lustrabbit6136",
        listen:"https://www.youtube.com/@lustrabbit6136",
        lyrics:"/images/q1.jpg",
        available:false,
    },
]

 export const mockAlbums: IAlbum[] = [
    {
        id:100,      
        title: "Purple Love Distress",
        link: "string",
        description:"string",
        songs:purpleLove,
        image:"/images/valConcept1.jpg",
        available:false,
        download:"string",
        listen:"string",
        release:"14/Feb/25"
    },
 ]

