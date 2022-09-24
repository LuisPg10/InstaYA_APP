import React from 'react'

export const Home = () => {
  return (
  
<div className="container">
			<h1>INSTA YA - APP </h1>
			
			<div className="row">
                <div id="login" className="col-lg-4 offset-lg-4 col-md-6 offset-md-3
                    col-12">
                    <h2 className="text-center">Bienvenido de nuevo</h2>
                    
                    <form>
                        <div className="form-group">
                            <label for="correo">Correo</label>
                            <input id="correo" name="correo"
                                className="form-control" type="email"
                                placeholder="Correo electrónico" />
                        </div>
                        <div className="form-group">
                            <label for="palabraSecreta">Contraseña</label>
                            <input id="palabraSecreta" name="palabraSecreta"
                                className="form-control" type="password"
                                placeholder="Contraseña" />
                        </div>
                        <button type="submit" class="btn btn-primary mb-2">
                            Entrar
                        </button>
                        
                        
                    </form>
                </div>
            </div>
			
				
			
		</div>


  
  )
}
