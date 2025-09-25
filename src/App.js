import Header from './Header';
import Nav from './Nav';
import Main from './Main';
import Footer from './Footer';
import './App.css';


function App() {
  return (
    <>
       <header className="app-header">
        <Header />
        <Nav />
      </header>
      <Main>
        {/* your main content here */}
      </Main>
      <Footer>
        {/* your footer content here */}
      </Footer>
    </>
  );
}


export default App;