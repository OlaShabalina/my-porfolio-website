import Header from './components/header/Header';
import Intro from './components/intro/Intro';
import Portfolio from './components/portfolio/Portfolio';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Menu from './components/menu/Menu';
import Skills from './components/skills/Skills';
import './App.scss';
import { useState } from 'react';

function App() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className="App">
      <Header openMenu={openMenu} setOpenMenu={setOpenMenu} />
      <Menu openMenu={openMenu} setOpenMenu={setOpenMenu} />
      <main>
        <Intro />
        <Portfolio />
        <Skills />
        <About />
        <Contact />
      </main>
    </div>
  );
}

export default App;
