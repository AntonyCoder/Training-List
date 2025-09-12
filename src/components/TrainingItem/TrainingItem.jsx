import './TrainingItem.css';
import PencilIcon from '@gravity-ui/icons/svgs/pencil.svg';
import XmarkIcon from '@gravity-ui/icons/svgs/xmark.svg';

function TrainingItem({ training, onDelete }) {
    const { date, distance } = training;

    return (
        <div className="training-item">
            <span className="training-date">{date}</span>
            <span className="training-distance">{distance}</span>
            <div className="actions-wrapper" >
                <button className="training-edit">
                    <img src={PencilIcon} alt="edit" className="image-icon" />
                </button>
                <button className="training-delete" onClick={() => onDelete(date)}>
                    <img src={XmarkIcon} alt="del" className="image-icon" />
                </button>
            </div>
        </div>
    )
}

export default TrainingItem;