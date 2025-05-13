import { useState, useEffect  } from "react";
import getGifs from "../helpers/getGifs";

const useFetchGifs = ( category ) => {
  const [gifs, setGifs] = useState( [] );
  const [isLoading, setIsLoading] = useState( true )

  const loadGifs = async () => {
    const newGifs = await getGifs( category );
    setGifs( newGifs );
    setIsLoading( false );
  }

  useEffect(() => {
    loadGifs();
  }, []);

  return {
    gifs,
    isLoading
  }
}

export default useFetchGifs
