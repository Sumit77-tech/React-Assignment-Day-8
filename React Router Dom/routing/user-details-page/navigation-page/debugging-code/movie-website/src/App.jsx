import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link, useNavigate, useParams } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs, updateDoc, deleteDoc, doc } from "firebase/firestore";
import styled from "styled-components";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const Container = styled.div` padding: 20px; max-width: 500px; margin: auto; `;
const Button = styled.button` background: blue; color: white; padding: 10px; margin-top: 10px; cursor: pointer; border: none; `;

const Movies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const querySnapshot = await getDocs(collection(db, "movies"));
      setMovies(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    };
    fetchMovies();
  }, []);

  const deleteMovie = async (id) => {
    await deleteDoc(doc(db, "movies", id));
    setMovies(movies.filter(movie => movie.id !== id));
  };

  return (
    <Container>
      <h2>Movie List</h2>
      <Link to="/add-movie"><Button>Add Movie</Button></Link>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <strong>{movie.title}</strong> ({movie.year}) - {movie.description}
            <Link to={`/add-movie/${movie.id}`}><Button>Edit</Button></Link>
            <Button onClick={() => deleteMovie(movie.id)}>Delete</Button>
          </li>
        ))}
      </ul>
    </Container>
  );
};

const AddMovie = () => {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [year, setYear] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      const getMovie = async () => {
        const querySnapshot = await getDocs(collection(db, "movies"));
        const movie = querySnapshot.docs.find(doc => doc.id === id);
        if (movie) {
          const data = movie.data();
          setTitle(data.title);
          setDescription(data.description);
          setYear(data.year);
        }
      };
      getMovie();
    }
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !description || !year) return alert("All fields are required!");
    
    if (id) {
      await updateDoc(doc(db, "movies", id), { title, description, year });
    } else {
      await addDoc(collection(db, "movies"), { title, description, year });
    }

    navigate("/movies");
  };

  return (
    <Container>
      <h2>{id ? "Edit Movie" : "Add Movie"}</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
        <input type="text" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} required />
        <input type="number" placeholder="Year" value={year} onChange={(e) => setYear(e.target.value)} required />
        <Button type="submit">{id ? "Update" : "Add"} Movie</Button>
      </form>
    </Container>
  );
};

// App Component
const App = () => (
  <BrowserRouter>
    <Container>
      <h1>React Movie App</h1>
      <nav>
        <Link to="/movies">View Movies</Link> | <Link to="/add-movie">Add Movie</Link>
      </nav>
      <Routes>
        <Route path="/movies" element={<Movies />} />
        <Route path="/add-movie" element={<AddMovie />} />
        <Route path="/add-movie/:id" element={<AddMovie />} />
      </Routes>
    </Container>
  </BrowserRouter>
);

export default App;
