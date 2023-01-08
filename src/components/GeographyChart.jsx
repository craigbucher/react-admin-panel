import { useTheme } from "@mui/material";
import { ResponsiveChoropleth } from "@nivo/geo";
// need this additional file when working with geography data
import { geoFeatures } from "../data/mockGeoFeatures";
import { tokens } from "../theme";
import { mockGeographyData as data } from "../data/mockData";

// can see all configuration parameters for chart, modify them
// and see real-time updates to chart and download corresponding
// configuration code at https://nivo.rocks/choropleth/
// mockBarData is actually the sample data used on configuration page

// if displayed in dashboard, want to make some modifications
// because display will be much smaller
const GeographyChart = ({ isDashboard = false }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    // all of this below was copied from the configuration page
    // referenced above
    <ResponsiveChoropleth
      data={data}
    // custom theme
    // parameters from 'theme' option on configuration page
      theme={{
        axis: {
          domain: {
            line: {
              stroke: colors.grey[100],
            },
          },
          legend: {
            text: {
              fill: colors.grey[100],
            },
          },
          ticks: {
            line: {
              stroke: colors.grey[100],
              strokeWidth: 1,
            },
            text: {
              fill: colors.grey[100],
            },
          },
        },
        legends: {
          text: {
            fill: colors.grey[100],
          },
        },
      }}
      features={geoFeatures.features}
      margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
      domain={[0, 1000000]}
      unknownColor="#666666"
      label="properties.name"
      valueFormat=".2s"
      // when in dashboard, show at a smaller scale  
      projectionScale={isDashboard ? 40 : 150}
      // when in dashboard, modify movement
      projectionTranslation={isDashboard ? [0.49, 0.6] : [0.5, 0.5]}
      projectionRotation={[0, 0, 0]}
      borderWidth={1.5}
      borderColor="#ffffff"
      legends={
        // when not in dashboard, show legends with these parameters:
        !isDashboard
          ? [
              {
                anchor: "bottom-left",
                direction: "column",
                justify: true,
                translateX: 20,
                translateY: -100,
                itemsSpacing: 0,
                itemWidth: 94,
                itemHeight: 18,
                itemDirection: "left-to-right",
                itemTextColor: colors.grey[100],
                itemOpacity: 0.85,
                symbolSize: 18,
                effects: [
                  {
                    on: "hover",
                    style: {
                      itemTextColor: "#ffffff",
                      itemOpacity: 1,
                    },
                  },
                ],
              },
            ]
          : undefined
      }
    />
  );
};

export default GeographyChart;