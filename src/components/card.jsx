import React from 'react'

const Card = (props) => {

    function handleChange(id,event){
        props.Handle(id,event.target.value);

    }
    return props.cards.map(card => (

    <div key={card.id} class="card">
        <div className='Blue-area'>
        <input type='text' name="Val" onChange={(event)=>handleChange(card.id,event)} placeholder={card.place} className="bmi-value"/>
        </div>
         <div class="card-content">
            
            <div class="bmi-status">{card.text}</div>
            <div class="bmi-date">Calculated on 13 January 2022</div>
            <button class="card-button">Add</button>
        </div>
        
    </div>
  )
)}

export default Card
