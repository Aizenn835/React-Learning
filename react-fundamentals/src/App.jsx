import Intro from './components/intro/intro.jsx'

/*
   Intro here is an example of a component then i pass some values to
   the parameter of the Intro component or so called props.
*/
function App() {
  return(
    <div className="container">
      <h1>Hello React!</h1>
      <Intro name="Lei Justine Clemente"
               age = "19"
               course = "BSIT" />
    </div>
  );
}

export default App;
