import './App.css';
import Header from './components/Header.jsx'
import fondo from './img/backgrounds.jpg'
import Section from './components/Section.jsx'
import Footer from './components/Footer.jsx'

export function App() {

    return (
    <>
        <Header></Header>
        <div className='imagen-oferta'>
            <img src={fondo} alt='torta'/>
        </div>
        <Section></Section>
        <Footer></Footer>
    </>
    );
}