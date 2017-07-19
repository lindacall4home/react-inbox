import React from 'react'

class Toolbar extends React.Component {

  getSelectButtonClass = () => {
    let buttonClass = 'fa ';
    if(this.props.messages.every(message => message.selected)){
      buttonClass += 'fa-check-square-o';
    }
    else if(this.props.messages.some(message => message.selected)){
      buttonClass += 'fa-minus-square-o';
    }
    else{
      buttonClass += 'fa-square-o';
    }
    return buttonClass;
  }

  selectAllClickHandler = () => {
    this.props.selectAllMessages(!this.props.messages.every(message => message.selected));
  }

  render() {
    return (

      <div className="row toolbar">
        <div className="col-md-12">
          <p className="pull-right">
            <span className="badge badge">{this.props.messages.filter(message => (message.read === false)).length}</span>
            unread {(this.props.messages.filter(message => (message.read === false)).length === 1) ? 'message' : 'messages'}
          </p>

          <button className="btn btn-default" onClick={this.selectAllClickHandler}>
            <i className={this.getSelectButtonClass()}></i>
          </button>

          <button className="btn btn-default" onClick={() => this.props.setMessageRead(true)}>
            Mark As Read
          </button>

          <button className="btn btn-default" onClick={() => this.props.setMessageRead(false)}>
            Mark As Unread
          </button>

          <select value="apply" className="form-control label-select" onChange={(e) => this.props.addLabel(e.target.value)}>
            <option disabled value="apply">Apply label</option>
            <option value="dev">dev</option>
            <option value="personal">personal</option>
            <option value="gschool">gschool</option>
          </select>

          <select value="remove" className="form-control label-select" onChange={(e) => this.props.removeLabel(e.target.value)}>
            <option disabled value="remove">Remove label</option>
            <option value="dev">dev</option>
            <option value="personal">personal</option>
            <option value="gschool">gschool</option>
          </select>

          <button className="btn btn-default" onClick={() => this.props.deleteMessages()}>
            <i className="fa fa-trash-o" ></i>
          </button>
        </div>
      </div>

    )
  }
}

export default Toolbar
