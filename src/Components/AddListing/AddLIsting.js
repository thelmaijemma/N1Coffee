import React from 'react';
import './AddListing.css';

const AddListing = () => {
    return (
<div className="add-listing">
  <h4 className="card-title"><img class="add-listing-logo" src="logo\WellFindLogos\WF Transparent Dark.png" />Add A Listing</h4>
<form>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Listing Name</label>
    <input type="email" className="form-control" id="exampleInputEmail1" placeholder="listing name - location(if multiple)" />
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Google Plus ID</label>
    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="GH75385 London"/>
    <div id="emailHelp" className="form-text" ><button type="button" className="btn shadow-none btn-primary text-muted btn-sm" data-bs-toggle="modal" data-bs-target="#google-modal">How Can I Find This</button></div>
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
    <label for="exampleTextarea" className="form-label mt-4">Comma Separated Tags (min. 3, see suggestions)</label>
   <div className="suggested-tags-swing">
    <span className="badge rounded-pill bg-secondary">Secondary</span>
    <span className="badge rounded-pill bg-secondary">Secondary</span>
    <span className="badge rounded-pill bg-secondary">Secondary</span>
    <span className="badge rounded-pill bg-secondary">Secondary</span>
    </div>
    <textarea className="form-control suggested-tags" id="exampleTextarea" rows="3" placeholder="zero-waste, organic, therapy"></textarea>
  </div>
  <div className="tags-submit">
  <button type="submit" className="btn btn-primary btn-sm">Submit</button>
    </div>
</form>
</div>
)
}

export default AddListing