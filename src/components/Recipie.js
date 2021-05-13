import React from 'react'

function Recipie(props) {
    const name = props.name;
    const image = props.image;
    const type = props.type;
    const cusine = props.cusine;
    const calories = Math.round(props.calories);
    return (
        <div className="recipe">
            <h1>{name}</h1>
            <img src={image} alt="" />
            <div className="custype">
                <h4>{type ? type : "Breakfast | Lunch | Dinner"}</h4>
                <h4>{cusine ? cusine : "Global!"}</h4>
            </div>
            <div className="cal">
                <p><strong>Calories:</strong>{calories}</p>
            </div>
            <div className="ing">
                <ol>
                    {props.ingredients.map(ingredient => (
                        <li>
                            {ingredient.text}
                        </li>
                    ))}

                </ol>
            </div>

        </div>
    )
}

export default Recipie
