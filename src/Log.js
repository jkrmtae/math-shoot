import './Log.scss';
import Avatar from 'boring-avatars';

function Log(props) {
    return (
        <>
            <div id="log">
                {props.log.map(logItem => {
                    return <div
                        className="log-item"
                        key={logItem.id}
                    >
                        <span className="name-av">
                            <Avatar
                                size={20}
                                name={logItem.shooter}
                                variant="beam"
                            />
                            {logItem.shooter}
                        </span>
                        {logItem.isHit
                            ? (
                                <>
                                    <span> нанёс </span>
                                    <span className="name-av">
                                        <Avatar
                                            size={20}
                                            name={logItem.target}
                                            variant="beam"
                                        />
                                        {logItem.target}
                                    </span>
                                    <span> {logItem.damage} урона</span>
                                </>
                            )
                            : (
                                <span> - промах!</span>
                            )
                        }
                    </div>
                })}
            </div>
            <div className="logo-shadow">
                <div style={{backdropFilter: 'blur(2.9px)'}}></div>
                <div style={{backdropFilter: 'blur(2.8px)'}}></div>
                <div style={{backdropFilter: 'blur(2.7px)'}}></div>
                <div style={{backdropFilter: 'blur(2.6px)'}}></div>
                <div style={{backdropFilter: 'blur(2.5px)'}}></div>
                <div style={{backdropFilter: 'blur(2.4px)'}}></div>
                <div style={{backdropFilter: 'blur(2.3px)'}}></div>
                <div style={{backdropFilter: 'blur(2.2px)'}}></div>
                <div style={{backdropFilter: 'blur(2.1px)'}}></div>
                <div style={{backdropFilter: 'blur(2px)'}}></div>
                <div style={{backdropFilter: 'blur(1.9px)'}}></div>
                <div style={{backdropFilter: 'blur(1.8px)'}}></div>
                <div style={{backdropFilter: 'blur(1.7px)'}}></div>
                <div style={{backdropFilter: 'blur(1.6px)'}}></div>
                <div style={{backdropFilter: 'blur(1.5px)'}}></div>
                <div style={{backdropFilter: 'blur(1.4px)'}}></div>
                <div style={{backdropFilter: 'blur(1.3px)'}}></div>
                <div style={{backdropFilter: 'blur(1.2px)'}}></div>
                <div style={{backdropFilter: 'blur(1.1px)'}}></div>
                <div style={{backdropFilter: 'blur(1px)'}}></div>
                <div style={{backdropFilter: 'blur(0.9px)'}}></div>
                <div style={{backdropFilter: 'blur(0.8px)'}}></div>
                <div style={{backdropFilter: 'blur(0.7px)'}}></div>
                <div style={{backdropFilter: 'blur(0.6px)'}}></div>
                <div style={{backdropFilter: 'blur(0.5px)'}}></div>
                <div style={{backdropFilter: 'blur(0.4px)'}}></div>
                <div style={{backdropFilter: 'blur(0.3px)'}}></div>
                <div style={{backdropFilter: 'blur(0.2px)'}}></div>
                <div style={{backdropFilter: 'blur(0.1px)'}}></div>
            </div>
        </>
    );
}

export default Log;
