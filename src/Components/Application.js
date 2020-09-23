import React from 'react';
import App1 from './splash.png';

function Application(){
    return(
    <div className="Application">
        <div class="album py-5 bg-light">
        <div class="container">

            <div className="row">
              <div className="col-md-4">
                <div className="card mb-4 shadow-sm">
                  <img src={App1} className="bd-placeholder-img card-img-top" width="100%" height="225" />
                    <div className="card-body">
                      <h4 className="card-text">HURDLING RODGER</h4>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                          <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                          <button type="button" className="btn btn-sm btn-outline-secondary">Download</button>
                        </div>
                        <small className="text-muted">1+</small>
                        <small className="text-muted">7.6 MB</small>
                      </div>
                    </div>
              </div>
             </div>
        </div>
        </div>
    
    </div>
    </div>
    )
}

export default Application;