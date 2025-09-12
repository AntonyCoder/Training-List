//Функция для валидации и корректировки даты при добавлении тренировки
function validateForm(data) {
    const { date, distance } = data;

    if (isNaN(Number(distance))) {
        return null;
    }

    const correctDate = date.split('-').reverse().join('.');
    
    return {date: correctDate, distance: Number(distance)}
}

export default validateForm;