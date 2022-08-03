import React from 'react';

const stylePara={
fontSize:'10px',
color:'red'

}

function Para(){
    return (
    < >
    <p>This is a paragraph</p><br/>
    <p style={stylePara} contentEditable='true'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit ex quisquam similique magnam natus nostrum consequatur fugiat excepturi inventore id officiis dolore ab, animi quod delectus unde accusamus minima earum quam vel omnis nulla mollitia! Eaque repudiandae laudantium assumenda corrupti quod quaerat ut doloribus debitis a recusandae beatae, quisquam laboriosam corporis similique odio, maxime rerum? Dolores facilis obcaecati fugiat placeat!</p>
    </>
    )
}

export default Para;