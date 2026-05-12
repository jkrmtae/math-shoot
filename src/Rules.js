import ScrollButton from "./ScrollButton";
import './Rules.scss';

function Rules() {
    return (
        <div className="rules">
            <div className="rules-heading text">Правила</div>
            <div className="container rules-container">
                <div className="rules-item text">ТУТ БУДУТ</div>
                <div className="rules-item text">Написаны</div>
                <div className="rules-item text">Правила</div>
                <ScrollButton></ScrollButton>
            </div>
        </div>
    );
}

export default Rules;
