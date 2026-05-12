import './BottomBar.scss';
import arrow from './arrow.svg';
import checkIcon from './checkIcon.svg';
import crossIcon from './crossIcon.png';
import targetIcon from './target.svg'

import {useState} from "react";


function BottomBar(props) {
    const handleChangeName = (event) => {
        setTeamName(event.target.value);
    };
    const handleChangeShooter = (event) => {
        setShooter(event.target.value);
    };
    const handleChangeTarget = (event) => {
        setTarget(event.target.value);
    };

    const addTeam = () => {
        props.handleAddTeam(teamName);
        setTeamName('');
        document.getElementById('name-inp').focus();
    };
    const startGame = () => {
        if (props.isStartDisabled) {
            return;
        }
        props.handleStart();
        setGameStarted(true);
        setWidth('450px');
    };
    const shoot = () => {
        props.handleShoot(parseInt(shooter) - 1, parseInt(target) - 1);
        setShooter('');
        setTarget('');
    };

    const [teamName, setTeamName] = useState('');
    const [shooter, setShooter] = useState('');
    const [target, setTarget] = useState('');
    const [gameStarted, setGameStarted] = useState(false);
    const [width, setWidth] = useState('530px');

    return (
        <div className="bottom-bar-container" style={{opacity: props.isGameStarted && !props.selectedTeam ? '0' : '1'}}>
            <div className="bottom-bar" style={{width: width}}>
                {gameStarted
                    ? <div className='shot-wrapper'>
                        {props.isReadyToShoot ?
                        <>
                            <span className='ans-text text'>Выберите цель...</span>
                        </> :
                        <>
                            <span className='ans-text text'>Ответ правильный?</span>
                            <button className={'true-ans btn'} onClick={props.handleRightAns}>
                                <img src={checkIcon} alt=""/>
                            </button>
                            <button className={'false-ans btn'} onClick={props.handleWrongAns}>
                                <img src={crossIcon} alt=""/>
                            </button>
                        </>}
                    </div>
                    : <div>
                        <input type="text"
                               id="name-inp"
                               className="team-name-inp text"
                               placeholder="Имя команды"
                               value={teamName}
                               onChange={handleChangeName}
                               onKeyDown={(event) => {
                                   event.key === 'Enter' && addTeam()
                               }}/>
                        <button className="btn add-team" onClick={addTeam}>+</button>
                    </div>
                }
            </div>
            {!gameStarted && <button className={`btn bottom-btn ${props.isStartDisabled ? 'disabled' : ''}`} onClick={gameStarted ? shoot : startGame}>
                <img className={gameStarted ? 'target-icon' : ''} src={gameStarted ? targetIcon : arrow} alt=""/>
            </button>}
        </div>
    );
}

export default BottomBar;
