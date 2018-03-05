import React from 'react';
import './Draft.css';
import DraftNameInput from './DraftNameInput';
import DraftItemCounter from './DraftItemCounter';
import DraftItem from './DraftItem';
import Track from './Track';

class Draft extends React.Component {
  constructor(props) {
    super(props);

    this.state = {name: '', selectedTrack: null};
  }

  handleNameChange = (e) => {
    this.setState({name: e.target.value});
  }

  handleItemClick = (value) => {
    let track = this.props.items.find(item => item.id === value.id);

    const selectedTrack = track === this.state.selectedTrack ? null : track;

    this.setState({selectedTrack: selectedTrack});
  }

  render() {
    return (
      <div className="Draft">
        <div className="Draft-col1">
          <div className="Draft-header">
            <div style={{color: 'rgba(255,255,255,.5)'}}>
              <span>{this.state.name}</span> 
              &nbsp;&#9642;&nbsp;
              <DraftItemCounter items={this.props.items} />
            </div>
            <DraftNameInput name={this.props.name} onChange={this.handleNameChange} />
          </div>          
          <div className="Draft-table">
            <div className="Draft-table-header">
              <div style={{flex: 'none', width: '13.5rem'}}>Name</div>
              <div style={{flex: 'auto'}}>Artist</div>
            </div>
            <div className="Draft-table-body">
              {this.props.items.map((item, i) => (
                <DraftItem 
                  key={item.id} 
                  item={item} 
                  selected={item === this.state.selectedTrack}
                  onClick={this.handleItemClick} />
              ))}
            </div>
          </div>
        </div>
        <div className="Draft-col2">
          {this.state.selectedTrack && <Track track={this.state.selectedTrack} />}
        </div>
      </div>
    );
  }
}

export default Draft;
