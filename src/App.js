import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <Weather />
       <footer>
         <p>
            <a href="https://github.com/brnnkva/weather-app-react" target="_blank" rel="noreferrer">
              open-source code
           </a>{" "}
            by brnnkva
         </p>
       </footer>
    </div>
  );
}

