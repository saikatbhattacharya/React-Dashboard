import React from "react";
import { Grid } from "material-ui";

import { RegularCard, Table, ItemGrid } from "components";
import {tableData} from './dummydata'

function TableList({ ...props }) {
  return (
    <Grid container>
      <ItemGrid xs={12} sm={12} md={12}>
        <RegularCard
          cardTitle="Customer Management"
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
