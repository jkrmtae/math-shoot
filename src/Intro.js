import logo from './logo.png';
import './Intro.css';
import ScrollButton from "./ScrollButton";

function Intro() {
    return (
        <div className="intro">
            <div className="intro-container container">
                <img src={logo} className="logo" alt="logo" />
                <h1>МАТЕМАТИЧЕСКИЕ ВЫШИБАЛЫ</h1>
                <h2>командная игра</h2>
                <ScrollButton></ScrollButton>
            </div>
        </div>
    );
}

export default Intro;
