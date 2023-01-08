import { Box, Typography, useTheme } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { tokens } from "../../theme";
// select which section of mockData.js to use
import { mockDataTeam } from "../../data/mockData";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import Header from "../../components/Header"; 

// this component uses Material UI's DataGrid
// https://mui.com/x/react-data-grid/

const Team = () => {

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const columns = [
        { field: "id", headerName: "ID" },
        {
            field: "name",
            headerName: "Name",
            flex: 1,                            // allows field to grow
            cellClassName: "name-column--cell", // for class styling
        },
        {
            field: "age",
            headerName: "Age",
            type: "number",
            headerAlign: "left",    // default = right
            align: "left",          // same
          },
          {
            field: "phone",
            headerName: "Phone Number",
            flex: 1,                // why?
          },
          {
            field: "email",
            headerName: "Email",
            flex: 1,
          },
          {
            field: "accessLevel",
            headerName: "Access Level",
            flex: 1,
            // grabs 'access' key for item in mockData.js
            renderCell: ({ row: { access } }) => {
              return (
                <Box
                  width="60%"
                  m="0 auto"    // 0 = top, bottom; auto = left, right
                  p="5px"
                  display="flex"
                  justifyContent="center"
                  backgroundColor={     // color changes based on access level
                    access === "admin"
                      ? colors.greenAccent[600]
                      : access === "manager"
                      ? colors.greenAccent[700]
                      : colors.greenAccent[700]
                  }
                  borderRadius="4px"
                >
                    {/* change icon depending upon access level */}
                  {access === "admin" && <AdminPanelSettingsOutlinedIcon />}
                  {access === "manager" && <SecurityOutlinedIcon />}
                  {access === "user" && <LockOpenOutlinedIcon />}
                  <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
                    {access}
                  </Typography>
                </Box>
              );
            },
          },
    ]


    return (
        <Box m='20px'>
            <Header title="TEAM" subtitle="Managing the team members" />
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
            }}
            >
                {/* 'rows=' essentially identifies the data source */}
                {/* we identify the 'columns' in the 'columns' variable above */}
            <DataGrid checkboxSelection rows={mockDataTeam} columns={columns} />
            </Box>
        </Box>
    )

}

export default Team;