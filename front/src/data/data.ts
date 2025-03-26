import { IAlbum, IDate, Isong, IProduct } from "@/interfaces/index"

export const mockDates: IDate[] = [
    {
        id:1,
        time: "20:00HRS",
        date: "Abril 12, 2025",
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
        short:"Shock Value",
        subtitle:"(A Song For Syd)",
        albumOrder:1,
        link:"link",
        musicVideo:"",
        availableMusicVideo:false,
        thumbnail:"",
        description:"descript",
        album:"Purple Love Distress",
        albumId:100,
        image:"/images/resEyes.jpg",
        download:"https://www.youtube.com/@lustrabbit6136",
        listen:"https://youtu.be/exMARdJFH30",
        lyrics:"/images/q1.jpg",
        available:true,
        single:false,
        merch:false,

    },

    {
        id:2,
        short:"Pink Machine",
        subtitle:"",
        albumOrder:2,
        link:"link",
        musicVideo:"https://youtu.be/exMARdJFH30",
        availableMusicVideo:true,
        thumbnail:"/images/pinkThumb.jpg",
        description:"descript",
        album:"Purple Love Distress",
        albumId:100,
        image:"/images/pinkMaxxxine1.jpg",
        download:"https://www.youtube.com/@lustrabbit6136",
        listen:"https://youtu.be/exMARdJFH30",
        lyrics:"/images/q1.jpg",
        available:true,
        single:false,
        merch:false,

    },
    {
        id:3,
        short:"Coagula Megan Mason",
        subtitle:"",
        albumOrder:3,
        link:"link",
        musicVideo:"https://youtu.be/exMARdJFH30",
        availableMusicVideo:true,
        thumbnail:"/images/meganThumb.jpg",
        description:"descript",
        album:"Purple Love Distress",
        albumId:100,
        image:"/images/wampiro2.jpg",
        download:"https://www.youtube.com/@lustrabbit6136",
        listen:"https://youtu.be/lD10-aE8S20",
        lyrics:"/images/q1.jpg",
        available:true,
        single:false,
        merch:false,
    },
    {
        id:4,
        short:"Sueños Violentos",
        subtitle:"(Tungsteno en Depresión)",
        albumOrder:4,
        link:"link",
        musicVideo:"",
        availableMusicVideo:false,
        thumbnail:"",
        description:"descript",
        album:"Purple Love Distress",
        albumId:100,
        image:"/images/candleLight.jpg",
        download:"https://www.youtube.com/@lustrabbit6136",
        listen:"https://youtu.be/exMARdJFH30",
        lyrics:"/images/q1.jpg",
        available:true,
        single:false,
        merch:false,
    },

    {
        id:5,
        short:"Electrica",
        subtitle:"",
        albumOrder:1,
        link:"link",
        musicVideo:"",
        availableMusicVideo:false,
        thumbnail:"",
        description:"descript",
        album:"A Farewell To Hate",
        albumId:200,
        image:"/images/ptp4.jpg",
        download:"https://www.youtube.com/@lustrabbit6136",
        listen:"https://www.youtube.com/@lustrabbit6136",
        lyrics:"/images/q1.jpg",
        available:false,
        single:false,
        merch:false,
    },

    {
        id:6,
        short:"Erosadness",
        subtitle:"",
        albumOrder:2,
        link:"link",
        musicVideo:"",
        availableMusicVideo:false,
        thumbnail:"",
        description:"descript",
        album:"A Farewell To Hate",
        albumId:200,
        image:"/images/eroSad.jpg",
        download:"https://www.youtube.com/@lustrabbit6136",
        listen:"https://www.youtube.com/@lustrabbit6136",
        lyrics:"/images/q1.jpg",
        available:false,
        single:false,
        merch:false,
    },
    {
        id:7,
        short:"Cristal",
        subtitle:"",
        albumOrder:3,
        link:"link",
        musicVideo:"",
        availableMusicVideo:false,
        thumbnail:"",
        description:"descript",
        album:"A Farewell To Hate",
        albumId:200,
        image:"/images/cristal_new.jpg",
        download:"https://www.youtube.com/@lustrabbit6136",
        listen:"https://www.youtube.com/@lustrabbit6136",
        lyrics:"/images/q1.jpg",
        available:false,
        single:false,
        merch:false,
    },

    {
        id:8,
        short:"Full Death Halo",
        subtitle:"",
        albumOrder:4,
        link:"link",
        musicVideo:"",
        availableMusicVideo:false,
        thumbnail:"",
        description:"descript",
        album:"A Farewell To Hate",
        albumId:200,
        image:"/images/blackMesa.jpg",
        download:"https://www.youtube.com/@lustrabbit6136",
        listen:"https://www.youtube.com/@lustrabbit6136",
        lyrics:"/images/q1.jpg",
        available:false,
        single:false,
        merch:false,
    },
        {
            id:900,
            short:"Butcher",
            subtitle:"",
            albumOrder:1,
            link:"link",
            musicVideo:"",
            availableMusicVideo:false,
            thumbnail:"",
            description:"descript",
            album:"Butcher",
            albumId:900,
            image:"/images/protoButher.jpg",
            download:"https://www.youtube.com/@lustrabbit6136",
            listen:"https://www.youtube.com/@lustrabbit6136",
            lyrics:"/images/q1.jpg",
            available:false,
            single:true,
            merch:false,
        },
 ]

 export const purpleLove: Isong[] = mockSongs.filter(song => song.albumId === 100);

 export const farewell: Isong[] = mockSongs.filter(song => song.albumId === 200);

 export const featuredMusicVideos: Isong[] = mockSongs.filter(song => song.availableMusicVideo)

 export const mockAlbums: IAlbum[] = [
    {
        id:100,      
        title: "Purple Love Distress",
        link: "string",
        description:"string",
        songs:purpleLove,
        image:"/images/prePDS4.jpg",
        available:true,
        download:"string",
        listen:"https://youtu.be/exMARdJFH30",
        release:"14/Feb/25",
        merch:false,
    },
    {
        id:200,      
        title: "A Farwell To Hate",
        link: "string",
        description:"string",
        songs:farewell,
        image:"/images/periHazeLite2.jpg",
        available:false,
        download:"string",
        listen:"string",
        release:"30/May/25",
        merch:false,
    },

 ]

 export const mockMerch: IProduct[] = [
    {
        id:1801 ,
        name: "Playera Logo (Roja)" ,
        short:"Logo Rojo" ,
        long: "Playera" ,
        price: "$300 MXN",
        description:"ola" ,
        category:"shirt",
        link:"www.google.com",
        image:"/images/imgMockLogoShirtRed.jpg",
        stock:1,
        available:false,
    },

    {
        id:1802 ,
        name: "Playera Logo (Morada)" ,
        short:"Logo Morado" ,
        long: "Playera" ,
        price: "$250 MXN" ,
        description:"ola" ,
        category:"shirt",
        link:"www.google.com",
        image:"/images/imgMockLogoShirtPurp.jpg",
        stock:1,
        available:false,
    },

    {
        id:1803 ,
        name: "Playera Logo (Blanca)" ,
        short:"Logo Blanco" ,
        long: "Playera" ,
        price: "$250 MXN" ,
        description:"ola" ,
        category:"shirt",
        link:"www.google.com",
        image:"/images/imgMockLogoShirtWhite.jpg",
        stock:1,
        available:false,
    },

    {
        id:1804,
        name: "Purple Love CD" ,
        short:"Purple Love Distress" ,
        long: "CD" ,
        price: "$189 MXN" ,
        description:"ola" ,
        category:"cd",
        link:"www.google.com",
        image:"/images/imgMockPurpleLove.jpg",
        stock:1,
        available:false,
    },
    {
        id:1805,
        name: "Farewell CD" ,
        short:"A Farewell To Hate" ,
        long: "CD" ,
        price: "$189 MXN" ,
        description:"ola" ,
        category:"cd",
        link:"www.google.com",
        image:"/images/imgMockFarewell.jpg",
        stock:1,
        available:false,
    },

    {
        id:1806,
        name: "Print Butcher" ,
        short:"Butcher" ,
        long: "Print" ,
        price: "$125 MXN" ,
        description:"ola" ,
        category:"cd",
        link:"www.google.com",
        image:"/images/imgMockBucthPrint.jpg",
        stock:1,
        available:false,
    },
    
 ]

 export const featuredMerch: IProduct[] = mockMerch.filter(product => product.id === 1804 || 1803)
