import React from 'react';
import './Listings.css';
import LittleMap from '../LittleMap/LittleMap.js';


class Listings extends React.Component{
  constructor(props) {
    super(props)
     this.state={
       listings: this.props.listings[0]
    
  }
}



    
      render(){
        console.log(this.state.listings)
let listings =
          this.state.listings.map((listing) => 
              <div className="card listing bg-light mb-3">
               <div className="card-header"><button type="button" className="btn shadow-none btn-primary bg-light btn-sm" data-bs-toggle="modal" data-bs-target="#listing-modal"><img src="logo\WellFindLogos\Logo Transparent Dark.png" className="listing-logo"/>See Listing | Map</button></div>
               <div className="card-body">
                 <h4 className="card-title">{listing.listing_name}</h4>
                 <p className="card-text">Nearby: Muswell Hill, Crouch End, Alexandria Palace</p>
                 <p className="card-text">111-117 Muswell Hill Rd, Muswell Hill, London N10 3HS</p>
                 <span className="badge rounded-pill bg-secondary">Secondary</span>
                 <span className="badge rounded-pill bg-secondary">Secondary</span>
                 <span className="badge rounded-pill bg-secondary">Secondary</span>
                 <span className="badge rounded-pill bg-light">Light</span>
                 <span className="badge rounded-pill bg-light">Light</span>
               </div>
               <div className="modal" id="listing-modal">
                 <div className="modal-dialog" role="document">
                   <div className="modal-content bg-light">
                     <div className="modal-header">
                       <h5 className="modal-title"><img src="logo\WellFindLogos\WF Transparent Dark.png" className="listing-logo"/> Planet Organic Muswell Hill</h5>
                       <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
                         <span aria-hidden="true"></span>
                       </button>
                     </div>
                     <div className="modal-body">
                       <LittleMap></LittleMap>
                       <p className="card-text">Nearby: Muswell Hill, Crouch End, Alexandria Palace</p>
                 <p className="card-text">111-117 Muswell Hill Rd, Muswell Hill, London N10 3HS</p>
                     </div>
                     <div className="add-tags-form">
                       <form>
                           <label for="exampleInputEmail1" className="form-label">Add A Tag To This Listing</label>
                           <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                         <button type="submit" className="btn bg-info btn-sm submit-modal">Submit</button>
                       </form>
                     </div>
                     <div className="modal-footer">
                       <span className="badge rounded-pill bg-secondary">Secondary</span>
                       <span className="badge rounded-pill bg-secondary">Secondary</span>
                       <span className="badge rounded-pill bg-secondary">Secondary</span>
                       <span className="badge rounded-pill bg-light">Light</span>
                       <span className="badge rounded-pill bg-light">Light</span> </div>
                   </div>
                 </div>
               </div>
             </div> )
          
            
  
      
    
      return (
        <div className="lisitngs">
          <div className="grid">
            <div className="grid-sizer"></div>
           
            {listings}
          </div> 
        </div>
      )
          }
        }
  export default Listings