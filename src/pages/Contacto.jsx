import "./Contacto.scss"
import React from 'react'

const Contacto = () => {
  return (
  <>
  
   
    <h1> Contactate con nosotros</h1>
    <h3> Dejanos tus dudas y tu metodo preferido de contacto y un especialista se pondra en contacto con vos.</h3>

    <div className="form">

      <form className="ctcform" action="#" method="post">

        <div className="form__fieldset">
          <fieldset>
            <legend className="form__legend"> Datos Personales </legend>

            <div className="form__inputlabel"> <label htmlFor="nombre" className="form__label">Nombre:*</label>
              <input type="text" id="nombre" name="nombre" className="form__input" required />
            </div>

            <div className="form__inputlabel">
              <label htmlFor="apellido" className="form__label">Apellido:*</label>
              <input type="text" id="apellido" name="apellido" className="form__input" required />
            </div>

            <div className="form__inputlabel">

              <label htmlFor="telefono" className="form__label"> Teléfono: </label>
              <input type="tel" id="telefono" name="telefono" placeholder="Codigo de area y numero" className="form__input" />

            </div>

            <div className="form__inputlabel">
              <label htmlFor="email" className="form__label"> Direccion de correo electronico:* </label>
              <input type="email" name="email" id="email" placeholder="Ej: mail@gmail.com" className="form__input" />

              <div> <input type="checkbox" id="Novedades" name="Novedades" value="Novedades" defaultChecked className="form__cbox" />
                <label htmlFor="Novedades">Deseo recibir novedades</label>
              </div>

            </div>
 </fieldset> 
        </div>



       



        <div className="form__fieldset">
          <fieldset>
            <legend className="form__legend"> Datos de Contacto </legend>


            <div className="form__inputlabel">
              <label htmlFor="ctc" className="form__label">¿Como preferis que te contactemos?:*</label>
              <select name="ctc" id="ctc" className="form__input">
                <option hidden defaultValue> -Seleccionar- </option>
                <option value="whatsApp">WhatsApp</option>
                <option value="telefono">Telefono</option>
                <option value="mail">Email</option>
                <option value="todas">Todas las anteriores</option>
              </select>
            </div>

            <div className="form__inputlabel">
              <label htmlFor="contanos" className="form__label">Contanos en que podemos ayudarte. <span> Cuanto mas informacion
                  nos
                  des, mas interesante sera la informacion que te prepare nuestro especialista </span> </label>
              <textarea name="contanos" id="contanos" cols="45" rows="5" className="form__input"></textarea>

            </div>


          </fieldset>
        </div>








        <div className="form__buttons">

          <button type="submit" className="form__button">Enviar mensaje</button>
          <button type="reset" className="form__button">Restablecer</button>

        </div>

      </form>
    </div> 



  
  </>
  )
}

export default Contacto