import React, { Component } from 'react';

import { connect } from 'react-redux';
import { searchPhotos } from '../actions/index';
import { bindActionCreators } from 'redux';

class PhotoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ''
    }
  }

  handleInputChange(search) {
    this.setState({search: search});
  }

  renderList() {
    console.log('renderList Called');
    if(this.props.photos instanceof Array && this.props.photos.length > 0) {
      return this.props.photos.map((photo) => {
        return (
          <li
            key={photo.webformatURL}
            className='list-group-item col-md-3'>
            <img src={photo.webformatURL}/>
          </li>
        )
      })
    } else if(this.props.photos instanceof Array && this.props.photos.length === 0){
      return [{webformatURL: 'https://static.pexels.com/photos/12570/photo-1443926818681-717d074a57af.jpeg'}].map((photo) => {
        return (
          <li
            key={photo.imageurl}
            className='list-group-item col-md-12 text-center initialImage' >
            <p className="extraMessage">No photos found, try something else...</p>
            <img src={photo.webformatURL}/>
          </li>
        )
      })
    } else {
      return [{webformatURL: 'https://static.pexels.com/photos/12570/photo-1443926818681-717d074a57af.jpeg'}].map((photo) => {
        return (
          <li
            key={photo.imageurl}
            className='list-group-item col-md-12 text-center initialImage' >
            <p className="extraMessage">Welcome, search for images if you please...</p>
            <img src={photo.webformatURL}/>
          </li>
        )
      })
    }
  }

  render() {
    return (
      <div className="list-group-item searchDiv">
        <h1 className="mainHeader">React.JS Redux Image Search...</h1>
        <input
          type="text"
          placeholder="Search..."
          value={this.state.search}
          onChange={(event) => this.handleInputChange(event.target.value)}/>
        <input type="button" className="searchButton" value="Search images..." onClick={() => {
            this.props.searchPhotos(this.state.search);
            this.setState({search: ''});
          }
        }/>

        <ul className='list-group'>
          {this.renderList()}
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    photos: state.photos
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    searchPhotos: searchPhotos
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PhotoList);
