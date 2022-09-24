
import './App.css';
import About from './components/About';
import Container from './components/Container';
import EmailForm from './components/EmailForm';
import Header from './components/Header';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import Footer from './components/Footer';
import Education from './components/Education';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <section id='about'>
       <About/>
      </section>
      <section id='skills'>
        <SkillsSection></SkillsSection>
      </section>
      <section id='projects'>
        <ProjectsSection></ProjectsSection>
      </section>
      <section id='education'>
        <Education className='padding'></Education>
      </section>      
      <section id='contact'>
        <EmailForm/>
      </section>
        <Footer id='contact'></Footer>
    </div>
  );
}

export default App;
