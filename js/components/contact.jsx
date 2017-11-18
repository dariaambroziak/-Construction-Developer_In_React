import React from 'react';

export class Contact extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            tel: '',
            mail: '',
            message: '',
            messageToRender: '',
            infoColor: 'green'
        }
    }

    handleNameChange = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    handleMailChange = (event) => {
        this.setState({
            mail: event.target.value
        })
    }

    handleTelChange = (event) => {
         this.setState({
            tel: event.target.value
        })
    }

    handleMessageChange = (event) => {
        this.setState({
            message: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();

        if (this.state.name === ""){
            this.setState({
                messageToRender: "Please enter a valid name!",
                infoColor: "red"
            })
            return
        }
        else if ((this.state.mail.indexOf("@")< 0) || (this.state.mail === "")) {
            this.setState({
                messageToRender: "Please enter a valid email",
                infoColor: "red"
            })
            return
        }
        else if (this.state.message === "") {
            this.setState({
                messageToRender: "Empty message!",
                infoColor: "red"
            })
             return
        }
        this.setState({
            messageToRender: "Thank you for your message. We will contact you within 24 hours.",
            infoColor: "green"
        })
        return
    }

    render(){
        return(<div>
            <div className="frame">
              <div className="col-sm-12 col-md-6 col-lg-6 item">
                 <h2>PLEASE CONTACT US</h2>
                 <h3> Sales office in the investment area.</h3>
                 <p>ul: Mehoffera 32</p>
                 <p>03-131 Warsow</p>
                 <p>Tel: +48 565 565 565</p>
                 <p>E-mail: sold@neo-block.eu</p>
                 <p>NIP: 525-001-16-22</p>
                 <p>REGON: 000489805</p>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-6 contactWithUs">
                <br/>
                <br/>
                <br/>
                <h3>Leave your details will contact you.</h3>
                <br/>            
                  <form >
                      <input onChange={this.handleNameChange} value={this.state.name} className="item__form" placeholder="Name"/>
                      <input onChange={this.handleTelChange} value={this.state.tel} className="item__form" placeholder="Tel"/>
                      <input onChange={this.handleMailChange} type="email" className="item__form" placeholder="E-mail"/>
                      <textarea onChange={this.handleMessageChange} value={this.state.message}
                                className="item__form" placeholder="Message">ggg</textarea>
                      <input type="submit" onClick={this.handleSubmit} value="SEND" className="send"/>
                  </form>
                <p style={ {color: this.state.infoColor} }>{this.state.messageToRender}</p>
              </div>
            </div>
          </div>
        )
    }
}



export default Contact ;
