import './Game.scss';
import Team from "./Team";
import BottomBar from "./BottomBar";
import Log from './Log';
import {useState} from "react";

function Game() {
    const [teams, setTeams] = useState([]);
    const [log, setLog] = useState([]);
    const [selectedTeam, setSelectedTeam] = useState(null);
    const [isGameStarted, setIsGameStarted] = useState(false);
    const [isReadyToShoot, setIsReadyToShoot] = useState(false);

    const logger = (isHit, shooter, target = null, damage = null) => {
        setLog([...log, {id: log.length, isHit, shooter, target, damage}]);
    };

    const calculateHit = (shooter) => {
        const chance =
            shooter.hitChance /
            (shooter.hitChance + shooter.missChance);

        return Math.random() < chance;
    };

    const handleAddTeam = (teamName) => {
        setTeams(teams.concat({
            id: teams.length + 1,
            name: teamName,
            hitChance: 2,
            missChance: 2,
            strength: 100,
            alive: true
        }));
    };

    const handleSelectTeam = (event) => {
        if (!isGameStarted) return;

        const selectedTeamId = Number(
            event.currentTarget.getAttribute('data-team-id')
        );

        if (isReadyToShoot && selectedTeam) {

            const shooter = teams[selectedTeam - 1];
            const target = teams[selectedTeamId - 1];

            if (selectedTeam === selectedTeamId) {
                setSelectedTeam(null);
                setIsReadyToShoot(false);
                return;
            }

            const willHit = calculateHit(shooter);

            if (willHit) {
                let damage = Math.floor(shooter.strength / 5);
                if (damage < 3 || target.strength <= 15) {
                    damage = 3;
                }

                target.strength -= damage;
                if (target.strength <= 0) {
                    target.strength = 0;
                    target.alive = false;
                }

                logger(true, shooter.name, target.name, damage);
            } else {
                logger(false, shooter.name);
            }

            setTeams([...teams]);
            setSelectedTeam(null);
            setIsReadyToShoot(false);
            return;
        }

        setSelectedTeam(selectedTeamId);
    };

    const handleWrongAns = () => {
        if (!selectedTeam) return;

        const shooter = teams[selectedTeam - 1];

        shooter.missChance += 1;

        setTeams([...teams]);
        setSelectedTeam(null);
    };

    const handleRightAns = () => {
        setIsReadyToShoot(true);

        const shooter = teams[selectedTeam - 1];

        shooter.hitChance += 1;

        setTeams([...teams]);
    };

    const handleStart = () => {
        setIsGameStarted(true);
    };

    const handleShoot = (shooterId, targetId) => {
        const shooter = teams[shooterId];
        const target = teams[targetId];

        const willHit = calculateHit(shooter);

        if (willHit) {
            let damage = Math.floor(shooter.strength / 5);
            if (damage < 3) damage = 3;

            target.strength -= damage;
            if (target.strength <= 0) {
                target.strength = 0;
                target.alive = false;
            }

            logger(true, shooter.name, target.name, damage);
        } else {
            logger(false, shooter.name);
        }

        setTeams([...teams]);
    };

    return (
        <div id="game" className={isReadyToShoot ? 'ready-to-shoot' : ''}>
            <div className="container">
                <div className="inner">
                    {teams.map(team => (
                        <Team
                            key={team.id}
                            teamId={team.id}
                            name={team.name}
                            strength={team.strength}
                            alive={team.alive}
                            hitChance={team.hitChance}
                            missChance={team.missChance}
                            handleSelectTeam={handleSelectTeam}
                        />
                    ))}
                </div>

                <Log log={log} />

                <BottomBar
                    isStartDisabled={teams.length < 2}
                    handleStart={handleStart}
                    handleShoot={handleShoot}
                    handleAddTeam={handleAddTeam}
                    selectedTeam={selectedTeam}
                    isGameStarted={isGameStarted}
                    isReadyToShoot={isReadyToShoot}
                    handleWrongAns={handleWrongAns}
                    handleRightAns={handleRightAns}
                />
            </div>
        </div>
    );
}

export default Game;