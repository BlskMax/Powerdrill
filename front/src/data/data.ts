import { IAlbum, IDate, Isong } from "@/interfaces/index"

export const mockDates: IDate[] = [
    {
        id:1,
        time: "20:00HRS",
        date: "Noviembre 23, 2024",
        location: "Blvd. Juarez 302, Cuernavaca Centro",
        venue:"El cabaré",
        name: "Cuernavaca, Morelos",
        link: "https://wa.me/525570680017",
        available: true,
    },
    {
        id:1,
        time: "20:00HRS",
        date: "Noviembre 23, 2024",
        location: "Blvd. Juarez 302, Cuernavaca Centro",
        venue:"El cabaré",
        name: "Cuernavaca, Morelos",
        link: "https://wa.me/525570680017",
        available: false,
    },
    
 ]

 export const mockSongs: Isong[] = [
    {
        id:1,
        short:"Pink Machine",
        subtitle:"",
        link:"link",
        description:"descript",
        album:"My Loveless Valentine",
        image:"/images/pinkMaxxxine1.jpg",
        download:"https://www.youtube.com/@lustrabbit6136",
        listen:"https://www.youtube.com/@lustrabbit6136",
        lyrics:"/images/q1.jpg",
        available:false,

    },
    {
        id:2,
        short:"Sueños Violentos",
        subtitle:"(Tungsteno en Depresión)",
        link:"link",
        description:"descript",
        album:"BIG 4",
        image:"/images/candleLight.jpg",
        download:"https://www.youtube.com/@lustrabbit6136",
        listen:"https://www.youtube.com/@lustrabbit6136",
        lyrics:"/images/q1.jpg",
        available:false,
    },
    {
        id:4,
        short:"Shock Value",
        subtitle:"(A Song For Syd)",
        link:"link",
        description:"descript",
        album:"BIG 4",
        image:"/images/resEyes.jpg",
        download:"https://www.youtube.com/@lustrabbit6136",
        listen:"https://www.youtube.com/@lustrabbit6136",
        lyrics:"/images/q1.jpg",
        available:false,

    },
    {
        id:5,
        short:"Coagula Megan Mason",
        subtitle:"",
        link:"link",
        description:"descript",
        album:"BIG 4",
        image:"/images/angelito.jpg",
        download:"https://www.youtube.com/@lustrabbit6136",
        listen:"https://www.youtube.com/@lustrabbit6136",
        lyrics:"/images/q1.jpg",
        available:false,
    },
 ]

 export const purpleLove: Isong[] = [
    {
        id:1,
        short:"Pink Machine",
        subtitle:"",
        link:"link",
        description:"descript",
        album:"My Loveless Valentine",
        image:"/images/pinkMaxxxine1.jpg",
        download:"https://www.youtube.com/@lustrabbit6136",
        listen:"https://www.youtube.com/@lustrabbit6136",
        lyrics:"/images/q1.jpg",
        available:false,

    },
    {
        id:2,
        short:"Sueños Violentos",
        subtitle:"(Tungsteno en Depresión)",
        link:"link",
        description:"descript",
        album:"BIG 4",
        image:"/images/candleLight.jpg",
        download:"https://www.youtube.com/@lustrabbit6136",
        listen:"https://www.youtube.com/@lustrabbit6136",
        lyrics:"/images/q1.jpg",
        available:false,
    },
    {
        id:3,
        short:"Shock Value",
        subtitle:"(A Song For Syd)",
        link:"link",
        description:"descript",
        album:"BIG 4",
        image:"/images/resEyes.jpg",
        download:"https://www.youtube.com/@lustrabbit6136",
        listen:"https://www.youtube.com/@lustrabbit6136",
        lyrics:"/images/q1.jpg",
        available:false,

    },
    {
        id:4,
        short:"Coagula Megan Mason",
        subtitle:"",
        link:"link",
        description:"descript",
        album:"BIG 4",
        image:"/images/angelito.jpg",
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
        image:"/images/afterHaze3.jpg",
        available:false,
        download:"string",
        listen:"string",
        release:"14/Feb/25"
    },
 ]

