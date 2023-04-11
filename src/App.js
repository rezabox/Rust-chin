import CardOrigin from "./Components/CardTitle";
import CardTitle2 from "./Components/CardTitle2";
import Header from "./Components/Header";
import HeaderMenu from "./Components/HeaderMenu";
import SectionCard2 from "./Components/SectionCard2";
import SectionCard3 from "./Components/SectionCard3";
import SectionCards from "./Components/SectionCards";
import SectionImage from "./Components/SectionImage";
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
       <div></div>
       <SectionImage/>
       <br/>
       <CardTitle2/>
       <br/>
       <SectionCard2/>
       <SectionCard3/>
       <br/>
    </div> 
  );
}

export default App;
