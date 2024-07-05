import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';


function App() {
  return (                                            //  only one element can be returned........
    <>                                      {/* empty jsx fragment, used to wrap all the tags in one tag in order to return...... */}

      <Navbar title="TextUtils" aboutText="About" />               {/* bootstrap nav bar imported and used as a component...... */ }       {/* all the javascript will be written in these curly braces... */ }
                                                                   {/* here, title and aboutText are props which are sent to the navbar component as variables..... */}
      
      <div className="container">
        <TextForm heading="Enter the text to analyze below." />
      </div>

      <About />

    </>
  );
}

export default App;
