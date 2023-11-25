import Info from './components/Info.tsx'
import Program from './components/Program';
import Price from './components/Price';
import Popular from './components/Popular';
import Gallery from './components/Gallery';
import Blog from './components/Blog';
import Footer from './components/Footer';
import Mailing from './components/Mailing';

function App() {
    return (
        <div className="flex flex-col">
            <Info/>
            <Program/>
            <Price/>
            <Popular/>
            <Blog/>
            <Gallery/>
            <Mailing/>
            <Footer/>
        </div>
    )
}

export default App
