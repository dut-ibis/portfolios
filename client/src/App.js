import logo from './scarf.png';
//import './App.css';

function App() {
  return (
    <div className="text-center">
      <header className="text-3xl font-bold underline">
        <img src={logo} className="animate-spin h-[16rem]" alt="logo" />
        <p>
          Home Page.
        </p>
        <a
          className="text-[#61dafb]"
          href="https://www.youtube.com/watch?v=WsUmwoVfJLI"
          target="_blank"
          rel="noopener noreferrer"
        >
          Must See
        </a>
        <a
          href="/#"
          className="pt-20 text-lg font-medium"
          >
            <p>
              “<a className="text-amber-600" href="https://tailwindcss.com/docs/text-color">I </a> 
              <a className="text-slate-600" href="https://tailwindcss.com/docs/animation">love </a> 
              <a className="text-red-600" href="https://tailwindcss.com/docs/text-align">Genshin </a> 
              <a className="text-blue-600"href="https://tailwindcss.com/docs/height"> Impcat </a>
              .”
            </p>          
        </a>
      </header>
    </div>
  );
}

export default App;
