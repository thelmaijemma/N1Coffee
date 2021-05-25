import React from 'react';
import './TagSearch.css';
import Map from '../Map/Map.js';
import '../Listings/Listings.css';
import LittleMap from '../LittleMap/LittleMap.js';


class TagSearch extends React.Component{

  constructor(props) {
    super(props)
     this.state={
       data: [],
       TagSearch: '',
       UpdateMap: '',
       mapTag:'',
       ListingReady: '',
       listings: ''
    
  }
}
  

  componentDidMount() {
    const url = "https://wellfindapi.herokuapp.com/api/listings/read.php";
      //  async function fetchData(){
        // const res = await 
        fetch(url)
        .then(res => res.json())
        .then(res => {
          this.setState(res)
          //console.log(this.state.data);
        } )

  }

  handleChange(entry){
    
    this.setState({
      TagSearch: entry
    }) 
  }

  handleSearch(e){
    e.preventDefault();
    this.setState({
      UpdateMap: 1,
      ListingReady: "yes"
    }) 
    
  }

   componentDidUpdate() {
  

    if (this.state.UpdateMap === 1){
      let lowerCaseTag = this.state.TagSearch.toLowerCase();
    let search = "https://wellfindapi.herokuapp.com/api/listings/search_match.php?search=".concat("%",lowerCaseTag,"%");
    
    console.log(search);

    fetch(search)
    .then(res => res.json())
    .then(res => {
          this.setState({
            mapTag: "yes",
            UpdateMap: 0,
            listings: res.data
          })
        }
       )
        }

        if (this.state.UpdateMap === 0){
          
this.forceUpdate();
this.setState({
  mapTag: "yes",
  UpdateMap: 2
})
          
        }

        
      }
        





      
    
  
   

  render(){




         
          



            
  
      
















    return (
      <>
      <div className="flex-container-split-map">
      <Map/>
<div className="card bg-secondary mb-3 tag-search-container">
  <div className="card-header"><h2><img src="logo\WellFindLogos\Logo Transparent Dark.png" className="logo" alt="WellFind Icon With Transparent Background"/>WellFinder</h2></div>
  <div className="card-body">
    <h5 className="card-title large">Find Wellness Using:</h5>
    <h5 className="large">Whatever Hashtag You Need...</h5>
    <p className="card-text small"> (you can also search by neighbourhood)</p>
    <h5 className="card-title left-align">Featured Tags</h5>
    <div className="featured-swing left-align">
    <button type="button" className="btn btn-primary btn-sm" onClick={(e) => this.handleChange("Zero-Waste")}>Zero-Waste</button>
    <button type="button" className="btn btn-primary btn-sm" onClick={(e) => this.handleChange("Organic")}>Organic-100%</button>
    <button type="button" className="btn btn-primary btn-sm" onClick={(e) => this.handleChange("Keto")}>Keto</button>
</div>

    <form className="d-flex tag-form">
      <input className="form-control me-sm-2" type="text" placeholder="" onChange={(e) => this.handleChange(e.target.value)}/>
      <div>
      <button className="btn btn-secondary my-2 my-sm-0 bg-secondary" type="submit" onClick={(e) => this.handleSearch(e)}>Find </button>
      </div>
    </form>
    <div className="tag-swing left-align">
    <button type="button" className="btn shadow-none btn-primary btn-sm bg-light added-tag">{this.state.TagSearch}</button>
      {this.state.ListingReady ?     <button type="button" className="btn updated-btn shadow-none btn-primary btn-sm btn-outline-success added-tag">New Results!</button> : <p></p>}
      </div>
    <button type="button" className="btn btn-primary bg-light see-listings">See Listings <i className="fas fa-arrow-circle-down"></i></button>
  </div>
</div>
</div>
<div className="listings">
{this.state.listings ? this.state.listings.map((listing, index) => 
<>
              <div className="card listing bg-light mb-3" key={index}>
               <div className="card-header"><button type="button" className="btn shadow-none btn-primary bg-light btn-sm" data-bs-toggle="modal" data-bs-target="#listing-modal"><img src="logo\WellFindLogos\Logo Transparent Dark.png" className="listing-logo"/>See Listing | <span class="large">Map</span></button></div>
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
             </div>
             </>
             )
 : <p></p>
 }
 </div>
</>

)
    }
    }
    

export default TagSearch