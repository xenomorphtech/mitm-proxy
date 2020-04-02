/***
 Use this component inside your ReactJS Application.
 A scrollable list with different item type
 */
import React from 'react';
import { RecyclerListView, DataProvider, LayoutProvider } from 'recyclerlistview/web';

let containerCount = 0;

/***
 * To test out just copy this component and render in you root component
 */
export default class RecyclerView extends React.Component {
  constructor(props) {
    super(props);

    let width = window.innerWidth;

    //Create the data provider and provide method which takes in two rows of data and return if those two are different or not.
    let dataProvider = new DataProvider((r1, r2) => {
      return r1 !== r2;
    });

    //Create the layout provider
    //First method: Given an index return the type of item e.g ListItemType1, ListItemType2 in case you have variety of items in your list/grid
    //Second: Given a type and object set the height and width for that type on given object
    //If you need data based check you can access your data provider here
    //You'll need data in most cases, we don't provide it by default to enable things like data virtualization in the future
    //NOTE: For complex lists LayoutProvider will also be complex it would then make sense to move it to a different file
    this._layoutProvider = new LayoutProvider(
      index => {
        // if (index % 3 === 0) {
        //     return ViewTypes.FULL;
        // } else if (index % 3 === 1) {
        //     return ViewTypes.HALF_LEFT;
        // } else {
        //     return ViewTypes.HALF_RIGHT;
        // }
        return index;
      },
      (type, dim) => {
        dim.width = width;
        dim.height = 140;
      }
    );

    this._rowRenderer = this._rowRenderer.bind(this);

    //Since component should always render once data has changed, make data provider part of the state
    this.state = {
      dataProvider: dataProvider.cloneWithRows(this.props.dataList),
    };
  }

  //Given type and data return the view component
  _rowRenderer(type, data) {
    return this.props.view(data);
  }


  render() {
    return (
      <RecyclerListView
        useWindowScroll={true}
        layoutProvider={this._layoutProvider}
        dataProvider={this.state.dataProvider}
        rowRenderer={this._rowRenderer}
      />
    );
  }
}