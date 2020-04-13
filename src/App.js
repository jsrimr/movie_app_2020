import React from 'react';
import PropTypes from 'prop-types';
const foodILike = [
    {
        name: "Kimchi",
        rating: 3.6,
        image:
            "http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg"
    },
    {
        name: "Samgyeopsal",
        rating: 3.6,
        image:
            "https://3.bp.blogspot.com/-hKwIBxIVcQw/WfsewX3fhJI/AAAAAAAAALk/yHxnxFXcfx4ZKSfHS_RQNKjw3bAC03AnACLcBGAs/s400/DSC07624.jpg"
    },
    {
        name: "Bibimbap",
        rating: 3.6,
        image:
            "http://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/image/recipes/ck/12/03/bibimbop-ck-x.jpg?itok=RoXlp6Xb"
    },
    {
        name: "Doncasu",
        rating: 3.6,
        image:
            "https://s3-media3.fl.yelpcdn.com/bphoto/7F9eTTQ_yxaWIRytAu5feA/ls.jpg"
    },
    {
        name: "Kimbap",
        rating: 3.6,
        image:
            "http://cdn2.koreanbapsang.com/wp-content/uploads/2012/05/DSC_1238r-e1454170512295.jpg"
    }
];


function Food({ name, image, rating }) {
    return (
        <div>
            <h1>I like {name}</h1>
            <img src={image} />
            <h4> {rating} / 5.0</h4>
        </div>
    )
}
Food.propTypes = {
    name: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired
}

function App() {
    return (
        <div>
            {
                foodILike.map((food) =>
                    <Food name={food.name} image={food.image} rating={food.rating}/>)
            }
        </div>

    );
}

export default App;
