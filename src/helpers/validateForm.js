function validateForm(data) {
    const { date, distance } = data;

    if (isNaN(Number(distance))) {
        return null;
    }

    const correctDate = date.split('-').reverse().join('.');
    
    return {date: correctDate, distance}
}

export default validateForm;