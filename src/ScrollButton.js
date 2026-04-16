import './ScrollButton.scss';
import arrow from './arrow.svg';

function scroll(e) {
    let height = window.innerHeight;
    window.scrollBy({
        top: height,
        behavior: "smooth"
    });
}

function ScrollButton() {
    return (
        <button className="scroll-btn btn" onClick={scroll}>
            <img src={arrow} alt=""/>
        </button>
    );
}

export default ScrollButton;
