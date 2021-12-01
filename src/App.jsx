import Header from './components/header/Header';
import Intro from './components/intro/Intro';
import Portfolio from './components/portfolio/Portfolio';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Menu from './components/menu/Menu';
import Skills from './components/skills/Skills';
import PageNotFound from './components/pagenotfound/PageNotFound';
import './App.scss';
import { useState } from 'react';
import { Route, Switch } from 'react-router';

function App() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className="App">
      <Header openMenu={openMenu} setOpenMenu={setOpenMenu} />
        <Menu openMenu={openMenu} setOpenMenu={setOpenMenu} />
        <main>
          <Switch>
            <Route path="/" element={<Intro />} />
            <Route path="/#portfolio" element={<Portfolio />} />
            <Route path="/#skills" element={<Skills />} />
            <Route path="/#about" element={<About />} />
            <Route path="/#contact" element={<Contact />} />
            <Route path="*" element={<PageNotFound />} />
          </Switch>
        </main>
    </div>
  );
}

export default App;
