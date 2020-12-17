import { Route, Link } from 'react-router-dom';
import React, { Component } from 'react';
import PhotoWall from './Photowall';
import './App.css';
import AddPhoto from './AddPhoto';
//import { removePost } from '../Redux/actions';

class App extends Component {
  constructor() {
    console.log('App constructor loaded');
    super();
    // this.state = {
    //   posts: [
    //     {
    //       id: 1,
    //       description: "beautiful landscape",
    //       imageLink: "https://image.jimcdn.com/app/cms/image/transf/none/path/sa6549607c78f5c11/image/i4eeacaa2dbf12d6d/version/1490299332/most-beautiful-landscapes-in-europe-lofoten-european-best-destinations-copyright-iakov-kalinin.jpg" +
    //         "3919321_1443393332_n.jpg"
    //     },
    //     {
    //       id: 2,
    //       description: "Aliens???",
    //       imageLink: "https://pe-images.s3.amazonaws.com/photo-effects/cc/stars/original-image.jpg"
    //     },
    //     {
    //       id: 3,
    //       description: "On a vacation!",
    //       imageLink: "https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2017/08/24/104670887-VacationExplainsTHUMBWEB.1910x1000.jpg"
    //     }],
      
    // };
    // this.removePhoto = this.removePhoto.bind(this);
    // this.addPhotoUpdate = this.addPhotoUpdate.bind(this);
  }
  // componentDidMount() {
  //   //this.props.dispatch(removePost(1)); IF dont bind Actions to 
  //   //this.props.removePost(1);
  //   console.log('App DidMount component');
  // }

  // addPhotoUpdate(postUpdated) {
  //   this.setState(state => ({
  //     posts: state.posts.concat([postUpdated])
  //   }));
  // }
// removePhoto(postRemoved) {
  //   console.log(postRemoved.description);
  //   this.setState(state => ({
  //     posts: state.posts.filter(p => p !== postRemoved)
  //   }));
  // }
  

  render() {
    console.log('render');
    // console.log(this.state.posts); //without redux
    console.log(this.props);
    console.warn = () => {}
    return (   
      <div> 
        <h2> <Link to='/' >PhotoWall</Link> </h2>
        <Route
          exact path="/" render={() =>
          (<div>
            
            <PhotoWall {...this.props} />
            {/* <PhotoWall posteds={this.props.posts} /> */}
            {/* <PhotoWall
              posteds={this.state.posts} onRemovePhoto={this.removePhoto}
              onNavigate={this.navigate}
            /> */}
          </div>)}
        />
        
        {/*<Route exact path="/AddPhoto" component={AddPhoto} />*/}

        <Route path="/AddPhoto" render={({history}) => (<AddPhoto {...this.props} onHistory={history} />)} />
              
      </div>
    );
  }
}
export default App;
