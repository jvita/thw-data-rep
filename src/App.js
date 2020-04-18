import React, {Component} from 'react';
import axios from 'axios';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedFile: null
    }

  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <form method="post" action="#" id="#">

              <div className="form-group files color">
                <label>Upload Your File </label>
                <input type="file" className="form-control" multiple={true} onChange={this.onChangeHandler}/>
              </div>

            </form>

            <button type="button" className="btn btn-success btn-block" onClick={this.onClickHandler}>Upload</button>

          </div>
        </div>
      </div>
    )
  }

  onClickHandler = () => {
    const data = new FormData()

    for(var x = 0; x < this.state.selectedFile.length; x++) {
      data.append('file', this.state.selectedFile[x])
    }

    axios.post("http://localhost:8000/upload", data, { // receive two parameter: endpoint url and form data
    })
      .then(res => { // then print response status
        console.log('Response status:', res.statusText)
      })
      .catch(error => {
        console.log(error.response)
      });
  }

  onChangeHandler = event =>{

    console.log(event.target.files)

    this.setState({
      selectedFile: event.target.files,
      loaded: 0,
    })

  }

}

export default App;
