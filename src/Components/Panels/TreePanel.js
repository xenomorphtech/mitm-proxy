import React from "react";

import Box from "@material-ui/core/Box";
import TreeView from "@material-ui/lab/TreeView";
import TreeItem from "@material-ui/lab/TreeItem";

import Panel from "./../Common/Panel";

const TreePanel = (props) => {

  const { data, collapseIcon, expandIcon } = props;

  const renderTree = (nodes) => (
    <TreeItem key={nodes.id} nodeId={nodes.id} label={nodes.name}>
      {Array.isArray(nodes.children) ? nodes.children.map((node) => renderTree(node)) : null}
    </TreeItem>
  );

  return (
    <Panel heading="Tree">
      <Box className="w-100">
        <TreeView
          defaultCollapseIcon={collapseIcon}
          defaultExpanded={['root']}
          defaultExpandIcon={expandIcon}
        >
          {renderTree(data)}
        </TreeView>
      </Box>
    </Panel>
  );
};

export default TreePanel;