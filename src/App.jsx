import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import Dashboard from './components/Dashboard';

export default function App() {
  return (
    <Provider store={store}>
      <div className="container py-4">
        <h1 className="text-center mb-4">Dashboard Widget Manager</h1>
        <Dashboard />
      </div>
    </Provider>
  );
}