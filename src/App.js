// from: https://www.youtube.com/watch?v=wYpCWwD1oz0

import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { ColorModeContext, useMode } from './theme'
// CssBaseline sets MUI css defaults
// ThemeProvider = MUI theme support
import { CssBaseline, ThemeProvider } from '@mui/material';
import Topbar from './scenes/global/Topbar';
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import Team from "./scenes/team";
import Invoices from "./scenes/invoices";
import Contacts from "./scenes/contacts";
import Bar from "./scenes/bar";
import Form from "./scenes/form";
import Line from "./scenes/line";
import Pie from "./scenes/pie";
import FAQ from "./scenes/faq";
import Geography from "./scenes/geography";
import Calendar from "./scenes/calendar";

function App() {

  const [theme, colorMode] = useMode();

  return (
    // setup global color context
    <ColorModeContext.Provider value={colorMode}>
      {/* instantiate theme provider */}
      <ThemeProvider theme={theme}>
        {/* set CSS to MUI defaults */}
        <CssBaseline />
          <div className='app'>
          <Sidebar  />
            <main className='content'>
              <Topbar />
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="team" element={<Team />} />
                <Route path="contacts" element={<Contacts />} />
                <Route path="invoices" element={<Invoices />} />
                <Route path="form" element={<Form />} />
                <Route path="calendar" element={<Calendar />} />
                <Route path="faq" element={<FAQ />} />
                <Route path="bar" element={<Bar />} />
                <Route path="pie" element={<Pie />} />
                <Route path="line" element={<Line />} />
                <Route path="geography" element={<Geography />} />
            </Routes>
            </main>
          </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
