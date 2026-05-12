import './Team.scss';
import Avatar from 'boring-avatars';

function Team(props) {
    const accuracyText = String(props.accuracy*100).split('.')[0];

    return (
        <button className={props.alive ? 'team' : 'team died'} onClick={props.handleSelectTeam} data-team-id={props.teamId}>
            <div className="top-part">
                <div className="avatar">
                    <Avatar
                        size={75}
                        name={props.name}
                        variant="beam"
                    />
                </div>
                <span className='team-name text'>{props.name}</span>
            </div>
            <div className="bottom-part">
                <span className='team-id text'>{props.teamId}</span>
                <div className='stats'>
                    <span className='stren text stat-item'>
                        <span className="label">Сила</span>
                        <span className="value">{props.strength}</span>
                    </span>
                    <span className='accur text stat-item'>
                        <span className="label">Меткость</span>
                        <span className="value">{accuracyText}%</span>
                    </span>
                </div>
            </div>

        </button>
    );
}

export default Team;
