import React, { useRef, useEffect } from "react";
import { AutoSizer, List } from "react-virtualized";

const Virtualized = (props) => {

  const list = useRef(null);

  const {
    dataArray,
    rowHeight,
    overscan,
    useDynamicRowHeight,
    getRowHeight,
    rowRenderer,
    scrollToIndex
  } = props;

  useEffect(() => {
    list.current.recomputeRowHeights();
  }, [dataArray]);

  const overscanRowCount = overscan;
  const rowCount = dataArray.length;

  return (
    <AutoSizer>
      {({ height, width }) => (
        <List
          ref={list}
          height={height}
          overscanRowCount={overscanRowCount}
          rowCount={rowCount}
          rowHeight={useDynamicRowHeight ? getRowHeight : rowHeight}
          rowRenderer={rowRenderer}
          width={width}
          scrollToIndex={scrollToIndex}
        />
      )}
    </AutoSizer>
  );
};

export default Virtualized;