import './App.css';
import Header from './containers/header';
import Main from './containers/main';

function App() {
  return (
    <div style={{width: '540px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '25px'}}>
      <Header />
      <Main />

    </div>
  );
}

export default App;
