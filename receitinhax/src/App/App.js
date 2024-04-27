import styles from './app.module.css';
import Barra from "../Componentes/Barras/index.js"

function App() {
  return (
    <div className={styles.App}>
      <header className={styles.AppHeader}>
        <Barra tipo={"primaria"}/>
      </header>
    </div>
  );
}

export default App;