import Paginacao from 'components/Paginacao';
import MovieCards from 'components/MovieCards';

function Lista() {
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