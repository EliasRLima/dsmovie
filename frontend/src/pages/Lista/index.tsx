import Paginacao from 'components/Paginacao';
import MovieCards from 'components/MovieCards';
import axios from 'axios';
import { BASE_URL } from 'utils/requests';

function Lista() {

    //FORMA ERRADA
    axios.get(`${BASE_URL}/movies?size=12&page=0`)
         .then(response => {
             console.log(response.data);
         })

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