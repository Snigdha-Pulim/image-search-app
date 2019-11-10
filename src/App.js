import React from 'react';
import axios from 'axios';
import Navbar from "./Navbar";
import Display from "./images_display";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      search:"",
      images:[],
      search_images:[],
      switch:false
    }
  }
  returned_from_search_bar=x=>{
    this.setState({
      search:x
    });
    if(this.state.search!=="")
    {
      console.log(this.state.search);
      axios
        .get(
          `https://api.unsplash.com/search/photos?page=1&query=${this.state.search}&client_id=2eeedee0d95bf4af0893329f35b15a37867c2da8d2d606a46d581b02bd248c9b`
        )
        .then(a => {
          console.log(a);
          const temp1 = [];
          a.data.results.map(i => {
            const temp = {
              image: i.urls.thumb,
              likes: i.likes,
              username: i.user.username,
              profile_picture: i.user.profile_image.small
            };
            temp1.push(temp);
          });
          this.setState({ search_images: temp1 });
        });

      this.change_switch();
    }
    else
    {
      this.setState({
        switch:false
      })
    }
    
  }
  change_switch=()=>{
      this.setState({
        switch:true
      });

  }
  componentDidMount() {
    axios.get('https://api.unsplash.com/photos?page=1&client_id=2eeedee0d95bf4af0893329f35b15a37867c2da8d2d606a46d581b02bd248c9b')
    .then(a=>{
      const temp1=[];
      a.data.map(i=>{
        const temp = {
      "image":i.urls.thumb,
      "likes":i.likes,
      "username":i.user.username,
      "profile_picture":i.user.profile_image.small
      };
      temp1.push(temp)
      })
      this.setState({images:temp1});
    })
}

render() {
    return (
      <div>
        <Navbar search={this.returned_from_search_bar} />
        <div className="container">
          <div className="row">
            {this.state.switch
              ? this.state.search_images.map(i => {
                  return (
                    <div className="col-5">
                      <Display
                        image={i.image}
                        username={i.username}
                        profile_picture={i.profile_picture}
                        likes={i.likes}
                      />
                    </div>
                  );
                })
              : this.state.images.map(i => {
                  return (
                    <div className="col-5">
                    <Display
                      image={i.image}
                      username={i.username}
                      profile_picture={i.profile_picture}
                      likes={i.likes}
                    />
                    </div>
                  );
                })}
                </div>
        </div>
      </div>
    );
}


}



export default App;
