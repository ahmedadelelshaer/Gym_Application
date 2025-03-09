import React from 'react';
import { ExercisesOptions, fetchData } from '../../utils/fetchData';
import NavBar from '../Navbar';
import HorizontalScrollBar from '../HorizontalScrollBar';

const Exercises = () => {
    const [search, setSearch] = React.useState('');
    const [exercises, setExercises] = React.useState([]);
    const [bodyParts, setBodyParts] = React.useState([]);

    React.useEffect(() => {
        const fetchExerciseData = async () => {
            const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', ExercisesOptions);
            setBodyParts(['all', ...bodyPartsData]);
        };
        fetchExerciseData();
    }, []);

    const handleChange = async () => {
        if (search) {
            const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', ExercisesOptions);
            const searchedExercises = exercisesData.filter(
                (item) => item.name.toLowerCase().includes(search)
                    || item.target.toLowerCase().includes(search)
                    || item.equipment.toLowerCase().includes(search)
                    || item.bodyPart.toLowerCase().includes(search),
            );
            setSearch('');
            setExercises(searchedExercises);
            console.log(searchedExercises)
        }
    };

    return (
        <div className='Exercises'>
            <NavBar textColor={"black"} />
            <h1 className='explore'>Explore all Awesome Exercises you should know :</h1>
            <div className='search'>
                <input className='search-input' placeholder='Search for Exercises' onChange={(e) => setSearch(e.target.value.toLowerCase())} />
                <button className='search-button' onClick={handleChange}>Search</button>
            </div>
            <div className='body-categories'>
                <HorizontalScrollBar data={bodyParts} />
            </div>
            <div className='Results'>
                <Exercises/ >
            </div>
        </div>
    );
};

export default Exercises;
