
import React,{useEffect} from 'react';
import Chart from 'chart.js/auto';
import { Line } from 'react-chartjs-2';
import { Col, Row, Typography } from 'antd';

const { Title } = Typography;

const LineChart = ({ coinHistory, currentPrice, coinName,timePeriod }) => {
  const coinPrice = [];
  const coinTimestamp = [];

  for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
    coinPrice.push(coinHistory.data.history[i].price);
  }
  
  for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {

    // Create a Date object from the epoch timestamp (multiply by 1000 as the Date object expects timestamps in milliseconds)
    var epochTimestamp = coinHistory.data.history[i].timestamp; // Get the epoch timestamp

    // Create a Date object from the epoch timestamp (multiply by 1000 as the Date object expects timestamps in milliseconds)
    var dateObject = new Date(epochTimestamp * 1000);
  
      const date = dateObject.getDate();
      const month = dateObject.getMonth() + 1;
      const year = dateObject.getFullYear();
      var formattedDate = `${date}-${month}-${year}`;
      coinTimestamp.push(formattedDate);   
  }


  const data = {
    labels: coinTimestamp,
    datasets: [
      {
        label: 'Price In USD',
        data: coinPrice,
        fill: false,
        backgroundColor: '#0071bd',
        borderColor: '#0071bd',
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
           ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  return (
    <>
      <Row className="chart-header">
        <Title level={2} className="chart-title">{coinName} Price Chart </Title>
        <Col className="price-container">
          <Title level={5} className="price-change">Change: {coinHistory?.data?.change}%</Title>
          <Title level={5} className="current-price">Current {coinName} Price: $ {currentPrice}</Title>
        </Col>
      </Row>
      <Line data={data} options={options} />
    </>
  );
};

export default LineChart;

/* const formattedTimestamps = coinHistory.data.history.map((item) => {
    const timestamp = new Date(item.timestamp);
    if (timePeriod === '1y' || timePeriod === '3y') {
      // Format timestamp for 1 year or 3 years
      const year = timestamp.getFullYear();
      return year.toString();
    } else if (timePeriod === '3h') {
      // Format timestamp for 3 hours
      const hours = timestamp.getHours();
      const minutes = timestamp.getMinutes();
      return `${hours}:${minutes < 10 ? '0' : ''}${minutes}`;
    } else if (timePeriod === '30days') {
      // Format timestamp for 30 days
      const day = timestamp.getDate();
      const month = timestamp.toLocaleString('default', { month: 'short' });
      return `${day} ${month}`;
    }
    else if (timePeriod === '7d') {
      // Format timestamp for 7 days
      const day = timestamp.getDate();
      const month = timestamp.toLocaleString('default', { month: 'short' });
      return `${day} ${month}`;
    } else if (timePeriod === '3m') {
      // Format timestamp for 3 months
      const month = timestamp.toLocaleString('default', { month: 'short' });
      const year = timestamp.getFullYear();
      return `${month} ${year}`;
    }
    else if (timePeriod === '24h') {
      // Format timestamp for 24 hours
      return timestamp.toLocaleTimeString();
    } else if (timePeriod === '5y') {
      // Format timestamp for 5 years
      return timestamp.toLocaleDateString();
    }
    return item.timestamp; // Return as-is for other timePeriods
  });
  
  coinTimestamp.push(formattedTimestamps);*/
