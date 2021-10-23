import HeaderNavbar from "../src/Navbar/Navbar";
import LocalSeoPlatfrom from "../src/LocalSeoPlatfrom/LocalSeoPlatfrom"
import TrustedBrand from "../src/TrustedBrand/TrustedBrand"
import ToolsRank from '../src/ToolsRank/ToolsRank';
import FooterSectaion from "../src/FooterSectaion/FooterSectaion"
import LocalSearch from "../src/LocalSearch/LocalSearch"
import LocalSearchGrid from "../src/LocalSearchGrid/LocalSearchGrid"
import LocalSearchAudits from "../src/LocalSearchAudits/LocalSearchAudits"
import GoogleBusiness from "../src/GoogleBusiness/GoogleBusiness"
import PenalContant from "../src/PenalContant/PenalContant"
import TastmonialGrid from "../src/TastmonialGrid/TastmonialGrid"

export default function Home() {
  return (
    <>
      <HeaderNavbar />
      <LocalSeoPlatfrom/>
      <TrustedBrand />
      <div className="tool-rank-sec">
        <ToolsRank />
      </div>
      <div style={{    backgroundColor: "#f9faf8"}}>
        <LocalSearch />
        <LocalSearchGrid />
        <LocalSearchAudits />
        <GoogleBusiness />
        <PenalContant/>
        <TastmonialGrid/>
      </div>
      <FooterSectaion/>
    </>
  )
}
