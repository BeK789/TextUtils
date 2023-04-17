import './App.css';
import Navbar from './Mycomponents/Navbar';
import TextForm from './Mycomponents/TextForm'

function App(props) {
  return (
      <>
      <Navbar /> 
      <div class = 'container'>
      <TextForm />    
      </div>
      </>
  );
}

export default App;
