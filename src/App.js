import './App.css';
import Row from './Row';
import requests from './request';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Row isLargeRow={true} title="Originals" fetchUrl={requests.fetchNetflixOriginals}></Row>
        <Row title="Trending" fetchUrl={requests.fetchTrending}></Row>
        <Row title="Top Rated" fetchUrl={requests.fetchTopRated}></Row>
        <Row title="Action" fetchUrl={requests.fetchActionMovies}></Row>
        <Row title="Comedy" fetchUrl={requests.fetchComedyMovies}></Row>
        <Row title="Horror" fetchUrl={requests.fetchHorrorMovies}></Row>
        <Row title="Romance" fetchUrl={requests.fetchRomanceMovies}></Row>
        <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}></Row>

      </header>
    </div>
  );
}

export default App;
