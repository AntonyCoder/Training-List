//Функция для корректного отображения тренировок, их сортировки и суммирования тренировок в один день

function updateTrainings(prev, newTraining) {
    const existing = prev.find(item => item.date === newTraining.date);

    if (existing) {
        return prev.map(item =>
            item.date === newTraining.date ?
                { ...item, distance: item.distance + newTraining.distance } :
                item
        )
    }

    const sortTrainings = [...prev, newTraining];

    sortTrainings.sort((a, b) => {
        const dateA = new Date(a.date.split('.').reverse().join('-'));
        const dateB = new Date(b.date.split('.').reverse().join('-'));

        return dateB.getTime() - dateA.getTime()
    })

    return sortTrainings;
}

export default updateTrainings;