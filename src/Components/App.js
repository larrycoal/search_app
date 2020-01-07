import React from 'react'
import Axios from 'axios'
import SearchBar from './SearchBar'
import Images from './Images'

class App extends React.Component {
    state ={images : []}
     onSubmit=async (term)=> {
      const Response =await Axios.get('https://api.unsplash.com/search/photos',{
          params:{
              query:term
          },
          headers:{
              Authorization:'Client-ID 1d74ba5a522f93c932031dd4be49739b16526e5a3c97e5bc426691ff62347194'
          }
      })
      this.setState({images:Response.data.results})
    }
    render() {
        return (
            <div className="ui container">
                <SearchBar onSubmit={this.onSubmit} />
                <Images image={this.state.images}/>
            </div>
        )
    }
}

export default App