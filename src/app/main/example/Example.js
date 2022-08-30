import { styled } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';
import FusePageSimple from '@fuse/core/FusePageSimple';
import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import './example.css';
import { useState, setState } from 'react';

import { Pie } from '@ant-design/plots';
import Chart from 'react-apexcharts';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
// import HubSpot_Logo from '../../../../public/assets/images/dashboard_logo/HubSpot_Logo'

const BarChart = () => {
  const [state, setState] = useState({
    options: {
      dataLabels: {
        enabled: false,
      },
      plotOptions: {
        bar: {
          horizontal: true,
        },
      },
      // xAxis: false, // hide xAxis
      yAxis: false,

      xaxis: {
        categories: ['', '', ''],
      },
    },

    // yAxis:false,
    series: [
      {
        data: [21, 70, 51],
      },
    ],
  });

  return (
    <div className='bar'>
      <Chart
        options={state.options}
        series={state.series}
        type='bar'
        width='200'
      />
    </div>
  );
};
const legendValues = [13, 37, 50];
const data = [
  {
    type: 'High',
    value: 13,
  },
  {
    type: 'Meduim',
    value: 37,
  },
  {
    type: 'Low',
    value: 50,
  },
];
const DountChart = () => {
  const config = {
    appendPadding: 130,
    data,
    angleField: 'value',
    colorField: 'type',
    color: ['#B71C1C', '#AAAAAA', '#F9A825'],
    radius: 1,
    innerRadius: 0.8,
    legend: false,
    // legend: {
    //   layout: 'vertical',
    //   position: 'right',
    // },
    autoFit: false,
    label: {
      type: 'inner',
      offset: '-50%',
      content: '{value}',
      style: {
        textAlign: 'center',
        fontSize: 0,
      },
    },
    interactions: [
      // {
      //   type: 'tooltip',
      //   cfg: { start: [{ trigger: 'element:click', action: 'tooltip:show' }] }
      // }
      // {
      //   type: 'element-selected',
      // },
      // {
      //   type: 'element-active',
      // },
    ],
    statistic: {
      title: false,
      content: {
        style: {
          whiteSpace: 'pre-wrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          fontSize: 10,
          fontWeight: 'normal',
          color: '#707070',
        },
        content: 'Numbers of risks \n 350',
      },
    },
  };
  return <Pie {...config} />;
};

const Root = styled(FusePageSimple)(({ theme }) => ({
  '& .FusePageSimple-header': {
    backgroundColor: theme.palette.background.paper,
    borderBottomWidth: 1,
    borderStyle: 'solid',
    borderColor: theme.palette.divider,
  },
  '& .FusePageSimple-toolbar': {},
  '& .FusePageSimple-content': {},
  '& .FusePageSimple-sidebarHeader': {},
  '& .FusePageSimple-sidebarContent': {},
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
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

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}
function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label='basic tabs example'
        >
          <Tab label='Information' {...a11yProps(0)} />
          <Tab label='Platforms' {...a11yProps(1)} />
          <Tab label='Users' {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <ActionAreaCard />
      </TabPanel>
      <TabPanel value={value} index={1}></TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
    </Box>
  );
}

function ExamplePage(props) {
  const { t } = useTranslation('examplePage');

  return (
    <div>
      <BasicTabs />
    </div>
  );
}

function ActionAreaCard() {
  return (
    //flexWrap: 'wrap'master-card
    <div>
      <div className='master-card'>
        <div className='child-card'>
          <p className='text-p1'>Risk Score</p>
          <p className='number-p2' style={{ color: '#707070' }}>
            6.25
            <span className='number-2'>/10</span>
          </p>

          <p className=' card-1-text-3-bg card-1-text-3'>Meduim Risk</p>

          <p className='card-1-text-4'>See Risk Score Breakdown</p>
        </div>
        {/*w-[538.5px] h-[343px] rounded-[8px] bg-[#ffffff] top-[276px] left-[755px] m-[12px] */}
        <div className='child-card '>
          <p className='text-p1'>Risk Meter</p>
          <div className='card-dount-chart'>
            <DountChart />
            <ul className=' card-custome-legend'>
              {data && data.length > 0
                ? data.map((item, idx) => {
                    return (
                      <>
                        <span className='nm-span'>{legendValues[idx]}%</span>
                        <li className='card-2-flex'>{data[idx].type}</li>
                      </>
                    );
                  })
                : ''}
            </ul>
          </div>
          <p className='card-2-p'> Lorem ipsum dolor sit amet</p>
        </div>
        {/*w-[538.5px] h-[343px] rounded-[8px] bg-[#ffffff] top-[276px] left-[1335px] m-[12px]*/}
        <div className='child-card'>
          <p className='text-p1'>Risk in Numbers</p>
          <div className='bar-chart'>
            <BarChart />
          </div>
          <p className='card-3-p'>Lorem ipsum dolor sit amet</p>
        </div>
      </div>
      <div className='table-master-card'>
        <div className='tr-card-1'>
          <div>
            <span>Logo</span>
            &nbsp;&nbsp;&nbsp;
            <span>Platforms Information</span>
          </div>
          div1
          <hr className='hr-card-1' />
          <div className='text-info-card-4-5'>Platforms Needing Attention</div>
          {/* master div for chart and table */}
          <div className='card4-master-table'>
            <div>
              <div style={{ width: 100, height: 100 }}>
                <CircularProgressbarWithChildren value={66}>
                  <div style={{ fontSize: 12, marginTop: -5 }}>
                    <strong>66%</strong>
                  </div>
                </CircularProgressbarWithChildren>
              </div>
            </div>
            <div className='card-4-master-box'>
              <div className='card-4-box1'>
                <span className='text-box-1-2-header'>Total Platforms</span>
                <span className='text-box-1-2'>12</span>
              </div>
              <div className='vl'></div>
              <div className='card-4-box2'>
                <span className='text-box-1-2-header'>Need Attention</span>
                <span className='text-box-1-2'>3</span>
              </div>
            </div>
          </div>
          <div className='card-4-5-box'>
            <span className='text-below-dount-cart-4-5'>
              Top 5 SaaS platforms contributing to low risk score
            </span>
            <span className='text-below-dount-cart-4-5-2'>
              See All SaaS Platforms
            </span>
          </div>
          <div>
            {/* //block rounded-lg shadow-lg bg-white max-w-sm text-center */}
            <div className='grid grid-cols-2 gap-2'>
              <div className='card block rounded-lg shadow-lg bg-white max-w-sm text-center'>
                <div className='small-card-image-flex'>
                  <div>
                    <svg
                      width='106'
                      height='31'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <g fill='none'>
                        <path
                          d='M11.48 4.974v8.475H3.694V4.974H0v20.231h3.695v-8.2h7.784v8.2h3.696V4.974zm15.522 13.692a3.057 3.057 0 1 1-6.115 0V10h-3.505v8.666a6.556 6.556 0 0 0 13.112 0V10h-3.492v8.666zm25.971-7.773c0-1.777 1.175-2.34 2.462-2.34 1.038 0 2.408.79 3.305 1.748l2.295-2.706c-1.146-1.55-3.47-2.621-5.373-2.621-3.803 0-6.553 2.227-6.553 5.919 0 6.85 8.372 4.676 8.372 8.51 0 1.182-1.148 2.226-2.462 2.226-2.073 0-2.745-1.013-3.697-2.085l-2.548 2.649c1.63 2 3.64 3.016 6.047 3.016 3.613 0 6.519-2.254 6.519-5.778 0-7.604-8.373-5.241-8.373-8.538m51.8 11.08c-2.071 0-2.66-.896-2.66-2.268V13.63h3.22v-3.078h-3.22V6.491l-3.554 1.595V20.46c0 3.165 2.184 4.76 5.178 4.76.47.008.94-.03 1.402-.112l.867-3.192c-.391.027-.84.054-1.233.054M40.344 10.101c-1.736 0-2.948.504-4.12 1.653V5.095h-3.51v12.343c0 4.62 3.34 7.786 7.094 7.786 4.164 0 7.827-3.222 7.827-7.56 0-4.284-3.371-7.56-7.291-7.56m-.022 11.587a3.983 3.983 0 1 1 0-7.967 3.983 3.983 0 0 1 0 7.967m38.142-4.211c0-4.346-3.655-7.56-7.827-7.56-3.753 0-7.094 3.165-7.094 7.786v12.35h3.51v-6.668c1.17 1.147 2.384 1.653 4.118 1.653 3.92 0 7.292-3.276 7.292-7.561m-3.323-.044a3.983 3.983 0 1 1-7.967 0 3.983 3.983 0 0 1 7.967 0'
                          fill='#33475B'
                        />
                        <path
                          d='M89.806 9.75V6.223a2.716 2.716 0 0 0 1.566-2.448v-.081c0-1.5-1.216-2.716-2.716-2.716h-.081a2.716 2.716 0 0 0-2.716 2.716v.081a2.716 2.716 0 0 0 1.566 2.448V9.75a7.691 7.691 0 0 0-3.657 1.61l-9.673-7.534c.069-.249.105-.505.109-.762a3.06 3.06 0 1 0-3.064 3.054 3.027 3.027 0 0 0 1.507-.41l9.525 7.412a7.715 7.715 0 0 0 .118 8.69l-2.897 2.898a2.488 2.488 0 0 0-.724-.118 2.513 2.513 0 1 0 2.515 2.515 2.48 2.48 0 0 0-.118-.724l2.866-2.867A7.728 7.728 0 1 0 89.806 9.75m-1.188 11.6a3.965 3.965 0 1 1 0-7.927 3.965 3.965 0 0 1 .004 7.925'
                          fill='#FF7A59'
                        />
                      </g>
                    </svg>
                  </div>
                  <div>HubSpot</div>
                </div>
                <hr className='hr-line mt-[-20px]' />
                <div className='card-footer'>
                  <span className='card-footer-mg ml-[-30px]'>CRM</span>
                  <span className='card-footer-bg ml-[5px]'>High (5/10)</span>
                </div>
              </div>
              <div className='card block rounded-lg shadow-lg bg-white max-w-sm text-center'>
                02
                <hr className='hr-line' />
                <div className='card-footer'>
                  <span className='card-footer-mg  ml-[-15px]'>
                    Communication
                  </span>
                  <span className='card-footer-bg'>High (5/10)</span>
                </div>
              </div>
              <div className='card block rounded-lg shadow-lg bg-white max-w-sm text-center'>
                03
                <hr className='hr-line' />
                <div className='card-footer'>
                  <span className='card-footer-mg ml-[-2px]'>
                    Development Management
                  </span>
                  <span className='card-footer-bg2'>High (5/10)</span>
                </div>
              </div>
              <div className='card block rounded-lg shadow-lg bg-white max-w-sm text-center'>
                04
                <hr className='hr-line' />
                <div className='card-footer'>
                  <span className='card-footer-mg ml-[-15px]'>
                    Communication
                  </span>
                  <span className='card-footer-bg'>High (5/10)</span>
                </div>
              </div>
              <div className='card block rounded-lg shadow-lg bg-white max-w-sm text-center'>
                05
                <hr className='hr-line' />
                <div className='card-footer'>
                  <span className='card-footer-mg ml-[-2px]'>
                    Development Management
                  </span>
                  <span className='card-footer-bg2'>High (5/10)</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='tr-card-2'>
          <div>
            <span>Logo</span>
            &nbsp;&nbsp;&nbsp;
            <span>Users Information</span>
          </div>
          div2
          <hr className='hr-card-1' />
          <div className='text-info-card-4-5'>Users Needing Attention </div>
          {/* master div for chart and table */}
          <div className='card4-master-table'>
            <div>
              <div style={{ width: 100, height: 100 }}>
                <CircularProgressbarWithChildren value={66}>
                  <div style={{ fontSize: 12, marginTop: -5 }}>
                    <strong>66%</strong>
                  </div>
                </CircularProgressbarWithChildren>
              </div>
            </div>
            <div className='card-4-master-box'>
              <div className='card-4-box1'>
                <span className='text-box-1-2-header'>Total Users</span>
                <span className='text-box-1-2'>12</span>
              </div>
              <div className='vl'></div>
              <div className='card-4-box2'>
                <span className='text-box-1-2-header'>Need Attention</span>
                <span className='text-box-1-2'>3</span>
              </div>
            </div>
          </div>
          <div className='card-4-5-box'>
            <span className='text-below-dount-cart-4-5'>
              Top 5 users contributing to low risk score
            </span>
            <span className='text-below-dount-cart-4-5-2 '>See All Users</span>
          </div>
          <div className='grid grid-cols-2 gap-0'>
            <div className='card'>02</div>
            <div className='card'>03</div>
            <div className='card'>04</div>
            <div className='card'>05</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExamplePage;
