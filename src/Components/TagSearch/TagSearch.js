import React from 'react';
import './TagSearch.css';
import Map from '../Map/Map.js';
import '../Listings/Listings.css';
import mapboxgl from '!mapbox-gl';
import LittleMap from '../LittleMap/LittleMap';

mapboxgl.accessToken = "pk.eyJ1IjoidGhlbG1haWplbW1hIiwiYSI6ImNrcDQ5bG1pYzBqYTEyb2xlYTlteGNsengifQ.hjSpYFVXi6UJ_NbPzvZqJw";
const center = { lat: 51.580588,
  lng: -0.03268907301495593
}
const handleClose = () => {
  setShow(false)
  reload();
};


class TagSearch extends React.Component {
  constructor(props) {
    super(props)
    this.handleAddTag = this.handleAddTag.bind(this);
    this.state = {
      data: [],
      TagSearch: '',
      placeholder: "",
      UpdateMap: '',
      mapTag: '',
      ListingReady: '',
      listings: '',
      results: '',
      ring: ["b","g","y","j","k","s","q","p"],
      tagArray: '',
      submittedTags: '',
      tagsId: '',
      tags: ''

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
      })


    //  const { lng, lat, zoom } = this.state;


  }

  handleChange(entry) {
    this.setState({
      TagSearch: entry,
      placeholder: entry
    })
  }

  handleSearch(e) {
    e.preventDefault();
    this.setState({
      UpdateMap: 1,
      ListingReady: "yes"
    })

 //   this.forceUpdate();


  }




  componentDidUpdate() {


    if (this.state.UpdateMap === 1) {
      let lowerCaseTag = this.state.TagSearch.toLowerCase();
      let search = "https://wellfindapi.herokuapp.com/api/listings/search_match.php?search=".concat("%", lowerCaseTag, "%");
      console.log(search);

      fetch(search)
        .then(res => res.json())
        .then(res => {
          this.setState({
            mapTag: "yes",
            UpdateMap: 0,
            listings: res.data,
            results: "try"
          });
        })
        }

       
         
        
      
    

    if (this.state.UpdateMap === 0) {

      this.forceUpdate();
      this.setState({
        mapTag: "yes",
        UpdateMap: 2
      })
    }
  }

handleAddTag(e, id, tags){

  e.preventDefault();
 
    console.log(id+tags+this.state.submittedTags)
const newTags = tags.concat(", "+ this.state.submittedTags)
console.log(newTags)
const data = {
  id: id,
        tags: newTags
}
   fetch('https://wellfindapi.herokuapp.com/api/listings/update.php',
    {
      method: 'POST',
      headers: {
      'Access-Control-Allow-Headers' : '*',
      'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    }) 
    .then(res => res.json())
    .then(res => console.log(res))
  }


  



  render() {

const listings = this.state.listings



 
    return (
      <>
        <div className="flex-container-split-map">
          <Map />
          <div className="card bg-secondary mb-3 tag-search-container" id="TagSearch">
            <div className="card-header"><h2><i className="fas logo fa-location-arrow"></i> WellFinder</h2></div>
            <div className="card-body">
              <h5 className="card-title large">Find Wellness Using:</h5>
              <h5 className="large">Whatever Hashtag You Need...</h5>
              <p className="card-text small"> (you can also search by neighbourhood)</p>
              <h5 className="card-title ">Featured Tags</h5>
              <div className="featured-swing">
                <button type="button" className="btn btn-primary btn-sm" onClick={(e) => this.handleChange("Zero-Waste")}>Zero-Waste</button>
                <button type="button" className="btn btn-primary btn-sm" onClick={(e) => this.handleChange("Organic-100%")}>Organic-100%</button>
                <button type="button" className="btn btn-primary btn-sm" onClick={(e) => this.handleChange("Keto")}>Keto</button>
              </div>

              <form className="d-flex tag-form">
                <input className="form-control me-sm-2" type="text" placeholder={this.state.placeholder} onChange={(e) => this.handleChange(e.target.value)} />
                <div>
                  <button className="btn btn-secondary  bg-secondary" type="submit" onClick={(e) => this.handleSearch(e)}>Find </button>
                </div>
              </form>
              <div className="tag-swing">
                <button type="button" className="btn shadow-none btn-primary  bg-light added-tag">Selected: {this.state.TagSearch}</button>
                {this.state.listings ? <button type="button" className="btn updated-btn shadow-none btn-primary btn-sm btn-outline-success added-tag">Found It!</button> : this.state.results ? <button type="button" className="btn updated-btn shadow-none btn-primary btn-sm added-tag">No results</button> : <p></p>}
              </div>
              {this.state.listings ? <button type="button"  className="btn btn-primary bg-light disabled see-listings">Listings Loaded <i class="fas fa-check-circle"></i></button> : <p></p>}
            </div>
          </div>
          {/* END FLEX */}
        </div>
        <div className="listings" id="listings">
          {this.state.listings ? listings.map((listing, index) =>
            <div key={index}>
              <div className="card listing bg-light mb-3">
                <div className="card-header"><button type="button" className="btn shadow-none btn-primary bg-light btn-sm" data-bs-toggle="modal" data-bs-target={"#"+this.state.ring[index]}><img src="https://raw.githubusercontent.com/thelmaijemma/WellFind/master/src/logo/WellFindLogos/Logo%20Transparent%20Dark.png"/>See Listing | <span className="large">Map</span></button></div>
                <div className="card-body">
                  <h4 className="card-title">{listing.listing_name}</h4>
                  <p className="card-text">Nearby: {listing.areas}</p>
                  
                  <span className="rounded-pill bg-secondary">{listing.tags}</span>
   
                </div>
                <div className="modal" id={this.state.ring[index]}>
                  <div className="modal-dialog" role="document">
                    <div className="modal-content bg-light">
                      <div className="modal-header">
                        <h5 className="modal-title super-large"><img src="https://raw.githubusercontent.com/thelmaijemma/WellFind/master/src/logo/WellFindLogos/WFTransparentDark.png" className="listing-logo" /> {listing.listing_name}</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true"></span>
                        </button>
                      </div>
                      <div className="modal-body">
                      <div className="little-map">
<LittleMap lat={listing.lat} lng={listing.lng} address={listing.address} />
                        <p className="card-text large"></p>
                      </div>
                      <span className="rounded-pill large bg-secondary">{listing.tags}</span>
                      <div className="add-tags-form">
                        <form onSubmit={(e) =>this.handleAddTag(e, listing.business_id, listing.tags)}>
                          <label htmlFor="tags" className="form-label">Add A Tag To This Listing</label>
                          <input type="text" value={this.state.submittedTags} onChange={(e)=>this.setState({submittedTags:e.target.value})} className="form-control" id="tags"/>
                          <button type="submit" className="btn bg-info btn-sm submit-modal" >Submit</button>
                        </form>
                      </div>
                      <div className="modal-footer">
                           </div>
                    </div>
                  </div>
                </div>
              </div>
              </div>
              
              {/* End Index and Map */}
            </div>)

            : <p></p>}
            {/* End Listings */}
        </div>
      </>
    )
  }
}



export default TagSearch