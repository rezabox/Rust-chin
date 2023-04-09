import CardOrigin from "./Components/CardTitle";
import CardTitle2 from "./Components/CardTitle2";
import Header from "./Components/Header";
import HeaderMenu from "./Components/HeaderMenu";
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
    </div> 
  );
}

export default App;
