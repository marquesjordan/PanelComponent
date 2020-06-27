import React from 'react';
import {View, Dimensions, PanResponder} from 'react-native';
import RoutePanelBody from './RoutePanelBody'; 

import SlidingUpPanel from 'rn-sliding-up-panel';

const HEIGHT = Dimensions.get('window').height * .55;

const PATTERNS = [
    {name: 'Name One', stops: [{stop: { name: 'one'}}, {stop: { name: 'one'}}, ] },
    {name: 'Name Two', stops: [{stop: { name: 'two'}}, {stop: { name: 'two'}}, {stop: { name: 'two'}}, {stop: { name: 'two'}}, {stop: { name: 'two'}}, {stop: { name: 'two'}}, {stop: { name: 'two'}}, {stop: { name: 'two'}}, {stop: { name: 'two'}}, {stop: { name: 'two'}}, {stop: { name: 'two'}}, {stop: { name: 'two'}}, {stop: { name: 'two'}}, {stop: { name: 'two'}}, {stop: { name: 'two'}}, {stop: { name: 'two'}}, {stop: { name: 'two'}}] },

]


class BottomPanel extends React.Component {
  _onGrant(evt, gestureState) {
    console.log('grant')
    this.setState({ dragPanel: false });
    return true;
  }
  
  _onRelease(evt, gestureState) {
    if(this.innerScrollRef.current._listRef._scrollMetrics.dt === 0) {
      console.log('REl ', this.innerScrollRef.current._listRef._scrollMetrics.dt)

      this.setState({ dragPanel: true });
    }
  }

  constructor(props) {
      super(props);

      this.state = {
        allowDragging: true,
        hasScrolled: false,
        isAtTop: false,
        innerScroll: 0
      };

      this.setDraggable = this.setDraggable.bind(this);
      this.setInnerScrollPosition = this.setInnerScrollPosition.bind(this);
      this._onGrant = this._onGrant.bind(this);
      this._onRelease = this._onRelease.bind(this);
    
      this._panResponder = PanResponder.create({
        onMoveShouldSetPanResponder: this._onGrant,
        onPanResponderTerminate: this._onRelease
      });
      this.innerScrollRef = React.createRef();
  }

  setDraggable(val) {
    this.setState({allowDragging: val});
  }

  setInnerScrollPosition(val) {
    this.setState({innerScroll: val});
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
                dragHandler={this._panResponder.panHandlers}
                setInnerScroll={this.setInnerScrollPosition}
                forwardedRef={this.innerScrollRef}
              />
          </SlidingUpPanel>
        </View>
      )
    }
}

export default BottomPanel;