import { useState } from "react";
import {  useNavigate } from "react-router-dom";

const Add = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, name };

    fetch('http://localhost:8000/blogs/', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog)
    }).then(() => {
      navigate.push('/');
    })
  }
  

  return (
    <div className="add">
      <h2>Add a New Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog title:</label>
        <input 
          type="text" 
          required 
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog body:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Blog author:</label>
        <select
          value={name}
          onChange={(e) => setName(e.target.value)}
        >
          <option value="">{}</option>
          
        </select>
        <button>Add Blog</button>
      </form>
    </div>
  );
}
 
export default Add;