import { useEffect, useState } from 'react'
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = ( category) => {

    const [images, setImages] = useState([]);
    const [isLoding, setIsLoding] = useState(true);

    const getImages = async (category) => {
        const gifs = await getGifs(category);
        setImages(gifs);
        setIsLoding(false);
    };

    useEffect(() => {
        getImages(category);
    }, []);

    return {
        images,
        isLoding,
    }

}
