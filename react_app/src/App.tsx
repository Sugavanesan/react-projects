import React from 'react';
import AppLayout from './components/Layout/AppLayout';
import AppRoute from './routers/navigators/AppRoute';

function App() {
  return (
    <AppLayout>
      <main style={{ flex: 1, padding: '1rem' }}>
        <AppRoute />
      </main>
    </AppLayout>
  );
}

export default App;
