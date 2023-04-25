import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Info from '../components/Info';

function Detail() {
    const [loading, setLoading] = useState(true);
    const [movieInfo, setMovieInfo] = useState([]);

    const {id} = useParams();

    useEffect(() => {
        fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        .then(response => response.json())
        .then(json => {
            setMovieInfo(json.data.movie)
            setLoading(false)
        })
    }, [])

    console.log(movieInfo)

    return (
        <>
            { loading ? <h1>Loading...</h1> : 
                <div>
                    <Info 
                        coverImg={movieInfo.background_image} 
                        title={movieInfo.title} 
                        description={movieInfo.description_full} />
                </div>}
        </>
    )
}

export default Detail;