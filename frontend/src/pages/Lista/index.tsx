import Paginacao from 'components/Paginacao';
import MovieCards from 'components/MovieCards';
import axios from 'axios';
import { useEffect, useState } from "react";
import { BASE_URL } from 'utils/requests';
import { MoviePage } from 'types/movie';

function Lista() {

    const [pageNumber, setPageNumber] = useState(0);

    useEffect(()=>{
        axios.get(`${BASE_URL}/movies?size=12&page=0`)
         .then(response => {
             const data = response.data as MoviePage;
             setPageNumber(data.number);
         })
    }, []);

    return (
        <>
            <Paginacao />
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-lg-4 col-xl-3">
                        <MovieCards />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3">
                        <MovieCards />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3">
                        <MovieCards />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3">
                        <MovieCards />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3">
                        <MovieCards />
                    </div>
                    
                </div>
            </div>

        </>

    );
}

export default Lista;