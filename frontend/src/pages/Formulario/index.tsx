import FormCard from "components/FormCard";
import { useParams } from "react-router-dom";


function Formulario() {

    const params = useParams();

    return (
        <FormCard movieId={`${params.movieId}`}/>
    );
}

export default Formulario;