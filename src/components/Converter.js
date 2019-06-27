import React from "react";
import "../styles/style.css";
class Converter extends React.Component {
  constructor() {
    super();
    this.state = {
        base64data: ""
    }
    this.encodeImageFileAsURL = this.encodeImageFileAsURL.bind(this)
  }

 



  encodeImageFileAsURL(selectorFile) {
      
    if(selectorFile.length > 0){
        let file = selectorFile[0];
        let filereader = new FileReader();
        filereader.readAsDataURL(file);

        filereader.onload = () => {

            let fileInfo = {
              name: file.name,
              type: file.type,
              size: Math.round(file.size / 1000) + ' kB',
              base64: filereader.result,
              file: file,
            };

            this.setState({base64data:fileInfo.base64})

        }
    }

    
    }
    
    copyText = () => {
        this.refs.input.select();

        document.execCommand('copy');

        return false;
    }


  render() {
    console.log(this.state.base64data)
    return (
      <div className="Container" style={container}>
          <header style={heading}>
              <p>Image to base64 converter</p>
              </header>
        <input
          id="inputFileToLoad"
          type="file"
          onChange={(e)=>this.encodeImageFileAsURL(e.target.files)}
        />

        <div>
        <button onClick={ this.copyText }>
                Copy Data...

                <input
                    ref="input"
                    type="text"
                    defaultValue={ this.state.base64data }
                    style={{ position: 'fixed', top: '-1000px' }} />
            </button>
        </div>
      </div>
    );
  }
}

const container = {
      height:"100%"
}
const heading = {
    height: "4rem",
    justifyContent: "center",
    alignItems: "center",
    border: "1px solid",
    paddingLeft: "2rem"
}

export default Converter;
