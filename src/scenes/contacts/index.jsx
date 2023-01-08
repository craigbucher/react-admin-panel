import { Box, useTheme } from '@mui/material';
// GridToolbar = data manipulation tools for DataGrid
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { tokens } from "../../theme";
// select which section of mockData.js to use
import { mockDataContacts } from "../../data/mockData";
import Header from "../../components/Header"; 

// this component uses Material UI's DataGrid
// https://mui.com/x/react-data-grid/

const Contacts = () => {

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const columns = [
        { field: "id", headerName: "ID", flex: 0.5 },
        { field: "registrarId", headerName: "Registrar ID" },
        {
          field: "name",
          headerName: "Name",
          flex: 1,
          cellClassName: "name-column--cell",
        },
        {
          field: "age",
          headerName: "Age",
          type: "number",
          headerAlign: "left",
          align: "left",
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
          field: "address",
          headerName: "Address",
          flex: 1,
        },
        {
          field: "city",
          headerName: "City",
          flex: 1,
        },
        {
          field: "zipCode",
          headerName: "Zip Code",
          flex: 1,
        },
      ];


    return (
        <Box m='20px'>
            <Header title="CONTACTS" subtitle="List Of Contacts For Future Reference" />
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
                "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
                    // why template literal for this one?
                    color: `${colors.grey[100]} !important`,
                  },
            }}
            >
                {/* 'rows=' essentially identifies the data source */}
                {/* we identify the 'columns' in the 'columns' variable above */}
                <DataGrid
          rows={mockDataContacts}
          columns={columns}
          // can further customize GridToolbar if you want to, as well
          components={{ Toolbar: GridToolbar }}
        />
            </Box>
        </Box>
    )

}

export default Contacts;