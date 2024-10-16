import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { mockSongs } from "../../../public/data";
import { useRouter } from "next/router";

const SongDetailPage = () => {
    const router = useRouter();
    const {id} = router.query;
    const [song, setSong] = useState(null);

    useEffect(() => {
        if (id) {
            const songDetail = mockSongs.find((song) => song.id ===Number(id));
            setSong(songDetail);
        }
    }, [id])

    return (
        <main>
            <h1>{song.title}</h1>
            <p>{song.image}</p>

        </main>
    )
}

export default SongDetailPage;
