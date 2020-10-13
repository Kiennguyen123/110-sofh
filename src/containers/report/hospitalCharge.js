import React, { useEffect } from 'react';
import { MainChart } from './styled';
import Highcharts from 'highcharts';
import Exporting from 'highcharts/modules/exporting';
import { connect } from 'react-redux';
Exporting(Highcharts);
function index(props) {
  const { listDischargedKhoa, listDischargedSoLuong } = props;
  useEffect(() => {
    showChart();
  }, [listDischargedKhoa, listDischargedSoLuong]);
  const showChart = () => {
    Highcharts.chart('chart2', {
      chart: {
        type: 'bar',
        height:
          listDischargedKhoa && listDischargedKhoa.length < 3
            ? (9 / 16) * 100 + '%'
            : null,
      },
      xAxis: {
        categories: listDischargedKhoa,
      },
      yAxis: {
        min: 0,
        labels: {
          overflow: 'justify',
        },
        allowDecimals: false,
      },
      exporting: {
        enabled: false,
      },
      plotOptions: {
        bar: {
          dataLabels: {
            enabled: true,
          },
        },
        series: {
          groupPadding: 0.05,
          pointPadding: 0,
          pointWidth: 12,
        },
      },
      legend: {
        enabled: true,
      },
      credits: {
        enabled: false,
      },
      series: [
        {
          name: 'Số lượng',
          data: listDischargedSoLuong,
        },
      ],
    });
  };
  return (
    <MainChart>
      <figure className="highcharts-figure">
        <div>Khoa</div>
        <div id="chart2"></div>
        <div
          className="highcharts-figure--bn"
          style={{ marginBottom: 26 }}
        >
          Số bệnh nhân
        </div>
      </figure>
    </MainChart>
  );
}
export default connect((state) => {
  return {
    listDischargedKhoa: state.report.listDischargedKhoa,
    listDischargedSoLuong: state.report.listDischargedSoLuong,
  };
}, null)(index);
