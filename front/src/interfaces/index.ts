

interface IDate {
    id: number;
    time: string;
    date: string;
    location: string;
    venue:string;
    name: string;
    link: string;
    available:boolean;
}

interface IDateProps {
    ticket: IDate;
}

interface IDateListProps {
    tickets: IDate[];
}

interface Isong {
    id:number;
    short:string;
    subtitle: string;
    albumOrder:number;
    link: string;
    description:string;
    album:string;
    albumId:number;
    image:string;
    download:string;
    listen:string;
    lyrics:string;
    available: boolean;
    single:boolean;
    merch:boolean;
}

interface IsongProps {
    song: Isong;
}

interface ISongListProps {
    songs: Isong[];
}


interface IAlbum {
    id:number;
    title: string;
    link: string;
    description:string;
    songs:Isong[];
    image:string;
    available:boolean;
    download:string;
    listen:string;
    release:string;
    merch:boolean,
}

interface IAlbumProps {
    album: IAlbum;
}

interface IAlbumListProps {
    albums: IAlbum[];
}


interface IProduct {
    id:number;
    name:string;
    short:string;
    long: string;
    price:string;
    description:string;
    category:string;
    link:string;
    image:string;
    stock:number;
    available:boolean;
}

interface IProductProps {
    product: IProduct;
}

interface IProductListProps {
    products: IProduct[];
}


export type {
    IDate,
    IDateListProps,
    IDateProps,
    Isong,
    IsongProps,
    ISongListProps,
    IAlbum,
    IAlbumProps,
    IAlbumListProps,
    IProduct,
    IProductProps,
    IProductListProps,
}

