import React from 'react';
import './AddListing.css';

class AddListing extends React.Component {
  constructor(props) {
    super(props)
    this.handleAddListing = this.handleAddListing.bind(this);
    this.state = {
      name: '',
      place: '',
      tags: '',
      success: ''

    }

  }

  handleAddListing(e){
    e.preventDefault();
    console.log(this.state.name, this.state.place, this.state.tags)

const data = {
  name: this.state.name,
  address: this.state.place,
        tags: this.state.tags
}
   fetch('https://wellfindapi.herokuapp.com/api/listings/submit.php',
    {
      method: 'POST',
      headers: {
      'Access-Control-Allow-Headers' : '*',
      'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    }) 
    .then(res => res.json())
    .then(res => {
      console.log(res)
    })
    this.setState({
      success: 'yes'
    })
   
  }


  render(){
    return (
<div className="add-listing" id="addlisting">
  <h4 className="card-title"><img className="add-listing-logo" src="https://raw.githubusercontent.com/thelmaijemma/WellFind/master/src/logo/WellFindLogos/WFTransparentDark.png" />Add A Listing</h4>
<form  onSubmit={(e) =>this.handleAddListing(e)}>
  <div className="mb-3">
    <label htmlFor="listinginput" className="form-label">Listing Name</label>
    <input type="text" className="form-control" id="listinginput" placeholder="listing name - branch location(optional)" value={this.state.name} onChange={(e)=>this.setState({name:e.target.value})} />
  </div>
  <div className="mb-3">
    <label htmlFor="address" className="form-label">Address (or Google Plus Code)</label>
    <input type="text" className="form-control" id="address" placeholder="Bahnhofpl. 2, 80335 Muenchen" value={this.state.place} onChange={(e)=>this.setState({place:e.target.value})}/>
    <div id="emailHelp" className="form-text" ><button type="button" className="btn shadow-none btn-primary text-muted btn-sm" data-bs-toggle="modal" data-bs-target="#google-modal">Google Plus Code: How Can I Find This? <i className="fas fa-external-link-alt"></i></button></div>
     </div>
     <div className="modal" id="google-modal">
      <div className="modal-dialog" role="document">
        <div className="modal-content bg-light">
          <div className="modal-body">
      <p className="card-text">Desktop: click on the listing via a google search. The google plus code is located
     by the website and phone number. Click to copy. Mobile: the google plus code is on the Google Maps listing.
      </p>
          </div>
      </div>
    </div>
    </div>
  <div className="form-group">
    <label htmlFor="tagtextarea" className="form-label mt-4">Comma Separated Tags (min. 3, see suggestions)</label>
   <div className="suggested-tags-swing">
    <span className="badge rounded-pill bg-secondary">Refill-Detergent</span>
    <span className="badge rounded-pill bg-secondary">Refill-Food</span>
    <span className="badge rounded-pill bg-secondary">Organic-Beauty</span>
    </div>
    <textarea className="form-control suggested-tags" id="tagtextarea" rows="2" placeholder="zero-waste, organic, therapy" value={this.state.tags} onChange={(e)=>this.setState({tags:e.target.value})}></textarea>
  </div>
  <div className="tags-submit">
  <button type="submit" className="btn btn-primary btn-sm">Submit</button>
    {this.state.success ? <button type="button" class="btn btn-primary disabled btn-sm green"> Listing Under Review, Thanks! </button> : <p></p>}
    </div>
</form>
</div>
)
    }
}

export default AddListing