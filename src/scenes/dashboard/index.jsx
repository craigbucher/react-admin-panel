import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import Header from "../../components/Header";
import { tokens } from "../../theme";
import { mockTransactions } from "../../data/mockData";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import LineChart from "../../components/LineChart";
import GeographyChart from "../../components/GeographyChart";
import BarChart from "../../components/BarChart";
import StatBox from "../../components/StatBox";
import ProgressCircle from "../../components/ProgressCircle";

const Dashboard = () => {
    
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
  
    
    return (
        <Box m="20px">
            <Box display="flex" justifyContent="space-between" alignItems="center">
            <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />
            
                {/* Download Reports Button */}
                <Box>
                    <Button
                        sx={{
                        backgroundColor: colors.blueAccent[700],
                        color: colors.grey[100],
                        fontSize: "14px",
                        fontWeight: "bold",
                        padding: "10px 20px",
                        }}
                    >
                        <DownloadOutlinedIcon sx={{ mr: "10px" }} />
                        Download Reports
                    </Button>
                </Box>
            </Box>
            
            
            {/* GRID & CHARTS */}
            {/* Good stuff to review at 3:38:00 */}
            {/* Review grid and span */}
            <Box
                display="grid"
                gridTemplateColumns="repeat(12, 1fr)"   // 12 column grid
                gridAutoRows="140px"    // 140px high row
                gap="20px"  // 20px gab between each item
            >
                {/* Row 1 */}
                {/* Email Status Box */}
                <Box
                    gridColumn="span 3"
                    backgroundColor={colors.primary[400]}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    >
                    <StatBox
                        title="12,361"  // just a made-up number
                        subtitle="Emails Sent"
                        progress="0.55" // same
                        increase="+14%" // same
                        icon={
                        <EmailIcon
                            sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                        />
                        }
                    />
                </Box>
                {/* Traffic Received Box */}
                <Box
                    gridColumn="span 3"
                    backgroundColor={colors.primary[400]}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    >
                    <StatBox
                        title="1,325,134"
                        subtitle="Traffic Received"
                        progress="0.80"
                        increase="+43%"
                        icon={
                        <TrafficIcon
                            sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                        />
                        }
                    />
                </Box>
                {/* Sales Box */}
                <Box
                    gridColumn="span 3"
                    backgroundColor={colors.primary[400]}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    >
                    <StatBox
                        title="431,225"
                        subtitle="Sales Obtained"
                        progress="0.50"
                        increase="+21%"
                        icon={
                        <PointOfSaleIcon
                            sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                        />
                        }
                    />
                </Box>
                {/* New Clients Box */}
                <Box
                    gridColumn="span 3"
                    backgroundColor={colors.primary[400]}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    >
                    <StatBox
                        title="32,441"
                        subtitle="New Clients"
                        progress="0.30"
                        increase="+5%"
                        icon={
                        <PersonAddIcon
                            sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                        />
                        }
                    />
                </Box>

                {/* Row 2 */}
                {/* Revennue Generated Line Chart */}
                <Box
                    gridColumn="span 8" // 8 of 12 columns
                    gridRow="span 2"    // 2 rows high
                    backgroundColor={colors.primary[400]}
                    >
                    <Box
                        mt="25px"
                        p="0 30px"
                        display="flex "
                        justifyContent="space-between"
                        alignItems="center"
                    >
                        <Box>
                        <Typography
                            variant="h5"
                            fontWeight="600"
                            color={colors.grey[100]}
                        >
                            Revenue Generated
                        </Typography>
                        <Typography
                            variant="h3"
                            fontWeight="bold"
                            color={colors.greenAccent[500]}
                        >
                            $59,342.32
                        </Typography>
                        </Box>
                        <Box>
                        <IconButton>
                            <DownloadOutlinedIcon
                            sx={{ fontSize: "26px", color: colors.greenAccent[500] }}
                            />
                        </IconButton>
                        </Box>
                    </Box>
                    {/* Force line chart a bit to the left */}
                    <Box height="250px" m="-20px 0 0 0">
                        {/* Actual linechart component */}
                        <LineChart isDashboard={true} />
                    </Box>
                </Box>
                {/* Transaction List */}
                <Box
                    gridColumn="span 4"
                    gridRow="span 2"
                    backgroundColor={colors.primary[400]}
                    overflow="auto"
                    >
                    <Box
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                        borderBottom={`4px solid ${colors.primary[500]}`}
                        colors={colors.grey[100]}
                        p="15px"
                    >
                        <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
                        Recent Transactions
                        </Typography>
                    </Box>
                    {/* Map through recent transactions list */}
                    {mockTransactions.map((transaction, i) => (
                        <Box
                        key={`${transaction.txId}-${i}`}
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                        borderBottom={`4px solid ${colors.primary[500]}`}
                        p="15px"
                        >
                        <Box>
                            <Typography
                            color={colors.greenAccent[500]}
                            variant="h5"
                            fontWeight="600"
                            >
                            {transaction.txId}
                            </Typography>
                            <Typography color={colors.grey[100]}>
                            {transaction.user}
                            </Typography>
                        </Box>
                        <Box color={colors.grey[100]}>{transaction.date}</Box>
                        <Box
                            backgroundColor={colors.greenAccent[500]}
                            p="5px 10px"
                            borderRadius="4px"
                        >
                            ${transaction.cost}
                        </Box>
                        </Box>
                    ))}
                </Box>

                {/* Row 3 */}
                {/* 'Campaign' Box */}
                <Box
                  gridColumn="span 4"
                  gridRow="span 2"
                  backgroundColor={colors.primary[400]}
                  p="30px"
                >
                  <Typography variant="h5" fontWeight="600">
                    Campaign
                  </Typography>
                  <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    mt="25px"
                  >
                    <ProgressCircle size="125" />
                    <Typography
                      variant="h5"
                      color={colors.greenAccent[500]}
                      sx={{ mt: "15px" }}
                    >
                      $48,352 revenue generated
                    </Typography>
                    <Typography>Includes extra misc expenditures and costs</Typography>
                  </Box>
                </Box>
                
                {/* 'Sales Quantity' Box */}
                <Box
                  gridColumn="span 4"
                  gridRow="span 2"
                  backgroundColor={colors.primary[400]}
                >
                  <Typography
                    variant="h5"
                    fontWeight="600"
                    sx={{ padding: "30px 30px 0 30px" }}
                  >
                    Sales Quantity
                  </Typography>
                  <Box height="250px" mt="-20px">
                    <BarChart isDashboard={true} />
                  </Box>
                </Box>

                {/* Geography Box */}
                <Box
                  gridColumn="span 4"
                  gridRow="span 2"
                  backgroundColor={colors.primary[400]}
                  padding="30px"
                >
                  <Typography
                    variant="h5"
                    fontWeight="600"
                    sx={{ marginBottom: "15px" }}
                  >
                    Geography Based Traffic
                  </Typography>
                  <Box height="200px">
                    <GeographyChart isDashboard={true} />
                  </Box>
                </Box>

            </Box>
        </Box>
    )
}

export default Dashboard