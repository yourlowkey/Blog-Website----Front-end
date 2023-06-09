import React, { useState, useEffect } from 'react';
// import './Dashboard.css';
import { Grid, Typography } from '@mui/material';
import { Helmet } from 'react-helmet-async';
// import TrendingDownIcon from '@mui/icons-material/TrendingDown';
// import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import axios from 'axios';
// import { DashBoardDataReturn } from '../../interface';
import { SnackBar } from '../../components';

const Dashboard = () => {
  const [dashboard, setDashboard] = useState();
  const [snakeBarProps, setSnakeBarProps] = useState({
    open: false,
    type: 'success',
    message: ''
  });

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/admin/dashboard`)
      .then((res) => {
        setDashboard(res.data);
      })
      .catch((err) => {
        setSnakeBarProps({ open: true, message: err.message, type: 'error' });
      });
  }, [setDashboard]);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setSnakeBarProps({ open: false, type: 'success', message: '' });
  };
  return (
    <>
      {/* <Helmet>
        <title>Admin | Dashboard</title>
      </Helmet> */}
      <Typography variant="h5" className="adminTitle">
        Dashboardx
      </Typography>
      <div className="dashboard">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={6} lg={4} xl={3}>
            <div className="dashboardItem">
              <div className="dashboardItemTitleContainer">
                <Typography variant="h6" className="dashboardItemTitle">
                  Total Blog Views
                </Typography>
                <div className="dashboardItemStats">
                  <Typography variant="h4" className="dashboardItemStatsNumber">
                    300
                  </Typography>
                  <div className="dashboardItemStatsCompareLastMonthDown">
                    <span className="dashboardItemStatsCompareLastMonthNumber">10.5%</span>
                  </div>
                </div>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={4} xl={3}>
            <div className="dashboardItem">
              <div className="dashboardItemTitleContainer">
                <Typography variant="h6" className="dashboardItemTitle">
                  Total Users Subscribed
                </Typography>
                <div className="dashboardItemStats">
                  <Typography variant="h4" className="dashboardItemStatsNumber">
                    20
                  </Typography>
                  <div className="dashboardItemStatsCompareLastMonthDown">
                    <span className="dashboardItemStatsCompareLastMonthNumber">20.8%</span>
                  </div>
                </div>
              </div>
            </div>
          </Grid>
          {dashboard && (
            <Grid item xs={12} sm={12} md={6} lg={4} xl={3}>
              <div className="dashboardItem">
                <div className="dashboardItemTitleContainer">
                  <Typography variant="h6" className="dashboardItemTitle">
                    Total Posts
                  </Typography>
                  <div className="dashboardItemStats">
                    <Typography variant="h4" className="dashboardItemStatsNumber">
                      {dashboard.postCount}
                    </Typography>
                    <div className="dashboardItemStatsCompareLastMonthUp">
                      <span className="dashboardItemStatsCompareLastMonthNumber">42.1%</span>
                    </div>
                  </div>
                </div>
              </div>
            </Grid>
          )}
          {dashboard && (
            <Grid item xs={12} sm={12} md={6} lg={4} xl={3}>
              <div className="dashboardItem">
                <div className="dashboardItemTitleContainer">
                  <Typography variant="h6" className="dashboardItemTitle">
                    Total Categories
                  </Typography>
                  <div className="dashboardItemStats">
                    <Typography variant="h4" className="dashboardItemStatsNumber">
                      {dashboard.categoryCount}
                    </Typography>
                    <div className="dashboardItemStatsCompareLastMonthUp">
                      <span className="dashboardItemStatsCompareLastMonthNumber">42.1%</span>
                    </div>
                  </div>
                </div>
              </div>
            </Grid>
          )}
          {dashboard && (
            <Grid item xs={12} sm={12} md={6} lg={4} xl={3}>
              <div className="dashboardItem">
                <div className="dashboardItemTitleContainer">
                  <Typography variant="h6" className="dashboardItemTitle">
                    Total Tags
                  </Typography>
                  <div className="dashboardItemStats">
                    <Typography variant="h4" className="dashboardItemStatsNumber">
                      {dashboard.tagCount}
                    </Typography>
                    <div className="dashboardItemStatsCompareLastMonthUp">
                      <span className="dashboardItemStatsCompareLastMonthNumber">42.1%</span>
                    </div>
                  </div>
                </div>
              </div>
            </Grid>
          )}
        </Grid>
        <SnackBar open={snakeBarProps.open} handleClose={handleClose} type={snakeBarProps.type} message={snakeBarProps.message} />
      </div>
    </>
  );
};

export default Dashboard;
