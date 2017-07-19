import React from 'react';

class Message extends React.Component {


  starClickHandler = (e) => {
    this.props.appState.toggleStar(this.props.message.id);
  }

  checkBoxHandler = (e) => {
    this.props.appState.toggleSelected(this.props.message.id);
  }


  render() {
    let aggClassName = 'row message ' + ((this.props.message.read) ? 'read ' : 'unread ') + ((this.props.message.selected) ? 'selected' : '');

      return (
      <div className={aggClassName} >
        <div className="col-xs-1">
          <div className="row">
            <div className="col-xs-2">
              <input type="checkbox" checked={this.props.message.selected === true ? true: false} onChange={this.checkBoxHandler}/>
            </div>
            <div className="col-xs-2">
              <i className={(this.props.message.starred) ? "star fa fa-star" : "star fa fa-star-o"} onClick={this.starClickHandler}></i>
            </div>
          </div>
        </div>
        <div className="col-xs-11">
         {this.props.message.labels.map((label, index) => (<span className="label label-warning" key={index}>{label}</span>))}
          <a href="/someplace">
            {this.props.message.subject}
          </a>
        </div>
      </div>
    );
  }
}

export default Message
