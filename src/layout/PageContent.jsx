import { Routes,Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ShopPage from "../pages/ShopPage";
export default function PageContent () { 
    return ( 
    <div>
        <Routes>
            <Route path="/" element={ <HomePage /> } />
            <Route path="/shop" element={ <ShopPage />}/>
            <Route path="/about" element={ <div>About</div> }/>
            <Route path="/blog" element={ <div>Blog</div> }/>
            <Route path="/contact" element={ <div>Contact</div> }/>
            <Route path="/pages" element={ <div>Pages</div> }/>
        </Routes>

    </div>
    )
}