'use client'
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { mockSongs } from "../../../../public/data";
import styles from "@/components/backgrounds/Backgrounds.module.css"
import { Isong } from "@/interfaces";

const SongDetailPage = () => {
    const { id } = useParams(); 
    const [song, setSong] = useState <Isong | null>(null);
    
    useEffect(() => {
        if (id) {
            const songDetail = mockSongs.find((song) => song.id === Number(id));
            
            if (songDetail) {
                setSong(songDetail);
            } else {
                console.error("song not found");
            }
        }
    }, [id]);

    return (
        <main className={styles.fondo}>
            <section className="w-screen h-screen">
                <h1 className="mt-[24vh]">ola</h1>
                {/* Validación para asegurarte de que song no es null antes de mostrar su título */}
                {song ? (
                    <p>{song.title}</p>
                ) : (
                    <p>Song not found</p>
                )}
            </section>
        </main>
    );
};

export default SongDetailPage;
