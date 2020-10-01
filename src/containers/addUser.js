import React,{Component} from 'react';

class addUser extends Component{
  constructor(...props){
    super(...props)
    
    this.state ={user:null,
        picture:'',
        filePic:null,
        uploadValue:0,
        vacio:null,
      url:''}


    this.handleOnGuardar = this.handleOnGuardar.bind(this)
    this.upLoadFile = this.upLoadFile.bind(this)
  }
  
  handleOnGuardar(e){
    e.preventDefault()
    var guardar = true
    const valores = e.target

    console.log(this.state.user.uid)
    
    if(!valores.nombre.value){
        this.setState({vacio:"Campo nombre vacio."})
        guardar=false
    }
    if(!valores.apellido.value){
      this.setState({vacio:"Campo apellido vacio."})
        guardar=false
    }
    if(!valores.telefono.value){
      this.setState({vacio:"Campo telefono vacio escriba al menos uno."})
        guardar=false
    }
    if(!valores.direccion.value){
      this.setState({vacio:"Campo direccion vacio."})
        guardar=false
    }
    if(!valores.descripcionPuesto.value){
      this.setState({vacio:"Campo descripcion Puesto vacio."})
        guardar=false
    }
    if(!this.state.filePic){
      this.setState({vacio:"Ingrese foto vacio."})
        guardar=false
    }

    if(guardar){
      const storageRef = storage.ref(`fotos perfil/${this.state.filePic.name}`)
      const task = storageRef.put(this.state.filePic)

      task.on('state_changed', snapshot => {
        let percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        this.setState({
          uploadValue: percentage
        })
      }, error => {
        console.error(error.message);
      }, () => {
        task.snapshot.ref.getDownloadURL().then( downloadURL => {
          const empresa = {nombre: valores.nombre.value,
            descripcion: valores.descripcionPuesto.value,
            email: this.state.user.email,
            direccion: valores.direccion.value,
            horario: valores.horario.value,
            image: downloadURL,
            telefono: {telefono: valores.telefono.value,telefono2: valores.telefono2.value}
          } 
          
          refe.child(`tipo-user/perfil/${this.state.user.uid}`).set( perfil)
        })
      })

        // window.location.href('/principal')
      
    }

  }

  upLoadFile(e){
    const file = e.target.files[0]
    this.setState({picture: URL.createObjectURL(file), filePic:file})

  }
    
  render(){
    return(
      <div>
          <div className= "registro">
              <div className="container">
              <section className="contenedor-main row bg-dark text-white rounded my-3">
                  <main className="col-12 ">
                      <div className="row justify-content-center mt-3">
                          <h3>Registro de Perfil puesto</h3>
                      </div>
                      <div className="row mt-3">
                          <div className=" col-12 col-lg-6 mt-3">
                              <div className="container-fluid ">
                                  <div className="row no-gutters justify-content-center">
                                      <div className="col-6 columna mb-4">
                                          <img className="img-fluid float-left img-thumbnail " src={this.state.picture} alt="" id="imperfil"/>
                                      </div>
                                  </div>
                              </div>
                              <progress value={this.state.uploadValue} max='100'>
                                  {this.state.uploadValue} %
                                </progress>
                              <div className="row justify-content-center">
                                  <div className="">
                                      <label htmlFor="profile mr-2" >Subir foto de perfil  </label>
                                      <input className= "ml-3 inputfile btn btn-secondary btn-sm" type="file" id="profile" name="profile" onChange={this.upLoadFile} accept=".jpg, .jpeg, .png"/>
                                  </div>                            
                              </div>
                              {
                                (this.state.vacio) &&
                                <div className="my-2 bg-info text-dark rounded lg-4">
                                  {this.state.vacio}
                                </div>
                              }
                          </div>  
                          <div className=" col-12 col-lg-6 mt-3">
                              <form onSubmit={this.handleOnGuardar} className= "ml-5 mr-5">
                                  <div className="form-group">
                                      <label htmlFor="nombre">Nombre del puesto</label>
                                      <input type="text" className="form-control" placeholder="Nombre dl puesto" name="nombre" id="nombre" />
                                  </div>
                                  <div className="form-group">
                                      <label htmlFor="horario">Tienda</label> 
                                      <input type="horario" className="form-control" placeholder="ej. Lun-Vie 6:00am-8:00pm" name="horario" id="horario" />
                                  </div>
                                  <div className="form-group">
                                      <label htmlFor="telefono">Teléfono</label> 
                                      <div className="form-inline">
                                          <input type="Telefono" className="form-control my-2 mr-2" placeholder="Telefono 1" name="telefono" id="telefono" size="20" />
                                          <input type="Telefono2" className="form-control my-2" placeholder="Telefono 2" name="telefono2" id="telefono2" size="20" />
                                      </div>
                                  </div>
                                  <div className="form-group">
                                      <label htmlFor="direccion">Dirección</label>
                                      <textarea name="direccion" id="direccion" className="form-control"></textarea>
                                  </div>
                                  <div className="form-group">
                                      <label htmlFor="descripcion">Descripción</label>
                                      <textarea name="descripcion" id="descripcion" className="form-control"></textarea>
                                  </div>
                                  <div className=" col-12 col-md-4 mb-4">
                                      <button className="btn btn-primary btn-block" type="submit" >Guardar</button>
                                  </div>
                              </form>
                          </div>
                      </div>
                  </main>
              </section>
              </div> 
          </div> 
      </div>
      )
  }
}

export default addUser;