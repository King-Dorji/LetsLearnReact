import Navbar from "./components/navbar";

const App = () => {
    return (
      <header>
      <div className = "nav-area">
      <a href = "/#" className = "logo" > 
        CodeSolution
       </a>
         <Navbar />
      </div>
      </header >
    );
};

export default App;