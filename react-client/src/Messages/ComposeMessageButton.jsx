import React from 'react';
import Modal from 'react-modal';
import { connect } from 'react-redux';
import ComposeMessage from './ComposeMessage.jsx';
import modalStyle from './modalStyles';

class ComposeMessageButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    const { sender, receiver, header, body, userProfile } = this.props;
    return (
      <div id="compose-message-popover">
        <button className="send-message" onClick={this.toggle}> Compose Message </button>
        <Modal isOpen={this.state.isOpen} style={modalStyle}>
          <button onClick={this.toggle}> Close Message </button>
          <ComposeMessage
            toggle={this.toggle}
            sender={sender}
            receiver={userProfile || receiver}
            header={header}
            body={body}
          />
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => (
  {
    sender: state.navBar.user,
    receiver: state.message.receiver,
    header: state.message.header,
    body: state.message.body
  }
);
const mapDispatchToProps = dispatch => (
  {
    onMessageClose: () => dispatch()
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(ComposeMessageButton);
