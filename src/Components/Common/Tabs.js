import React, { useState } from "react";

import TabsHeader from "@material-ui/core/Tabs";
import { Tab, Box } from "@material-ui/core";

const Tabs = (props) => {
  const { tabHeadings = [], children = [], initTabIndex = 0 } = props;

  const tabsLength = tabHeadings.length;

  const [value, setValue] = useState(initTabIndex);

  const handleChange = (e, i) => setValue(i);

  return <>
    <TabsHeader
      value={value}
      onChange={handleChange}
      indicatorColor="secondary"
      textColor="secondary"
      variant="fullWidth"
      aria-label="full width tabs example"
    >
      {tabHeadings.map((v,i) => <Tab key={i} label={v} />)}
    </TabsHeader>
    {children.slice(0, tabsLength).map((v, i) => (
      <Box key={i} hidden={i !== value}>{v}</Box>
    ))}
  </>;
};

export default Tabs;