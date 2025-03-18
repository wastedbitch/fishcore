import { getImages } from "@/lib/images";
import GalleryClient from "../components/Gallery";

export default function Gallery() {
  const images = getImages();
  return <GalleryClient images={images} />;
}
