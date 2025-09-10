import './TrainingList.css';
import TrainingItem from '../TrainingItem/TrainingItem';

function TrainingList({trainings}) {

    return (
        <div className="training-list">
            <div className="training-title">
                <span className="title-date">Дата (ДД.ММ.ГГ)</span>
                <span className="title-distance">Пройдено км</span>
                <span className="title-actions">Действия</span>
            </div>
            <div className="training-wrapper">
                {trainings.map((training, trainingId) => (
                    <TrainingItem training={training} key={trainingId}/>
                ))}
            </div>
        </div>
    )
}

export default TrainingList;