import React from 'react';
import {View, Dimensions} from 'react-native';
import RoutePanelBody from './RoutePanelBody'; 

import SlidingUpPanel from 'rn-sliding-up-panel';

const HEIGHT = Dimensions.get('window').height * .55;

const PATTERNS = [
    {name: 'Name One', stops: [{stop: { name: 'one'}}, {stop: { name: 'one'}}, {stop: { name: 'one'}}, {stop: { name: 'one'}}, {stop: { name: 'one'}}, {stop: { name: 'one'}}, {stop: { name: 'one'}}, {stop: { name: 'one'}}, {stop: { name: 'one'}}, {stop: { name: 'one'}}, {stop: { name: 'one'}}, {stop: { name: 'one'}}, {stop: { name: 'one'}}, {stop: { name: 'one'}}, {stop: { name: 'one'}}, {stop: { name: 'one'}}, {stop: { name: 'one'}}] },
    {name: 'Name Two', stops: [{stop: { name: 'two'}}, {stop: { name: 'two'}}, {stop: { name: 'two'}}, {stop: { name: 'two'}}, {stop: { name: 'two'}}, {stop: { name: 'two'}}, {stop: { name: 'two'}}, {stop: { name: 'two'}}, {stop: { name: 'two'}}, {stop: { name: 'two'}}, {stop: { name: 'two'}}, {stop: { name: 'two'}}, {stop: { name: 'two'}}, {stop: { name: 'two'}}, {stop: { name: 'two'}}, {stop: { name: 'two'}}, {stop: { name: 'two'}}] },

]


class BottomPanel extends React.Component {

  constructor(props) {
      super(props);

      this.state = {
        allowDragging: true,
        hasScrolled: false
      };

      this.setDraggable = this.setDraggable.bind(this);
  }

  setDraggable(val) {
    this.setState({allowDragging: val});
  }

  render() {
      return (
        <View>
          <SlidingUpPanel 
              ref={c => this._panel = c}
              draggableRange={{top: HEIGHT, bottom: 140}}
              height={HEIGHT}
              allowDragging={this.state.allowDragging}
          >
              <RoutePanelBody 
                patterns={PATTERNS} 
                updateDrag={this.setDraggable}
                color={'red'}
              />
          </SlidingUpPanel>
        </View>
      )
    }
}

export default BottomPanel;