/* eslint-disable react/prop-types */


function ImageList({ images, onRemove }) {
  return (
    <section className="image-list">
      {images.map((image, index) => (
        <div key={index} className="image-item">
          <img src={image} alt="Favorite Image" />
          <button onClick={() => onRemove(index)}>Remove</button>
        </div>
      ))}
    </section>
  );
}

export default ImageList;
