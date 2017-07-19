import React, { Component } from 'react';
import './App.css';
import Toolbar from './components/toolbar'
import MessageList from './components/message-list'


const messageData = [
  {
    "id": 1,
    "subject": "You can't input the protocol without calculating the mobile RSS protocol!",
    "read": false,
    "starred": true,
    "labels": ["dev", "personal"]
  },
  {
    "id": 2,
    "subject": "connecting the system won't do anything, we need to input the mobile AI panel!",
    "read": false,
    "starred": false,
    "selected": true,
    "labels": []
  },
  {
    "id": 3,
    "subject": "Use the 1080p HTTP feed, then you can parse the cross-platform hard drive!",
    "read": false,
    "starred": true,
    "labels": ["dev"]
  },
  {
    "id": 4,
    "subject": "We need to program the primary TCP hard drive!",
    "read": true,
    "starred": false,
    "selected": true,
    "labels": []
  },
  {
    "id": 5,
    "subject": "If we override the interface, we can get to the HTTP feed through the virtual EXE interface!",
    "read": false,
    "starred": false,
    "labels": ["personal"]
  },
  {
    "id": 6,
    "subject": "We need to back up the wireless GB driver!",
    "read": true,
    "starred": true,
    "labels": []
  },
  {
    "id": 7,
    "subject": "We need to index the mobile PCI bus!",
    "read": true,
    "starred": false,
    "labels": ["dev", "personal"]
  },
  {
    "id": 8,
    "subject": "If we connect the sensor, we can get to the HDD port through the redundant IB firewall!",
    "read": true,
    "starred": true,
    "labels": []
  }
]

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      messages: messageData,
      unread: 0,

      toggleStar: (messageId) => {

        let messageArr = this.state.messages;
        let selectedMessage = messageArr.find((message) => message.id === messageId);
        selectedMessage.starred = !selectedMessage.starred;

        this.setState({messages: messageArr});
      },

      toggleSelected: (messageId) => {

        let messageArr = this.state.messages;
        let selectedMessage = messageArr.find((message) => message.id === messageId);
        selectedMessage.selected = !selectedMessage.selected;

        this.setState({messages: messageArr});
      },

      selectAllMessages: (selectBool) => {
        let messageArr = this.state.messages;
        let newMessageArr = [];

        if(selectBool){
          newMessageArr = messageArr.map(message => {
            message.selected = true;
            return message;
          })
        }
        else{
          newMessageArr = messageArr.map(message => {
            delete message.selected;
            return message;
          })
        }

        this.setState({messages: newMessageArr,
                      unread: this.getUnreadCount(newMessageArr)});

      },

      setMessageRead: (setBool) => {
        let messageArr = this.state.messages;
        let newMessageArr = [];

        newMessageArr = messageArr.map((message) => {
          if(message.selected){
            message.read = setBool;
          }
          return message;
        })
        this.setState({messages: newMessageArr,
                      unread: this.getUnreadCount(newMessageArr)});
      },

      deleteMessages: () => {
        let messageArr = this.state.messages;
        let newMessageArr = [];

        newMessageArr = messageArr.filter((message) => {
          return !message.selected;
        })
        this.setState({messages: newMessageArr,
                      unread: this.getUnreadCount(newMessageArr)});
      },

      addLabel: (label) => {
        let messageArr = this.state.messages;
        let newMessageArr = [];

        newMessageArr = messageArr.map((message) => {
          if(message.selected){
            if(message.labels.indexOf(label) === -1){
              message.labels.push(label);
            }
          }
          return message;
        })
        this.setState({messages: newMessageArr});

      },

      removeLabel: (label) => {
        let messageArr = this.state.messages;
        let newMessageArr = [];

        newMessageArr = messageArr.map((message) => {
          if(message.selected){
            let remove = message.labels.indexOf(label);
            if (remove > -1){
              message.labels.splice(remove, 1)
            }
          }
          return message;
        })
        this.setState({messages: newMessageArr});
      }
    }
  }

  getUnreadCount = (messagesArray) => {
    let count = messagesArray.filter(message => message.read === false).length;
    console.log('count', count);
    return count;
  }

  componentDidMount(){
    this.setState({unread: this.getUnreadCount(this.state.messages)});
  }

  render() {
    return (
      <div className="container">
        <Toolbar appState={this.state}/>

        <MessageList appState={this.state}/>

      </div>
    );
  }
}

export default App;
