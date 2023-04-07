import CardOrigin from "./Components/CardTitle";
import Header from "./Components/Header";
import HeaderMenu from "./Components/HeaderMenu";
import SectionCards from "./Components/SectionCards";
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
       <CardOrigin/>
       <SectionCards/>
       <br/>
       <br/>
    </div> 
  );
}

export default App;
