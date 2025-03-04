

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
}

interface IAlbumProps {
    album: IAlbum;
}

interface IAlbumListProps {
    albums: IAlbum[];
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
    IAlbumListProps
}

