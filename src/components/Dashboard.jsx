import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import CategorySection from './CategorySection';
import AddWidgetModal from './AddWidgetModal';

export default function Dashboard() {
  const categories = useSelector((state) => state.widgets.categories);
  const [search, setSearch] = useState('');

  return (
    <div>
      <input
        type="text"
        className="form-control mb-3"
        placeholder="Search widgets..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {categories.map((cat) => (
        <CategorySection
          key={cat.id}
          category={cat}
          search={search}
        />
      ))}
      <AddWidgetModal />
    </div>
  );
}