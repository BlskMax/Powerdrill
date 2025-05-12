

interface IDate {
    id: number;
    time: string;
    date: string;
    location: string;
    venue:string;
    name: string;
    link: string;
    available:boolean;
    purchaseLinkAvailable:boolean;
    PurchaseLink:string;
}

interface IDateProps {
    ticket: IDate;
}

interface IDateListProps {
    tickets: IDate[];
}

interface IDateFeatured {
    id: number;
    time: string;
    date: string;
    location: string;
    venue:string;
    name: string;
    link: string;
    available:boolean;
}

interface Isong {
    id:number;
    short:string;
    subtitle: string;
    albumOrder:number;
    link: string;
    musicVideo:string;
    availableMusicVideo:boolean;
    thumbnail:string;
    videoType:string;
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

interface IPicture {
    id:number;
    name:string;
    type:string;
    photoDir:string;
}

interface IPictureProps {
    picture:IPicture;
}

interface IPictureListProps {
    pictures:IPicture[];
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
    IPicture,
    IPictureProps,
    IPictureListProps,
}

