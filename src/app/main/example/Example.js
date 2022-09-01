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
import { useState } from 'react';
import axios from 'axios';
import { Pie } from '@ant-design/plots';
import Chart from 'react-apexcharts';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import HubSpot_Logo from '../../../images/svg/HubSpot_Logo.svg';
import Asana_logo from '../../../images/svg/Asana_logo.svg';
import Slack_Technologies_Logo from '../../../images/svg/Slack_Technologies_Logo.svg';
// import Google_Workspace_Logo from '../../../images/jpg/google_workspace.jpg';
import Google_Workspace_Logo from '../../../images/svg/Google_Workspace_Logo.svg';
import platforms_information from '../../../images/svg/platforms_information.svg';
import usericon from '../../../images/svg/usericon.svg';
import users_information from '../../../images/svg/users_information.svg';
import github from '../../../images/svg/github.svg';

function ExamplePage(props) {
  const { t } = useTranslation('examplePage');
  const [user, setUsers] = useState();
  React.useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/todos/1').then((res) => {
      setUsers(res.data);
      console.log('users data :', user);
    });
  }, []);
  return (
    <div>
      <BasicTabs />
    </div>
  );
}

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
function BasicTabs({ props }) {
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
          <div className='header-card'>
            <span>
              {' '}
              <img src={platforms_information} width='20px' height='20px' />
            </span>
            &nbsp;&nbsp;&nbsp;
            <span>Platforms Information</span>
          </div>

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
                    <img src={HubSpot_Logo} />
                  </div>
                  <div>HubSpot</div>
                </div>
                <hr className='hr-line' />
                <div className='card-footer'>
                  <span className='card-footer-mg '>CRM</span>
                  <span className='card-footer-bg '>High (5/10)</span>
                </div>
              </div>
              <div className='card block rounded-lg shadow-lg bg-white max-w-sm text-center'>
                <div className='small-card-image-flex'>
                  <div>
                    <img
                      src={Slack_Technologies_Logo}
                      width='120px'
                      height='110px'
                    />
                  </div>
                  <div>Slack</div>
                </div>
                <hr className='hr-line' />
                <div className='card-footer'>
                  <span className='card-footer-mg  ml-[-15px]'>
                    Communication
                  </span>
                  <span className='card-footer-bg'>High (5/10)</span>
                </div>
              </div>
              <div className='card block rounded-lg shadow-lg bg-white max-w-sm text-center'>
                <div className='small-card-image-flex'>
                  <div>
                    <img src={Asana_logo} width='120px' height='140px' />
                  </div>
                  <div>asana</div>
                </div>
                <hr className='hr-line' />
                <div className='card-footer'>
                  <span className='card-footer-mg ml-[-2px]'>
                    Development Management
                  </span>
                  <span className='card-footer-bg2'>High (5/10)</span>
                </div>
              </div>
              <div className='card block rounded-lg shadow-lg bg-white max-w-sm text-center'>
                <div className='small-card-image-flex'>
                  <div>
                    <img
                      src={Google_Workspace_Logo}
                      height='170px'
                      width='170px'
                    />
                  </div>
                  <div>Google Workspace</div>
                </div>
                <hr className='hr-line' />
                <div className='card-footer'>
                  <span className='card-footer-mg ml-[-15px]'>
                    Communication
                  </span>
                  <span className='card-footer-bg'>High (5/10)</span>
                </div>
              </div>
              <div className='card block rounded-lg shadow-lg bg-white max-w-sm text-center'>
                <div className='small-card-image-flex'>
                  <div>
                    <img src={github} width='30px' height='50px' />
                  </div>
                  <div>Github</div>
                </div>
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
          <div className='header-card'>
            <span>
              <img src={users_information} width='20px' height='20px' />
            </span>
            &nbsp;&nbsp;&nbsp;
            <span>Users Information</span>
          </div>
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
