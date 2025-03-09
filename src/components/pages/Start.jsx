import React from 'react';
import dumbell from 'E:/Fitness_app_React/src/assets/dumbell.png';
import AboutOurGym from '../AboutOurGym';
import NavBar from '../Navbar';

const Start = () => {
    // Initialize state with the squares array
    const [squares, setSquares] = React.useState([
        {
            id: 1,
            title: "Muscle Building",
            description: "Our team consists of certified professionals with years of experience in the fitness industry.",
            isHeld: false
        },
        {
            id: 2,
            title: "State-of-the-Art Facilities",
            description: "We provide access to the latest fitness equipment and technology in a clean, modern environment.",
            isHeld: false
        },
        {
            id: 3,
            title: "Community Support",
            description: "Join a vibrant community of fitness enthusiasts who motivate and inspire each other.",
            isHeld: false
        }
    ]);

    function toggle(id) {
        setSquares(prevSquares => prevSquares.map(square =>
            square.id === id
                ? { ...square, isHeld: !square.isHeld }
                : square
        ));
    }

    const backColor = {
        backgroundColor: 'rgb(247, 247, 75)',
        color: 'black'
    };

    function CreateTiles() {
        return squares.map(square => (
            <div
                key={square.id}
                className='square'
                style={square.isHeld ? backColor : {}}
                onClick={() => toggle(square.id)} // Use a function reference
            >
                <img src={dumbell} className='dumbell' alt='dumbell' />
                <h1 className='square-text'>{square.title}</h1>
                <h2 className='square-desc'>{square.description}</h2>
                <h1 className='square-learn'>Learn More</h1>
            </div>
        ));
    }

    return (
        <div className='S'>
            <NavBar/>
            <h1 className='s-text'>WHY CHOOSE US</h1>
            <div className='carousel-container'>
                <button className='arrow left-arrow'>
                    <i className="fas fa-chevron-left"></i>
                </button>
                <div className='squares-container'>
                    <CreateTiles />
                </div>
                <button className='arrow right-arrow'>
                    <i className="fas fa-chevron-right"></i>
                </button>
            </div>
            <AboutOurGym/>
        </div>
    );
}

export default Start;
