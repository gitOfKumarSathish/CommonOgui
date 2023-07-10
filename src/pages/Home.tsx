import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Table from '../utilities/Table';
import { DnDFlow } from './components/DAG/Components/DragandDrop/Dagger';
import Charts from './components/DataVisualizer/components/Charts';

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

export default function VerticalTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Box
            mt={{ flexGrow: 5, bgcolor: 'background.paper', display: 'flex' }}
        >
            <Tabs
                orientation="vertical"
                value={value}
                variant="scrollable"
                onChange={handleChange}
                aria-label="Vertical tabs example"
                sx={{ borderRight: 1, borderColor: 'divider' }}
                selectionFollowsFocus
            >
                <Tab label="Data Table" {...a11yProps(0)} />
                <Tab label="DAG Builder" {...a11yProps(1)} />
                <Tab label="Data Visualization" {...a11yProps(2)} />
                <Tab label="Store Viewer" {...a11yProps(3)} />
            </Tabs>
            <TabPanel value={value} index={0}>
                <Table />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <div className='DND'>
                    <DnDFlow />
                </div>
            </TabPanel>
            <TabPanel value={value} index={2}>
                <Charts />
            </TabPanel>
            <TabPanel value={value} index={3}>
                Item Four
            </TabPanel>
        </Box>
    );
}
