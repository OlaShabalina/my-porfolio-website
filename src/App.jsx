import Header from './components/header/Header'
import Intro from './components/intro/Intro'
import Portfolio from './components/portfolio/Portfolio'
import Work from './components/work/Work'
import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact'

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Intro />
        <Portfolio />
        <Work />
        <Testimonials />
        <Contact />
      </main>
    </div>
  );
}

export default App;
