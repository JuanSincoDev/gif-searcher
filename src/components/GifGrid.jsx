import GifItem from "./GifItem";
import useFetchGifs from "../hooks/useFetchGifs";

const GifGrid = ({ category }) => {
  const { gifs, isLoading } = useFetchGifs(category);

  return (
    <div>
      <h3>{ category }</h3>

      {
        isLoading && (<h2 >Cargando...</h2>)
      }

      <div className="card-grid">
        {
          gifs.map( ( gif ) => {
            return <GifItem
              key={ gif.id }
              { ...gif }
            />
          })
        }
      </div>
    </div>
  )
}

export default GifGrid
