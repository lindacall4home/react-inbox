import React from 'react'

class Toolbar extends React.Component {

  getSelectButtonClass = () => {
    let buttonClass = 'fa ';
    if(this.props.appState.messages.every(message => message.selected)){
      buttonClass += 'fa-check-square-o';
    }
    else if(this.props.appState.messages.some(message => message.selected)){
      buttonClass += 'fa-minus-square-o';
    }
    else{
      buttonClass += 'fa-square-o';
    }
    return buttonClass;
  }

  selectAllClickHandler = () => {
    this.props.appState.selectAllMessages(!this.props.appState.messages.every(message => message.selected));
  }

  render() {
    return (

      <div className="row toolbar">
        <div className="col-md-12">
          <p className="pull-right">
            <span className="badge badge">{this.props.appState.unread}</span>
            unread {(this.props.appState.unread === 1) ? 'message' : 'messages'}
          </p>

          <button className="btn btn-default" onClick={this.selectAllClickHandler}>
            <i className={this.getSelectButtonClass()}></i>
          </button>

          <button disabled={!this.props.appState.messages.some(message => message.selected)} className="btn btn-default" onClick={() => this.props.appState.setMessageRead(true)}>
            Mark As Read
          </button>

          <button disabled={!this.props.appState.messages.some(message => message.selected)} className="btn btn-default" onClick={() => this.props.appState.setMessageRead(false)}>
            Mark As Unread
          </button>

          <select disabled={!this.props.appState.messages.some(message => message.selected)} value="apply" className="form-control label-select" onChange={(e) => this.props.appState.addLabel(e.target.value)}>
            <option disabled value="apply">Apply label</option>
            <option value="dev">dev</option>
            <option value="personal">personal</option>
            <option value="gschool">gschool</option>
          </select>

          <select disabled={!this.props.appState.messages.some(message => message.selected)} value="remove" className="form-control label-select" onChange={(e) => this.props.appState.removeLabel(e.target.value)}>
            <option disabled value="remove">Remove label</option>
            <option value="dev">dev</option>
            <option value="personal">personal</option>
            <option value="gschool">gschool</option>
          </select>

          <button disabled={!this.props.appState.messages.some(message => message.selected)} className="btn btn-default" onClick={() => this.props.appState.deleteMessages()}>
            <i className="fa fa-trash-o" ></i>
          </button>
        </div>
      </div>

    )
  }
}

export default Toolbar
