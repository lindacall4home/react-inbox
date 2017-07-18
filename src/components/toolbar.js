import React from 'react'

class Toolbar extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      messages: this.props.messages
    }
  }

  getSelectButtonClass = () => {
    let buttonClass = 'fa ';
    if(this.state.messages.every(message => message.selected)){
      buttonClass += 'fa-check-square-o';
    }
    else if(this.state.messages.some(message => message.selected)){
      buttonClass += 'fa-minus-square-o';
    }
    else{
      buttonClass += 'fa-square-o';
    }
    return buttonClass;
  }

  selectAllClickHandler = (e) => {
    this.props.selectAllMessages(!this.state.messages.every(message => message.selected));
  }

  render() {
    return (

      <div className="row toolbar">
        <div className="col-md-12">
          <p className="pull-right">
            <span className="badge badge">2</span>
            unread messages
          </p>

          <button className="btn btn-default" onClick={this.selectAllClickHandler}>
            <i className={this.getSelectButtonClass()}></i>
          </button>

          <button className="btn btn-default">
            Mark As Read
          </button>

          <button className="btn btn-default">
            Mark As Unread
          </button>

          <select className="form-control label-select">
            <option>Apply label</option>
            <option value="dev">dev</option>
            <option value="personal">personal</option>
            <option value="gschool">gschool</option>
          </select>

          <select className="form-control label-select">
            <option>Remove label</option>
            <option value="dev">dev</option>
            <option value="personal">personal</option>
            <option value="gschool">gschool</option>
          </select>

          <button className="btn btn-default">
            <i className="fa fa-trash-o"></i>
          </button>
        </div>
      </div>

    )
  }
}

export default Toolbar
