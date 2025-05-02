import React from 'react';
import WidgetCard from './WidgetCard';

export default function CategorySection({ category, search }) {
  const filtered = category.widgets.filter((w) =>
    w.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="mb-4">
      <h3>{category.name}</h3>
      <div className="row">
        {filtered.map((widget) => (
          <div className="col-md-4" key={widget.id}>
            <WidgetCard widget={widget} categoryId={category.id} />
          </div>
        ))}
      </div>
    </div>
  );
}