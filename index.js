import React from 'react';
import ReactDom from 'react-dom';
import './index.css';
import Card from './Finalcard';
import data from './Pagedata';

function dynamicncard(val){
    return (
<Card 
sname={val.sname}
imgsrc= {val.imgsrc}
title={val.title}
links={val.links}/>
    )
}
const root =document.getElementById('root');
ReactDom.render(<>
<h1 className='heading_style'>Top 6 Television Shows On NetFlix</h1>


{data.map(dynamicncard)};
</>,root)   
// ReactDom.render(
//     <>
// <h1>Hello World...</h1>
// <h3>Rendering multiple jsx element using react.fragment...</h3>
// <pre>()This is a parenthesis....</pre>
// </>,root
// );
//First coding challenge
/*
ReactDom.render(
    <>
<h1>What is your favourite Series on Netflix.</h1>
<p><strong>List of 5 Netflix series i love:</strong></p>
<ol>
    <li>Dark</li>
    <li>Vikings</li>
    <li>Vikings:Valhalla</li>
    <li>SquidGame</li>
    <li>The Last Kingdom</li>
</ol>
</>,root
);
*/

//...........................JavaScript Expressions in JSX in ReactJs......................................
// const date=new Date().toLocaleDateString();
// const time=new Date().toLocaleTimeString();
// // const year=new Date().getFullYear();

// ReactDom.render(
// //here we are using template literals. whenever there is a need of using javascript inside jsx element use {javascript expression}
// <>
// <p>{`Today's date is ${date} ${time} `} </p>
// <h5>Hi</h5>
// </>,root

// );


//-------------------------------------------------------Jsx Attributes------------------------------------------
//-----------------------------------------------Image Gallery Project using React JS----------------------------
// const img1='https://picsum.photos/200/300';
// const img2='https://picsum.photos/201/300';
// const img3='https://picsum.photos/202/300';
// // const img4='https://picsum.photos/200/300';
// // const img5='https://picsum.photos/200/300';

// ReactDom.render(
//     <>
//     <h1 className='styleH1'>This is an Image Gallery</h1>
//     <div className='images'>
//     <img src={img1} alt='random_image_lorempicsum'/>
//     <img src={img2} alt='random_image_lorempicsum'/>
//     <img src={img3} alt='random_image_lorempicsum'/>
//     </div>
//     {/* <img src='img4' alt='random_image_lorempicsum'/>
//     <img src='img5' alt='random_image_lorempicsum'/> */}
//     </>,root
// )

//---------------------------------------Greeting messages base on time---------------------------
// let greetMessage=" ";
// let fontColor={};
// let emojiColor={};



// // const hour=new Date().getHours();
// const hour=21;
// if(hour>1&&hour<12){
// greetMessage='Good Morning';
// fontColor={color:'green'};
// emojiColor={color:'green'};
// }
// else if(hour>12&&hour<18)
// {
// greetMessage='Good Afternoon';
// fontColor={color:'orange'};
// emojiColor={color:'orange'};
// }
// else if(hour>18&&hour<21){
// greetMessage='Good Evening';
// fontColor={color:'Purple'};
// emojiColor={color:'Purple'};

// }
// else{
//     greetMessage='Good Night';
//     fontColor={color:'#c92a2a'};
// emojiColor={color:'#c92a2a'};

// }
// ReactDom.render(
//     <>
//     <div>
//     <h1 className='centered'>Hello Sir, <span style={fontColor}>{greetMessage}</span> <span style={emojiColor}><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
//   <path strokeLinecap="round" strokeLinejoin="round" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
// </svg></span></h1>
   
//     </div>
//     </>,root
// )
