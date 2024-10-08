import React from "react";

interface IDate {
    id: number;
    time: string;
    date: string;
    location: string;
    name: string;
    link: string;
}

interface IDateListProps {
    tickets: IDate[];
}

interface IDateProps {
    ticket: IDate;
}

export type {
    IDate,
    IDateListProps,
    IDateProps,
}