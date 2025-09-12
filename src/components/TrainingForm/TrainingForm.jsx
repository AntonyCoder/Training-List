import './TrainingForm.css'

function TrainingForm({onSubmit}) {

    return (
        <form className="training-form" onSubmit={onSubmit}>
            <div className="date-wrapper">
                <label htmlFor="dateId" className="date-label">
                    Дата (ДД.ММ.ГГ)
                </label>
                <input type="date" name="date" id='dateId' className="date-input" required/>
            </div>
            <div className="distance-wrapper">
                <label htmlFor="distanceId" className="distance-label">
                    Пройдено км
                </label>
                <input type="text" name="distance" id='distanceId' className="distance-input" required value={distance}/>
            </div>
            <button className="training-button">Ок</button>
        </form>
    )
}

export default TrainingForm; 
