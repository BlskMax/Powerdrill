import Image from "next/image";
import styles from "@/components/backgrounds/Backgrounds.module.css"
import { IPicture } from "@/interfaces";
import { pictureList } from "@/data/data";
import PhotoList from "@/components/photoList/PhotoList";

async function fetchPictures (): Promise <IPicture[]> {
    return pictureList
}

async function photos () {

    const pictures = await fetchPictures();

  return (
    <main 
    className={styles.fondo}>

    <section className="w-screen h-screen">

    <div className="">
        <PhotoList pictures={pictures} />
    </div>

    </section>  

    </main>
  );
}

export default photos;