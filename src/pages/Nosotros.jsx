import React from 'react'
import "./Nosotros.scss"


const Nosotros = () => {
  return (
    <>
     
    <h1 className="titulo"> ¿Quienes somos? </h1>

    <div className="us">

      <div className="us__mision">
        <figure className="us__fig"> <img className="us__img" src="/img/mision.jpg" alt="mision" />
          <figcaption className="us__figc"> Mision </figcaption>
        </figure>
        <div className="us__contenido">
          <h2 className="us__h2">Mision </h2>
          <p className="us__p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi officia vel repudiandae odit
            ea iure, non reprehenderit odio commodi incidunt. Libero debitis asperiores fuga inventore consectetur
            soluta, porro adipisci dolorem.</p>
        </div> 
      </div> 

      <div className="us__vision">
        <figure className="us__fig"> <img className="us__img" src="/img/vision.jpg" alt="vision" />
          <figcaption className="us__figc"> Vision </figcaption>
        </figure>
        <div className="us__contenido">
          <h2 className="us__h2">Vision </h2>
          <p className="us__p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi officia vel repudiandae odit
            ea iure, non reprehenderit odio commodi incidunt. Libero debitis asperiores fuga inventore consectetur
            soluta, porro adipisci dolorem.</p>
        </div> 
      </div> 

      <div className="us__valores">
        <figure className="us__fig"> <img className="us__img" src="/img/valores.jpg" alt="valores" />
          <figcaption className="us__figc"> Valores </figcaption>
        </figure>

        <div className="us__contenido">
          <h2 className="us__h2">Valores </h2>
          <p className="us__p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi officia vel repudiandae
            odit
            ea iure, non reprehenderit odio commodi incidunt. Libero debitis asperiores fuga inventore consectetur
            soluta, porro adipisci dolorem.</p>
        </div>       </div> 



    </div>

  

    
    </>
  )
}

export default Nosotros