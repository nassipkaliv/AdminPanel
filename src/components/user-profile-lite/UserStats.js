import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardHeader,
  CardBody,
  Progress,
  Row,
  Col,
  Container,
  Nav,
  Navbar,
  NavbarBrand,
  DatePicker,
} from "shards-react";

import RangeDatePicker from "../common/RangeDatePicker";
import Chart from "chart.js";

const UserStats = ({ title }) => {
  // Ref for the chart canvas element.
  const chartRef = useRef(null);

  useEffect(() => {
    // Data for the bar chart.
    const data = {
  labels: [
    "01.11-07.11",
    "08.11-15.11",
    "16.11-23.11",
    "24.11-01.12",
    "02.12-09.12",
    "10.12-17.12",
    "18.12-25.12",
  ],
  datasets: [
    {
      label: "Revenue",
      data: [0, 10000, 25000, 15000, 20000, 25000],
      backgroundColor: [
        "rgba(75, 192, 192, 0.6)",
        "rgba(75, 192, 192, 0.6)",
        "rgba(75, 192, 192, 0.6)",
        "rgba(75, 192, 192, 0.6)",
        "rgba(75, 192, 192, 0.6)",
        "rgba(75, 192, 192, 0.6)",
        "rgba(75, 192, 192, 0.6)",
      ],
      borderColor: "rgba(75, 192, 192, 1)",
      borderWidth: 1, // Add a border width
    },
  ],
};


    // Chart configuration options.
   const options = {
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      beginAtZero: true,
      ticks: {
        callback: function (value, index, values) {
          if (value === 0) {
            return "0";
          } else if (value === 5000) {
            return "5K$";
          } else if (value === 10000) {
            return "10K$";
          } else if (value === 15000) {
            return "15K$";
          } else if (value === 20000) {
            return "20K$";
          } else if (value === 25000) {
            return "25K$";
          }
          return "";
        },
         // Limit the number of y-axis ticks to 5
      },
    },
  },
  elements: {
    bar: {
      borderRadius: 100, // Set the border-radius to 100px for the bars
    },
  },
};
    // Create the bar chart.
    const ctx = chartRef.current.getContext("2d");
    new Chart(ctx, {
      type: "bar",
      data: data,
      options: options,
    });
  }, []);

  return (
    <Card small className="mb-1">
      <Navbar>
        <NavbarBrand href="#">
          <h2 className="mb-0 ml-3" style={{ fontSize: '22px', fontWeight: 600, letterSpacing: '0.22px', color: 'var(--black, #1D2226)' }}>
            Статистика
          </h2>
        </NavbarBrand>
        <Nav navbar className="ml-auto">
          <h3 className="mb-0 mr-4" style={{ fontSize: '17px', fontWeight: 600, lineHeight: '140%', letterSpacing: '0.22px', color: 'var(--light-grey, #A9B0BA)' }}>
            Доход
          </h3>
        </Nav>
        <Nav navbar className="ml-1">
          
         <RangeDatePicker />
        </Nav>
      </Navbar>

      <CardBody>
        <canvas ref={chartRef} width={400} height={190} />
      </CardBody>
    </Card>
  );
};

UserStats.propTypes = {
  title: PropTypes.string,
};

export default UserStats;
