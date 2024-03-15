import React from 'react';
import Seleccion from '../../Images/Seleccion.png';
import Perfil from '../../Images/Perfil.jpeg';
import Icono from '../../Images/Perfil2.jpeg';
import PostImage from '../../Images/post.jpeg';
import Input from '../Atoms/Input';
import Post from '../Atoms/Post';
import './CrearPublicacion.css';

function CrearPublicacion() {
    return ( 
        <>
            <section className="container-post">
                <div className='container-crear'>
                    <img className='img-crear' src={Perfil}/>
                    <Input tipo="text" placeholder="Crear publicacion" altura={50} ancho={75} />
                    <button className='button-check'><img className='img-check' src={Seleccion}/></button>
                </div>
                <Post image1={Icono} text={'Persona1'} text2={'Hola,soy un texto de prueba.'} image2={PostImage} number={10} number2={0} number3={2} />
                <Post image1={Icono} text={'Persona2'} text2={'Hola,soy un texto de prueba.'} image2={PostImage} number={10} number2={0} number3={2} />
                <Post image1={Icono} text={'Persona3'} text2={'Hola,soy un texto de prueba.'} image2={PostImage} number={10} number2={0} number3={2} />
            </section> 
        </>
     );}

export default CrearPublicacion;