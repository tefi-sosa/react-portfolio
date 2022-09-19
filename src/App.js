
import './App.css';
import About from './components/About';
import Container from './components/Container';
import EmailForm from './components/EmailForm';
import Header from './components/Header';
import SkillsSection from './components/SkillsSection';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <About/>
      <Container></Container>
      <EmailForm/>
    </div>
  );
}

export default App;
