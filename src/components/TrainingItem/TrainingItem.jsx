import './TrainingItem.css';

function TrainingItem({training}){
    const {date, distance} = training;

    return(
        <div className="training-item">
            <span className="training-date">{date}</span>
            <span className="training-distance">{distance}</span>
            <div className="actions-wrapper">
                <button className="training-edit">ред</button>
                <button className="training-delete">удл</button>
            </div>
        </div>
    )
}

export default TrainingItem;