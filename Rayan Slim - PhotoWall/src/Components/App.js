import { Route } from 'react-router-dom';
import React, { Component } from 'react';
import Title from './Title';
import PhotoWall from './Photowall';
import './App.css';
import AddPhoto from './AddPhoto';


class App extends Component {
  constructor() {
    console.log('constructor');
    super();
    this.state = {
      posts: [
        {
          id: 0,
          description: "beautiful landscape",
          imageLink: "https://image.jimcdn.com/app/cms/image/transf/none/path/sa6549607c78f5c11/image/i4eeacaa2dbf12d6d/version/1490299332/most-beautiful-landscapes-in-europe-lofoten-european-best-destinations-copyright-iakov-kalinin.jpg" +
            "3919321_1443393332_n.jpg"
        },
        {
          id: 1,
          description: "Aliens???",
          imageLink: "https://pe-images.s3.amazonaws.com/photo-effects/cc/stars/original-image.jpg"
        },
        {
          id: 2,
          description: "On a vacation!",
          imageLink: "https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2017/08/24/104670887-VacationExplainsTHUMBWEB.1910x1000.jpg"
        }],
      
    };
    this.removePhoto = this.removePhoto.bind(this);
    this.addPhotoUpdate = this.addPhotoUpdate.bind(this);
    
  }
  componentDidMount() {
    console.log('DidMount component');
  }

  addPhotoUpdate(postUpdated) {
    this.setState(state => {
      posts: state.posts.concat([postUpdated])
    });
  }

  removePhoto(postRemoved) {
    console.log(postRemoved.description);
    this.setState(state => ({
      posts: state.posts.filter(p => p !== postRemoved)
    }));
  } 
  

  render() {
    console.log('render');
    return (   
      <div> 

        <Route
          exact path="/" render={() =>
          (<div>
              <Title title={'PhotoWall'} />
            <PhotoWall
              posteds={this.state.posts} onRemovePhoto={this.removePhoto}
              onNavigate={this.navigate}
            />
          </div>)}
        />
        
        <Route exact path="/AddPhoto" component={AddPhoto} />
              
      </div>
    );
  }
}
export default App;
