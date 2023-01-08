import { Box, useTheme, Typography } from '@mui/material';
// GridToolbar = data manipulation tools for DataGrid
import { DataGrid } from '@mui/x-data-grid';
import { tokens } from "../../theme";
// select which section of mockData.js to use
import { mockDataInvoices } from "../../data/mockData";
import Header from "../../components/Header"; 

// this component uses Material UI's DataGrid
// https://mui.com/x/react-data-grid/

const Invoices = () => {

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const columns = [
        { field: "id", headerName: "ID" },
        {
          field: "name",
          headerName: "Name",
          flex: 1,
          cellClassName: "name-column--cell",
        },
        {
          field: "phone",
          headerName: "Phone Number",
          flex: 1,
        },
        {
          field: "email",
          headerName: "Email",
          flex: 1,
        },
        {
          field: "cost",
          headerName: "Cost",
          flex: 1,
        // use custom Typography to put the '$' in front and change color
          renderCell: (params) => (
            <Typography color={colors.greenAccent[500]}>
              ${params.row.cost}
            </Typography>
          ),
        },
        {
          field: "date",
          headerName: "Date",
          flex: 1,
        },
      ];


    return (
        <Box m='20px'>
            <Header title="INVOICES" subtitle="List Of Invoice Balances" />
            <Box
            m='40px 0 0 0'
            height='75vh'   // sets height for row; doesn't display until this is set
            // to identify classNames to target, inspect the page and
            // hover over the element; 'class' will be identified in
            // the element definition
            sx={{
                // remove outer border
                '& .MuiDataGrid-root': {
                    border: 'none',
                },
                // remove cell border
                '& .MuiDataGrid-cell': {
                    borderBottom: 'none',
                },
                // set color for items in 'name' column to green
                // from the name item: 'cellClassName: "name-column--cell'
                // is how we can target this specifically
                '& .name-column--cell': {
                    color: colors.greenAccent[300],
                },
                // set background color for column headers
                '& .MuiDataGrid-columnHeaders': {
                    borderBottom: 'none',
                    backgroundColor: colors.blueAccent[700],
                },
                // set background color for column data
                '& .MuiDataGrid-virtualScroller': {
                    backgroundColor: colors.primary[400],
                },
                // set footer color
                '& .MuiDataGrid-footerContainer': {
                    backgroundColor: colors.blueAccent[700],
                    borderTop: 'none',
                },
                "& .MuiCheckbox-root": {
                    // why use template literal?
                    color: `${colors.greenAccent[200]} !important`,
                  },
            }}
            >
                {/* 'rows=' essentially identifies the data source */}
                {/* we identify the 'columns' in the 'columns' variable above */}
                {/* 'checkboxSelection' provides ability to select multiple rows, */}
                {/* but doesn't provide functionality to do something with them -  */}
                {/* would have to write that code separately */}
                <DataGrid checkboxSelection rows={mockDataInvoices} columns={columns} />
            </Box>
        </Box>
    )

}

export default Invoices;