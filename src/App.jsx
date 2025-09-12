import './App.css';
import { useState } from 'react';
import TrainingForm from './components/TrainingForm/TrainingForm';
import TrainingList from './components/TrainingList/TrainingList';
import validateForm from './helpers/validateForm';
import updateTrainings from './helpers/updateTrainings';

function App() {
  const [trainings, setTraining] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;

    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    const validateData = validateForm(data);

    if (validateData) {
      setTraining(prev => updateTrainings(prev, validateData));
    }

    form.reset();
  }

  function handleDelete(date) {
    setTraining(prev => prev.filter(item => item.date !== date))
  }

  return (
    <div className="app-wrapper">
      <TrainingForm onSubmit={handleSubmit} />
      <TrainingList trainings={trainings} onDelete={handleDelete} />
    </div>
  )
}

export default App;
