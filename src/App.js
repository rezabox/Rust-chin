import Header from "./Components/Header";
import HeaderMenu from "./Components/HeaderMenu";
import SectionInput from "./Components/SectionInput";
import SectionPage from "./Components/SectionPage";

function App() {
  return (
    <div className="rust text-3xl ">
       <Header/>
       <HeaderMenu/>
       <SectionInput/>
       <br/>
       <br/>
       <SectionPage/>
    </div> 
  );
}

export default App;
