import React from 'react';
import { useDispatch } from 'react-redux';
import { removeWidget } from '../redux/widgetsSlice';

export default function WidgetCard({ widget, categoryId }) {
  const dispatch = useDispatch();

  return (
    <div className="card mb-3">
      <div className="card-body">
        <div className="d-flex justify-content-between">
          <h5>{widget.name}</h5>
          <button
            className="btn btn-sm btn-danger"
            onClick={() => dispatch(removeWidget({ categoryId, widgetId: widget.id }))}
          >
            &times;
          </button>
        </div>
        <p>{widget.text}</p>
      </div>
    </div>
  );
}