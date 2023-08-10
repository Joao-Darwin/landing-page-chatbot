import React from 'react'
import imgAboutUs from "../../assets/About us page-amico.png";
import imgOurMission from "../../assets/Rocket-amico.png";
import "./About.css"

const About = () => {
    return (
        <div className='container containerAbout'>
            <div className='div1'>
                <h1 className='titulo'>Nossa história</h1>
                <div className='divImgParagrafo'>
                    <p className='paragrafo paragrafoAbout' style={{ float: "left" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, expedita unde, quidem at rem consectetur sequi qui, laboriosam eum suscipit nihil iste! Hic delectus unde earum est totam, sunt cum!Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, expedita unde, quidem at rem consectetur sequi qui, laboriosam eum suscipit nihil iste! Hic delectus unde earum est totam, sunt cum</p>
                    <img style={{ float: "right" }} className='imgPageInicial' src={imgAboutUs} alt="Imagem nossa história" />
                </div>
            </div>
            <div className='div2'>
                <h1 className='titulo'>Nossa missão</h1>
                <div className='divImgParagrafo'>
                    <img style={{ float: "left" }} className='imgPageInicial' src={imgOurMission} alt="Imagem nossa missão" />
                    <p className='paragrafo paragrafoAbout' style={{ float: "right" }}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda minima minus alias excepturi et, ipsum cumque voluptas velit dignissimos, perferendis voluptatem mollitia libero repudiandae, quia eum quo accusantium deserunt. Voluptate?Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, expedita unde, quidem at rem consectetur sequi qui, laboriosam eum suscipit nihil iste! Hic delectus unde earum est totam, sunt cum</p>
                </div>
            </div>
        </div>
    )
}

export default About