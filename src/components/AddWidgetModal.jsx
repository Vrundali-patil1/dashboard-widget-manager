import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addWidget } from '../redux/widgetsSlice';
import { v4 as uuidv4 } from 'uuid';

export default function AddWidgetModal() {
  const [name, setName] = useState('');
  const [text, setText] = useState('');
  const [categoryId, setCategoryId] = useState('');
  const categories = useSelector((state) => state.widgets.categories);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !text || !categoryId) return;
    dispatch(
      addWidget({
        categoryId,
        widget: { id: uuidv4(), name, text },
      })
    );
    setName('');
    setText('');
    setCategoryId('');
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <h4>Add Widget</h4>
      <div className="row g-2">
        <div className="col-md-3">
          <input
            type="text"
            placeholder="Widget Name"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="col-md-3">
          <input
            type="text"
            placeholder="Widget Text"
            className="form-control"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className="col-md-3">
          <select
            className="form-select"
            value={categoryId}
            onChange={(e) => setCategoryId(e.target.value)}
          >
            <option value="">Select Category</option>
            {categories.map((cat) => (
              <option value={cat.id} key={cat.id}>
                {cat.name}
              </option>
            ))}
          </select>
        </div>
        <div className="col-md-3">
          <button className="btn btn-primary w-100" type="submit">
            + Add Widget
          </button>
        </div>
      </div>
    </form>
  );
}