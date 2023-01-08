import { useState } from "react";
import { formatDate } from "@fullcalendar/core"; // different from video
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from '@fullcalendar/interaction'
import listPlugin from "@fullcalendar/list";
import { Box, List, ListItem, ListItemText, Typography, useTheme, } from "@mui/material";
import Header from "../../components/Header";
import { tokens } from "../../theme";

// Calendar component doesnt save to anything, so will lose all
// submissions upon refresh

const Calendar = () => {

    const theme = useTheme();
    const colors = tokens(theme.palette.mode)
    const [currentEvents, setCurrentEvents] = useState([]);

    // fuunction called when user clicks on a date
    // triggers prompt on what type of event to create
    // 'selected' is the object provided by FullCalendar
    // can console.log() to see what it provides
    const handleDateClick = (selected) => {
        // would usually use a modal for this, but keeping it simple
        const title = prompt("Please enter a new title for your event");
        const calendarApi = selected.view.calendar;
        // when click on a date, immediately unselect it
        calendarApi.unselect();
        // if user submits a title
        if (title) {
          calendarApi.addEvent({
            id: `${selected.dateStr}-${title}`,
            title,
            start: selected.startStr,
            end: selected.endStr,
            allDay: selected.allDay,
          });
        }
      };
    
    const handleEventClick = (selected) => {
    // again, would usually use a modal for this, but keeping it simple
    if (
        window.confirm(
        `Are you sure you want to delete the event '${selected.event.title}'`
        )
    ) {
        selected.event.remove();
    }
    };

    return (
        <Box m="20px">
      <Header title="Calendar" subtitle="Full Calendar Interactive Page" />

      <Box display="flex" justifyContent="space-between">
        {/* CALENDAR SIDEBAR */}
        <Box
          flex="1 1 20%"
          backgroundColor={colors.primary[400]}
          p="15px"
          borderRadius="4px"
        >
          <Typography variant="h5">Events</Typography>
          <List>
            {currentEvents.map((event) => (
              <ListItem
                key={event.id}
                sx={{
                  backgroundColor: colors.greenAccent[500],
                  margin: "10px 0",
                  borderRadius: "2px",
                }}
              >
                <ListItemText
                  primary={event.title}
                  secondary={
                    <Typography>
                      {formatDate(event.start, {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </Typography>
                  }
                />
              </ListItem>
            ))}
          </List>
        </Box>

        {/* CALENDAR */}
        <Box flex="1 1 100%" ml="15px">
          <FullCalendar
            height="75vh"
            plugins={[
              dayGridPlugin,
              timeGridPlugin,
              interactionPlugin,
              listPlugin,
            ]}
            headerToolbar={{
              // if include space after comma, will include space when displayed
              left: "prev,next today",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
            }}
            initialView="dayGridMonth"
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            select={handleDateClick}  // created above
            eventClick={handleEventClick} // created above
            // saves it into the useState created above
            eventsSet={(events) => setCurrentEvents(events)}
            // sample events
            initialEvents={[
              {
                id: "12315",
                title: "All-day event",
                date: "2022-09-14",
              },
              {
                id: "5123",
                title: "Timed event",
                date: "2022-09-28",
              },
            ]}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Calendar;