
import Navbar from './Navbar';
import Home from './Home';
import SearchBar from './SearchBar';
import Description from './Description';
import DescriptionTitle from './DescriptionTitle';
import Footer from './Footer';
function App() {


  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <SearchBar placeholder={"Enter your keywords..."}/>
        <DescriptionTitle></DescriptionTitle>
        <Description></Description>
        <Footer />
      </div>
      
      

    </div>
  );
}

export default App;
