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
      tags: '',
      hadTags: '',
      success: ''

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
      placeholder: entry,
      TagSearch: entry
    })

  }



  handleSearch(e) {
    e.preventDefault();
    this.setState({
      UpdateMap: 1,
      ListingReady: "yes",
      placeholder: this.state.TagSearch
    })

 //   this.forceUpdate();


  }



  componentDidUpdate() {


    if (this.state.UpdateMap === 1) {
      let lowerCaseTag = this.state.TagSearch.toLowerCase().trim();
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

  this.setState({
    hadTags: id,
    success: 'yes'

  })
 
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
        <div className="flex-container-split-map padmore">
          <div className="card bg-light mb-3  tag-search-container" id="TagSearch">
                <div className="card-body">
                <h3 className="medium padmore">Find LDN Wellness Using:<b> Whatever Tag You Need... </b></h3>
              <p className="card-text small"> <i>(you can also search by neighbourhood)</i></p>
          
                        <div className="featured-swing">
                    <button type="button" className="btn btn-outline-primary disabled  shadow-none btn-sm">Suggested</button>
                <button type="button" className="btn btn-primary shadow-none btn-sm" onClick={(e) => this.handleChange("Zero-Waste")}>Zero-Waste</button>
                <button type="button" className="btn btn-primary shadow-none btn-sm" onClick={(e) => this.handleChange("Organic-100%")}>Organic-100%</button>
                <button type="button" className="btn btn-primary  shadow-none btn-sm" onClick={(e) => this.handleChange("Keto")}>Keto</button>
              
              </div>

              <form className="d-flex tag-form">
                <input className="form-control me-sm-2" type="text" placeholder={this.state.TagSearch} onChange={(e) => this.handleChange(e.target.value)} />
                <div>
                  <button className="btn btn-outline-primary square " type="submit" onClick={(e) => this.handleSearch(e)}>Find </button>
                </div>
              </form>
              
              <div className="tag-swing">
                <button type="button" className="btn  btn-primary   added-tag">Selected Tag: {this.state.TagSearch}</button>
                {this.state.listings ? <button type="button" className="btn updated-btn shadow-none btn-primary btn-sm btn-outline-success added-tag">Found It!</button> : this.state.results ? <button type="button" className="btn updated-btn shadow-none btn-primary btn-sm added-tag">No results</button> : <p></p>}
              </div>
              {this.state.listings ? <button type="button"  className="btn btn-secondary disabled see-listings">Listings Loaded <i class="fas fa-check-circle"></i></button> : <p></p>}
            </div>
          </div>
          {/* END FLEX */}
        </div>
        <div className="listings" id="listings">
          {this.state.listings ? listings.map((listing, index) =>
            <div key={index}>
              <div className="card listing bg-light mb-3">
                <div className="card-header"><button type="button" className="btn btn-secondary medium btn-sm" data-bs-toggle="modal" data-bs-target={"#"+this.state.ring[index]}><img className="listing-logo" src="https://raw.githubusercontent.com/thelmaijemma/WellFind/master/src/logo/WellFindLogos/WFTransparentDark.png" />See Listing | Map</button></div>
                <div className="card-body">
                  <h4 className="card-title">{listing.listing_name}</h4>
                  <p className="card-text">Nearby: {listing.areas}</p>
                  
                  <span className="tag-light">{listing.tags}</span>
   
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
                      <span className="tag-light large">{listing.tags}</span>
                      <div className="add-tags-form">
                        <form id={this.state.ring[index]+"2"} onSubmit={(e) =>this.handleAddTag(e, listing.business_id, listing.tags)}>
                          <label htmlFor="tags" className="form-label padmore">Add A Tag To This Listing</label>
                          <input type="text" value={this.state.submittedTags} onChange={(e)=>this.setState({submittedTags:e.target.value})} className="form-control" id="tags"/>
                          <button type="submit" className="btn bg-info btn-sm submit-modal">Submit</button>
                        </form>
                        { this.state.hadTags === listing.business_id && this.state.success ? <span class="badge bg-success">Success</span> : <p></p>}
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