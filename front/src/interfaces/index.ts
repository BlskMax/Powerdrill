import React from "react";

interface IDate {
    id: number;
    time: string;
    date: string;
    location: string;
    name: string;
    link: string;
}

interface IDateProps {
    ticket: IDate;
}

interface IDateListProps {
    tickets: IDate[];
}

interface Isong {
    id:number;
    title: string;
    link: string;
    description:string;
    album:string;
    image:string;
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

