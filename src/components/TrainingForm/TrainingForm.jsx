import './TrainingForm.css'

function TrainingForm() {

    return (
        <form className="training-form">
            <div className="date-wrapper">
                <label htmlFor="date" className="date-label">
                    Дата (ДД.ММ.ГГ)
                </label>
                <input type="text" name="date" className="date-input" />
            </div>
            <div className="distance-wrapper">
                <label htmlFor="distance" className="distance-label">
                    Пройдено км
                </label>
                <input type="text" name="distance" className="distance-input" />
            </div>
            <button className="training-button">Ок</button>
        </form>
    )
}

export default TrainingForm; 
