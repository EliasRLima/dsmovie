import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Lista from 'pages/Lista';
import Formulario from 'pages/Formulario';
import Navbar from 'components/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Lista />} />
        <Route path="/form">
          <Route path=":movieId" element={<Formulario />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;