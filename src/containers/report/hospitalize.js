import React, { useEffect } from 'react';
import { MainChart } from './styled';
import Highcharts from 'highcharts';
import Exporting from 'highcharts/modules/exporting';
import { connect } from 'react-redux';

Exporting(Highcharts);
function index(props) {
  const { listKhoa, listSoLuong, listSoLuongCho } = props;
  let countSL = listSoLuong && listSoLuong.filter((item) => item > 0);
  let countSLCho =
    listSoLuongCho && listSoLuongCho.filter((item) => item > 0);
  useEffect(() => {
    showChart();
  }, [listKhoa, listSoLuong, listSoLuongCho]);
  const showChart = () => {
    Highcharts.chart('chart', {
      chart: {
        type: 'bar',
        height:
          listKhoa && listKhoa.length < 3
            ? (9 / 16) * 100 + '%'
            : null,
      },
      xAxis: {
        categories: listKhoa,
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
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'top',
        x: 0,
        y: 0,
        floating: true,
        borderWidth: 1,
        backgroundColor:
          Highcharts.defaultOptions.legend.backgroundColor ||
          '#FFFFFF',
        shadow: true,
      },
      credits: {
        enabled: false,
      },
      series: [
        {
          name: 'Vào viện',
          data: listSoLuong,
          color: '#259B54',
        },
        {
          name: 'Chờ nhập viện',
          data: listSoLuongCho,
          color: '#D2D700',
        },
      ],
    });
  };
  return (
    <MainChart>
      <figure className="highcharts-figure">
        <div>Khoa</div>
        <div id="chart"></div>
        <div className="highcharts-figure--bn">Số bệnh nhân</div>
      </figure>
      <div className="highcharts-info">
        <div className="highcharts-info--ravien">
          <div>
            <span>Vào viện</span>
            <div>
              Tổng: {countSL && countSL.reduce((a, b) => a + b, 0)}{' '}
              bệnh nhân
            </div>
          </div>
        </div>
        <div className="highcharts-info--vaovien">
          <div>
            <span>Chờ nhập viện</span>
            <div>
              Tổng:{' '}
              {countSLCho && countSLCho.reduce((a, b) => a + b, 0)}{' '}
              bệnh nhân
            </div>
          </div>
        </div>
      </div>
    </MainChart>
  );
}
export default connect((state) => {
  return {
    listKhoa: state.report.listHospitalizeKhoa,
    listSoLuong: state.report.listHospitalizeSoLuong,
    listSoLuongCho: state.report.listHospitalizeSoLuongCho,
  };
}, null)(index);
