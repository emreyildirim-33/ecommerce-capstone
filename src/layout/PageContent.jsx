import { Routes,Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
export default function PageContent () { 
    return ( 
    <div>
        <Routes>
            <Route path="/" element={ <HomePage /> } />
            <Route path="/shop" element={ <div>Shop</div> }/>
            <Route path="/about" element={ <div>About</div> }/>
            <Route path="/blog" element={ <div>Blog</div> }/>
            <Route path="/contact" element={ <div>Contact</div> }/>
            <Route path="/pages" element={ <div>Pages</div> }/>
        </Routes>

    </div>
    )
}