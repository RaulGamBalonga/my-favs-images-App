import { useState } from "react";

// eslint-disable-next-line react/prop-types
function ImageForm({ onAdd }) {
  const [imageUrl, setImageUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(imageUrl);
    setImageUrl("");
  };

  return (
    <form className="image-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Image URL"
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
      />
      <button type="submit">Add Image</button>
    </form>
  );
}

export default ImageForm;
