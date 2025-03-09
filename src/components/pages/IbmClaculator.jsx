import React from 'react'
import NavBar from '../Navbar'
import donuts from 'E:/Fitness_app_React/src/assets/donuts.png'
import Card from '../card'

const IbmClaculator = () => {
  const [gender,setGender]=React.useState("Male");
  const [weight,setWeight]=React.useState(null);
  const [height,setHeight]=React.useState(null);
  const [bmi, setBmi] = React.useState(null);
  const [advice, setAdvice] = React.useState('');
  const cards=[
    {
        id:1,
        place:"Gender",
        text:"Enter Your Gender",
    },
    { 
      id:2,
      place:"Weight",
        text:"Enter Your Weight",
    },
    {
      id:3,
      place:"Height",
        text:"Enter Your Height",
    }
  ]
  function handleInput(id,value){
    if(id===1){
      setGender(value)
    }
    else if(id===2){
      setWeight(value)
      
    }
    else if(id===3){
      setHeight(value)
    }
  }
  const calculateBmi = () => {
    if (weight && height) {
      const heightInMeters = height / 100;
      const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
      setBmi(bmiValue);

      // Optional: Adjust advice based on gender and BMI
      if (gender.toLowerCase() === 'male') {
        if (bmiValue < 18.5) {
          setAdvice('You are underweight. Consider gaining some weight.');
        } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
          setAdvice('Your BMI is normal. Keep maintaining a healthy lifestyle.');
        } else {
          setAdvice('You are overweight. Consider a balanced diet and regular exercise.');
        }
      } else if (gender.toLowerCase() === 'female') {
        if (bmiValue < 18.5) {
          setAdvice('You are underweight. Ensure a nutrient-rich diet.');
        } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
          setAdvice('Your BMI is normal. Continue with your healthy habits.');
        } else {
          setAdvice('You are overweight. Focus on a healthy diet and physical activity.');
        }
      }
    }
  };
  
  return (
    <div className='BMI'>
        <NavBar/>   
        <div className='calc'>
            <div className='middle'>        
            <div class="styled-mid">
                <div className='styled-text'>
                <span class="regular-text">Check your</span> <span class="bold-text">BMI</span><br/>
                <span class="regular-text-second">Get</span> <span class="underline-text">Personalized Advice</span>
                </div>
                <button className='ibm-button'><span class="ibm-butt-text">Get</span> <span class="ibm-butt-text-bold">Personalized Advice</span></button>
            </div>
            <img src={donuts} alt="donuts" className='donuts' />
            </div>
            
        </div>
        <div className='card-container'>
          <Card cards={cards} Handle={handleInput}/>
        </div>
        <div className='results'>
        <button  className="submit-button"onClick={calculateBmi}>CALCULATE BMI</button>
        
        {bmi&&    
        <div className="bmi-result">
          
          <p className='pre-advice'> Your BMI is: {bmi}</p>
          <p className='advice'>{advice}</p>
        </div>}
        </div>
      

        
      
    </div>
  )
  
}

export default IbmClaculator
