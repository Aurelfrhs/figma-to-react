import { useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Pages } from './pages/Pages'
import { SearchIde } from './pages/SearchIde';

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <>
    <div>
      <Header />
      <Pages />
      <SearchIde />
      <Footer />
    </div>
    </>  
  );
}

export default App;