import React from "react";
import { Grid } from "material-ui";

import { RegularCard, Table, ItemGrid } from "components";

const tableData = [{
  Name: 'Saikat Bhattacharya',
  LastVisitedDate: Date.now(),
  TotalLiveTimeValue: '\u20B9 2034.00'
}];
function TableList({ ...props }) {
  return (
    <Grid container>
      <ItemGrid xs={12} sm={12} md={12}>
        <RegularCard
          cardTitle="Simple Table"
          cardSubtitle="Here is a subtitle for this table"
          content={
            <Table
              tableHeaderColor="primary"
              tableData={tableData}
            />
          }
        />
      </ItemGrid>
    </Grid>
  );
}

export default TableList;
