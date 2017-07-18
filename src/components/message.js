import React from 'react';

class Message extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      message: this.props.message
    }

  }

  starClickHandler = (e) => {
    this.props.toggleStar(this.state.message.id);
  }

  checkBoxHandler = (e) => {
    this.props.toggleSelected(this.state.message.id);
  }


  render() {
    let aggClassName = 'row message ' + ((this.state.message.read) ? 'read ' : 'unread ') + ((this.state.message.selected) ? 'selected' : '');

      return (
      <div className={aggClassName} >
        <div className="col-xs-1">
          <div className="row">
            <div className="col-xs-2">
              <input type="checkbox" checked={this.state.message.selected === true ? true: false} onChange={this.checkBoxHandler}/>
            </div>
            <div className="col-xs-2">
              <i className={(this.state.message.starred) ? "star fa fa-star" : "star fa fa-star-o"} onClick={this.starClickHandler}></i>
            </div>
          </div>
        </div>
        <div className="col-xs-11">
         {this.state.message.labels.map((label, index) => (<span className="label label-warning" key={index}>{label}</span>))}
          <a href="#">
            {this.state.message.subject}
          </a>
        </div>
      </div>
    );
  }
}

export default Message
