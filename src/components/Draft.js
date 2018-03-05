import React from 'react';
import './Draft.css';
import DraftNameInput from './DraftNameInput';
import DraftItemCounter from './DraftItemCounter';
import DraftItem from './DraftItem';
import Track from './Track';

class Draft extends React.Component {
  render() {
    return (
      <div className="Draft">
        <div className="Draft-col1">
          <div className="Draft-header">
            <div style={{color: 'rgba(255,255,255,.5)'}}>
              {this.props.name} &#9642; <DraftItemCounter items={this.props.items} />
            </div>
            <DraftNameInput name={this.props.name} />
          </div>          
          <div class="Draft-table">
            <div class="Draft-table-header">
              <div style={{flex: 'none', width: '13.5rem'}}>Name</div>
              <div style={{flex: 'auto'}}>Artist</div>
            </div>
            <div class="Draft-table-body">
              {this.props.items.map(
                  (item, i) => <DraftItem key={item.id} item={item} selected={i === 0} />
              )}
            </div>
          </div>
        </div>
        <div className="Draft-col2">
          <Track track={this.props.items[0]} />
        </div>
      </div>
    );
  }
}

export default Draft;
