import React from 'react'
import image2 from './images/image-john.jpg'
import image1 from './images/image-tanya.jpg'
import next from './images/icon-next.svg'
import prev from './images/icon-prev.svg'
import { Text } from './Text'

export const Slider = () => {
    const estadoImage1 = "active"
    let count = 0
    const name1 = "Tanya Sinclair"
    const name2 = "John Tarkpor"
    const job1 = "UX Engineer"
    const job2 = "Junior Front-end Developer"
    const text1 = " “ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ” ";
    const text2 = "“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”"
    /*
        const toggleImage = () => {
        if(estadoImage1 == "active"){
            document.querySelector(".imagen").classList.toggle("imagen2");
            document.querySelector(".presentation").classList.toggle("texto2");
            console.log("funciona")
        }
    }
    */
    const imagenesMore = () => {
        if (count % 2 == 0 || count == 0){
            document.querySelector(".imagen").classList.toggle("imagen2");
            document.querySelector(".presentation").innerHTML = text2;
            document.querySelector(".name").innerHTML = name2;
            document.querySelector(".job").innerHTML = job2;
            count = count + 1
        }else{
            document.querySelector(".imagen").classList.toggle("imagen2");
            document.querySelector(".presentation").innerHTML = text1;
            document.querySelector(".name").innerHTML = name1;
            document.querySelector(".job").innerHTML = job1;
            count = count + 1
        }
    }

  return (
    <div className='slider-container'>
        <img className='imagen' src={image1} alt="Image of Tanya" />
        <div className='buttons'>
            <img onClick={imagenesMore} src={prev} alt="prev button" />
            <img onClick={imagenesMore} src={next} alt="next button" />
        </div>
    </div>
  )
}
