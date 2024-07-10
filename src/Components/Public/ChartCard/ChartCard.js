// src/DonutChart.js
import React from 'react';
import { Chart } from 'react-google-charts';
import './ChartCard.css';
import PropTypes from 'prop-types';

const ChartCard = ({ width, height, topic, dataArray }) => {

    const options = {
        // title: 'My Daily Activities',
        pieHole: 0.4,
        legend: { position: 'bottom' },
        // colors: ['#8AD1C2', '#9F8AD1', '#D18A99', '#D1C18A', '#8A99D1'],
        chartArea: {
            width: '85%',
            height: '72%',
        },
        backgroundColor: 'none',
    };

    return (
        <>
            <div className="reusableChartcard" style={{ width, height }}>
                {/* <div className='row'><h3 className="reusableChartcard-topic">{topic}</h3></div> */}
                <div className='row'>
                    <h3 className="reusableChartcard-topic">{topic}</h3>
                    <div className='chartContainer'>
                        <Chart
                            chartType="PieChart"
                            width={width}
                            height={height}
                            data={dataArray}
                            options={options}
                        />
                    </div>
                </div>




            </div>
        </>
    );
};

ChartCard.propTypes = {
    width: PropTypes.string.isRequired,
    height: PropTypes.string.isRequired,
    topic: PropTypes.string.isRequired,
    dataArray: PropTypes.array.isRequired,
};

export default ChartCard;
