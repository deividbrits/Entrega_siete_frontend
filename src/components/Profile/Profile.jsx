import React from 'react'

export const Profile = () => {
  return (
    <div className="mt-5 text-center">
            <div className="card">
                <div className="card-body">
                    <img  width="100" className="img-fluid rounded" />
                    <h5 className="card-title">Nombre: </h5>
                    <p className="card-text">Email:</p>
                    <button 
                        className='btn btn-dark' 
                        
                    >
                        Editar Nombre
                    </button>
                </div>
                {/* {
                    loading && 
                    <div className="card-body">
                        <div className="d-flex justify-content-center my-2">
                            <div className="spinner-border" role="status">
                                <span className="sr-only">Loading...</span>
                            </div>
                        </div>
                    </div>
                } */}
                {
                    
                    <div className="card-body">
                        <div className="row justify-content-center">
                            <div className="col-md-5">
                                <div className="input-group mb-3">
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        aria-label="Recipient's username" 
                                        
                                    
                                    />
                                    <div className="input-group-append">
                                        <button 
                                            className="btn btn-outline-secondary" 
                                            type="button" 
                                          
                                        >
                                            Editar
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}

export default Profile

