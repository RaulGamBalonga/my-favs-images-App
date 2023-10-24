import { useState } from 'react'
import './App.css'
import ImageForm from './components/ImageForm';
import ImageList from './components/ImageList';

function App() {
  const [favoriteImages, setFavoriteImages] = useState([]);

  const addFavoriteImage = (url) => {
    setFavoriteImages([...favoriteImages, url]);
  };

  const removeFavoriteImage = (index) => {
    const updatedImages = [...favoriteImages];
    updatedImages.splice(index, 1);
    setFavoriteImages(updatedImages);
  };

  return (
    <div className="app">
      <h1>My Favorite Images</h1>
      <ImageForm onAdd={addFavoriteImage} />
      <ImageList images={favoriteImages} onRemove={removeFavoriteImage} />
    </div>
  );
}

export default App
