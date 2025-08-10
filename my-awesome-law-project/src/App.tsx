import React, { useEffect } from 'react';
import Header from './components/common/Header';

const App: React.FC = () => {
  useEffect(() => {
    document.title = 'Bluitt Law Firm';
  }, []);

  return (
    <>
      <Header />
      <main className="p-4">
        {/* Your page content here */}
      </main>
    </>
  );
};

export default App;
