import React, { useState } from 'react';
import { Main } from './styled';
import { Button, Radio } from 'antd';
import SlideRuler from '@components/common/SlideRuler';
import { ReactComponent as IcArrow } from '@images/BMI-BSA/icArrow.svg';
import { ReactComponent as IcChiSo } from '@images/BMI-BSA/icChiSo.svg';
import { ReactComponent as IcFeMale } from '@images/creatinin/icFeMale.svg';
import { ReactComponent as IcMale } from '@images/creatinin/icMale.svg';
import { ReactComponent as IcMaleActive } from '@images/creatinin/icMaleActive.svg';
import { ReactComponent as IcFeMaleActive } from '@images/creatinin/icFeMaleActive.svg';
export default (props) => {
  const [isOpenCreatinin, setIsOpenCreatinin] = useState(false);
  const [concentration, setConcentration] = useState(1.4);
  const [weight, setWeight] = useState(60);
  const [age, setAge] = useState(26);
  const [gender, setGender] = useState(0);
  const [creatinin, setCreatinin] = useState(
    gender === 0
      ? ((140 - age) * weight) / (72 * concentration)
      : gender === 1
        ? ((140 - age) * weight * 0.85) / (72 * concentration)
        : null,
  );
  const handleCalculate = () => {
    let res = null;
    if (gender === 0) {
      res = ((140 - age) * weight) / (72 * concentration);
    } else if (gender === 1) {
      res = ((140 - age) * weight * 0.85) / (72 * concentration);
    }
    setCreatinin(res);
  };
  return (
    <Main
      onClickCapture={() => {
        return isOpenCreatinin ? setIsOpenCreatinin(false) : null;
      }}
    >
      <div className="head">
        <div className="head--title">Chỉ số Creatinine</div>
      </div>
      <div className="content">
        <div className="content--item">
          <div className="content--title">Tuổi</div>
          <SlideRuler
            handleValue={(e) => {
              setAge(Math.floor(e));
            }}
            currentValue={40}
            maxValue={135}
            minValue={1}
            precision={1}
            value={`<div>${age}<span>tuổi</span></div>`}
          />
        </div>
        <div className="content--item">
          <div className="content--title">Cân nặng</div>
          <SlideRuler
            handleValue={(e) => {
              setWeight(e);
            }}
            currentValue={60}
            maxValue={300}
            minValue={1}
            precision={1}
            value={`<div>${weight}<span>kg</span></div>`}
          />
        </div>
        <div className="content--item">
          <div className="content--title">Giới tính</div>
          <div className="content--box-gender">
            <div className="content--gender">
              <Radio.Group
                defaultValue={gender}
                onChange={(e) => {
                  setGender(e.target.value);
                }}
                buttonStyle="solid"
              >
                <Radio.Button value={0}>
                  {gender === 0 ? (
                    <IcMale />
                  ) : (
                      <IcMaleActive />
                    )}
                  <span className="content--name">Nam</span>
                </Radio.Button>
                <Radio.Button value={1}>
                  {gender === 1 ? (
                    <IcFeMale />
                  ) : (
                      <IcFeMaleActive />
                    )}
                  <span className="content--name">Nữ</span>
                </Radio.Button>
              </Radio.Group>
            </div>
          </div>
        </div>
        <div className="content--item">
          <div className="content--title">
            Nồng độ Creatinine trong serum của nước tiểu
          </div>
          <SlideRuler
            handleValue={(e) => {
              setConcentration(e);
            }}
            currentValue={4.0}
            maxValue={15}
            minValue={0.1}
            precision={0.1}
            value={`<div>${concentration}<span>mg/dl</span></div>`}
          />
        </div>
      </div>
      <div className="btn-action">
        <Button onClick={handleCalculate}>Tính toán</Button>
      </div>
      <div className="info-index">
        <div
          className="info-index--item"
          onClick={() => {
            setIsOpenCreatinin(!isOpenCreatinin);
          }}
        >
          <div className="info-index--title">
            Độ thanh thải Creatinine
            <span>
              <IcChiSo />
            </span>
          </div>
          <div className="info-index--content">
            {creatinin && creatinin.toFixed(1)}
          </div>
          <div
            className="info-index--detail"
            style={
              isOpenCreatinin
                ? { display: 'block' }
                : { display: 'none' }
            }
          >
            <div className="info-index--detail--main">
              <span>Độ thanh thải creatinine</span>
              <div>
                Độ thanh thải creatinine (CrCl) là chỉ số được sử dụng
                để ước lượng chức năng của thận. CrCl tính theo công
                thức Cockcroft-Gault
              </div>
              <IcArrow />
            </div>
          </div>
        </div>
      </div>
    </Main>
  )
};
