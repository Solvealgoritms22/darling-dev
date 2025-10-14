import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Suspense, lazy } from 'react';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";

// Lazy loading para componentes que no son críticos para el primer renderizado
const Education = lazy(() => import("./components/Education").then(module => ({ default: module.Education })));
const Skills = lazy(() => import("./components/Skills").then(module => ({ default: module.Skills })));
const Projects = lazy(() => import("./components/Projects").then(module => ({ default: module.Projects })));
const Contact = lazy(() => import("./components/Contact").then(module => ({ default: module.Contact })));
const Footer = lazy(() => import("./components/Footer").then(module => ({ default: module.Footer })));
const ScrollToTop = lazy(() => import("./components/ScrollToTop").then(module => ({ default: module.ScrollToTop })));

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Suspense fallback={<div className="loading-spinner">Cargando...</div>}>
        <Education />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
        <ScrollToTop />
      </Suspense>
    </div>
  );
}

export default App;
