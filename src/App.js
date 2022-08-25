import './App.css';
import Navbar from './components/Navbar/Navbar'
import Overview from './components/Overview/Overview'
import Contagion from './components/Contagion/Contagion'
import Symptoms from './components/Symptoms/Symptoms';
import WhatShouldWeDo from './components/WhatShouldWeDo/WhatShouldWeDo'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className="parent-container">    
      <Navbar/>
      <Overview/>
      <Contagion/>
      <Symptoms/>
      <WhatShouldWeDo/>
      <Footer/>
    </div>
  );
}

export default App;
