import { BrowserRouter } from 'react-router-dom';
import { SwitchRoutesApp } from 'routing/SwitchRoutesApp';
import styles from './App.module.css'

function App() {
  return (
    <BrowserRouter>
      <div className={styles.App}>
        <SwitchRoutesApp />
        <p className={styles.AppPoweredBy}>
          Powered by <a href="https://www.weatherapi.com/" title="Free Weather API">WeatherAPI.com</a>
        </p>
      </div>
    </BrowserRouter>
  );
}

export default App;
