import React, { useEffect } from 'react';
import { Main } from './styled';
import { DatePicker } from 'antd';
import Hospitalize from './hospitalize';
import { connect } from 'react-redux';
import HospitalDischarge from './hospitalCharge';
import moment from 'moment';
import { message } from 'antd';

function index(props) {
  const { tuNgay, denNgay } = props;
  useEffect(() => {
    const param = { tuNgay, denNgay };
    props.getHospitalize(param).catch(() => {
      message.error("Không lấy được danh sách thống kê vào viện");
    });
    props.getDischarged(param).catch(() => {
      message.error("Không lấy được danh sách thống kê ra viện");
    });
  }, []);
  return (
    <Main>
      <div className="head">
        <div className="head--title">Báo cáo</div>
      </div>
      <div className="content">
        <div className="content--title">
          Thống kê người bệnh đang điều trị <br /> trong viện
        </div>
        <div className="content--time">
          <DatePicker
            placeholder="Từ ngày"
            onChange={(e) => {
              props.updateData({
                tuNgay: e && e._d,
              });
              if (e && e._d) {
                if (!denNgay) {
                  props.updateData({
                    validateTuNgay: e && e._d ? false : true,
                    validateDenNgay: true,
                  });
                  return;
                } else {
                  props.updateData({
                    validateTuNgay: false,
                  });
                  const params = {
                    tuNgay: moment(e._d).format('YYYY-MM-DD'),
                    denNgay,
                  };
                  props.getHospitalize(params).catch(() => {
                    message.error("Không lấy được danh sách thống kê vào viện");
                  });
                  props.getDischarged(params).catch(() => {
                    message.error("Không lấy được danh sách thống kê ra viện");
                  });
                }
              } else {
                props.updateData({
                  validateTuNgay: true,
                });
              }
            }}
            disabledDate={(date) => {
              return denNgay
                ? date &&
                date._d &&
                moment(date._d).format('YYYY-MM-DD') > denNgay
                : null;
            }}
            value={tuNgay ? moment(tuNgay) : null}
            format={'DD/MM/YYYY'}
          />
          <DatePicker
            placeholder="Đến ngày"
            onChange={(e) => {
              props.updateData({
                denNgay: e && e._d,
              });
              if (e && e._d) {
                if (!tuNgay) {
                  props.updateData({
                    validateTuNgay: true,
                    validateDenNgay: e && e._d ? false : true,
                  });
                  return;
                } else {
                  props.updateData({
                    validateDenNgay: false,
                  });
                  const params2 = {
                    tuNgay,
                    denNgay: moment(e._d).format('YYYY-MM-DD'),
                  };
                  props.getHospitalize(params2).catch(() => {
                    message.error("Không lấy được danh sách thống kê vào viện");
                  });
                  props.getDischarged(params2).catch(() => {
                    message.error("Không lấy được danh sách thống kê ra viện");
                  });
                }
              } else {
                props.updateData({
                  validateDenNgay: true,
                });
              }
            }}
            style={{ marginLeft: 7 }}
            value={denNgay ? moment(denNgay) : null}
            disabledDate={(date) => {
              return (
                date &&
                date._d &&
                moment(date._d).format('YYYY-MM-DD') < tuNgay
              );
            }}
            format={'DD/MM/YYYY'}
          />
          <div>
            {props.validateTuNgay ? (
              <div className="error">Xin vui lòng nhập từ ngày!</div>
            ) : null}
            {props.validateDenNgay ? (
              <div className="error">Xin vui lòng nhập đến ngày!</div>
            ) : null}
          </div>
        </div>
        <div className="content--chart">
          <div className="content--chart--title">
            Thống kê người bệnh vào viện
          </div>
          <Hospitalize />
          <div className="content--chart--title">
            Thống kê người bệnh ra viện
          </div>
          <HospitalDischarge />
        </div>
      </div>
    </Main>
  );
}
export default connect(
  (state) => {
    return {
      tuNgay: state.report.tuNgay
        ? moment(state.report.tuNgay).format('YYYY-MM-DD')
        : null,
      denNgay: state.report.denNgay
        ? moment(state.report.denNgay).format('YYYY-MM-DD')
        : null,
      validateTuNgay: state.report.validateTuNgay || false,
      validateDenNgay: state.report.validateDenNgay || false,
    };
  },
  ({ report: { updateData, getHospitalize, getDischarged } }) => {
    return {
      updateData,
      getDischarged,
      getHospitalize,
    };
  },
)(index);
