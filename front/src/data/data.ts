import { IAlbum, IDate, Isong } from "@/interfaces/index"

export const mockDates: IDate[] = [
    {
        id:1,
        time: "20:00HRS",
        date: "Noviembre 23",
        location: "Boulverard Juarez 302, Cuernavaca Centro",
        name: "Cuernavaca, Morelos",
        link: "https://wa.me/525570680017",
    },

    {
        id:2,
        time: "20:00HRS",
        date: "marzo 8",
        location: "GATO CALAVERA XOLA #114 Col.alamos",
        name: "Benito juárez, cdmx",
        link: "https://www.ticketmaster.com.mx/",
    },
    {
        id:1,
        time: "20:00HRS",
        date: "FEBRERO 32",
        location: "MALAIDEA, MEDELLIN #143 COL.ROMA",
        name: "cuauhtémoc, cdmx",
        link: "https://wa.me/525570680017",
    },
 ]

 export const mockSongs: Isong[] = [
    {
        id:1,
        title:"Foreign Friends",
        link:"link",
        description:"descript",
        album:"BIG 4",
        image:"/images/mausan.jpg",
        download:"https://www.youtube.com/@lustrabbit6136",
        listen:"https://www.youtube.com/@lustrabbit6136",

    },
    {
        id:2,
        title:"Sónicamente",
        link:"link",
        description:"descript",
        album:"BIG 4",
        image:"/images/sonica.jpg",
        download:"https://www.youtube.com/@lustrabbit6136",
        listen:"https://www.youtube.com/@lustrabbit6136",
    },
    {
        id:3,
        title:"Zafiro Drive",
        link:"link",
        description:"descript",
        album:"BIG 4",
        image:"/images/drill.jpg",
        download:"https://www.youtube.com/@lustrabbit6136",
        listen:"https://www.youtube.com/@lustrabbit6136",
    },
    {
        id:4,
        title:"Shock Value",
        link:"link",
        description:"descript",
        album:"BIG 4",
        image:"/images/disco.png",
        download:"https://www.youtube.com/@lustrabbit6136",
        listen:"https://www.youtube.com/@lustrabbit6136",

    },
    {
        id:5,
        title:"Butcher",
        link:"link",
        description:"descript",
        album:"BIG 4",
        image:"/images/butcher.jpg",
        download:"https://www.youtube.com/@lustrabbit6136",
        listen:"https://www.youtube.com/@lustrabbit6136",
    },
    {
        id:6,
        title:"Quagula Megan Mason",
        link:"link",
        description:"descript",
        album:"BIG 4",
        image:"/images/papersP.png",
        download:"https://www.youtube.com/@lustrabbit6136",
        listen:"https://www.youtube.com/@lustrabbit6136",
    },
    {
        id:7,
        title:"Sueños Violentos",
        link:"link",
        description:"descript",
        album:"BIG 4",
        image:"/images/papersP.png",
        download:"https://www.youtube.com/@lustrabbit6136",
        listen:"https://www.youtube.com/@lustrabbit6136",
    },
    {
        id:8,
        title:"Ultima Midnight",
        link:"link",
        description:"descript",
        album:"BIG 4",
        image:"/images/papersP.png",
        download:"https://www.youtube.com/@lustrabbit6136",
        listen:"https://www.youtube.com/@lustrabbit6136",
    },
    {
        id:9,
        title:"Cristal",
        link:"link",
        description:"descript",
        album:"BIG 4",
        image:"/images/papersP.png",
        download:"https://www.youtube.com/@lustrabbit6136",
        listen:"https://www.youtube.com/@lustrabbit6136",
    },
 ]

 export const big4: Isong[] = [
    {
        id:1,
        title:"Foreign Friends",
        link:"link",
        description:"descript",
        album:"album",
        image:"/images/mausan.jpg",
        download:"none",
        listen:"none",

    },
    {
        id:2,
        title:"sonicamente",
        link:"link",
        description:"descript",
        album:"album",
        image:"/images/sonica.jpg",
        download:"none",
        listen:"none",
    },
    {
        id:3,
        title:"ZAFIRO DRIVE",
        link:"link",
        description:"descript",
        album:"album",
        image:"/images/drill.jpg",
        download:"none",
        listen:"none",
    },
    {
        id:4,
        title:"SHCOK VALUE",
        link:"link",
        description:"descript",
        album:"album",
        image:"/images/disco.png",
        download:"none",
        listen:"none",

    },
]

 export const mockAlbums: IAlbum[] = [
    {
        id:1,      
        title: "BIG 4",
        link: "string",
        description:"string",
        songs:big4,
        image:"/images/drill.jpg",
    },
 ]

