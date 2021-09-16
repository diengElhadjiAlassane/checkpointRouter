import MovieList from "./Components/MovieList";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import addmovie from "./redux/movies/action";
import { Route , Switch, Link} from "react-router-dom";
import Description from "./Components/Description";

function App() {
  const dispatch = useDispatch();

  const [vtitle, setVtitle] = useState(" ");
  const [vdescription, setVdescription] = useState(" ");
  const [vposterUrl, setVposterUrl] = useState(" ");
  const [vrating, setVrating] = useState("");

  const [newMovie, setNewMovie] = useState();

  function handleSubmit(e) {
    e.preventDefault();
    return dispatch(addmovie(newMovie));
  }

  useEffect(() => {
    setNewMovie({
      title: vtitle,
      description: vdescription,
      posterUrl: vposterUrl,
      rating: vrating,
    });
  }, [vtitle, vdescription, vposterUrl, vrating]);

  console.log(newMovie);
  return (
    <div className="App container">
      <Link to='/'>Home</Link>
      <Switch>
        <Route exact path="/">
          <h1>Movie App</h1>
          <h4 style={{ color: "white" }}>
            I make this app to collect and store my favorite movies.
            <br />
            Let's see it.
          </h4>

          <form className="container m-3" onSubmit={(e) => handleSubmit(e)}>
            <div className="form-group">
              <label htmlFor="title" className="text-white">
                Title:
              </label>
              <input
                type="text"
                onChange={(e) => setVtitle(e.target.value)}
                className="form-control"
                placeholder="Enter title"
                id="title"
                name="title"
                value={vtitle}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="description" className="text-white">
                Description:
              </label>
              <input
                type="text"
                onChange={(e) => setVdescription(e.target.value)}
                className="form-control"
                placeholder="Enter description"
                id="description"
                name="description"
                value={vdescription}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="posterUrl" className="text-white">
                Poster-Url:
              </label>
              <input
                type="text"
                onChange={(e) => setVposterUrl(e.target.value)}
                className="form-control"
                placeholder="Paste the url of the image here"
                id="posterUrl"
                name="posterUrl"
                value={vposterUrl}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="rating" className="text-white">
                Rating:
              </label>
              <input
                type="number"
                onChange={(e) => setVrating(e.target.value)}
                className="form-control"
                placeholder="Give the rate"
                id="email"
                name="rating"
                value={vrating}
                required
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Add Film
            </button>
          </form>

          <MovieList />
        </Route>
        <Route path="/:title" component={Description}/>
      </Switch>
    </div>
  );
}

export default App;