import React, { useState } from 'react';
import { Main } from './styled';
import { Button } from 'antd';
import SlideRuler from '@components/common/SlideRuler';
import { ReactComponent as IcArrow } from '@images/BMI-BSA/icArrow.svg';
import { ReactComponent as IcChiSo } from '@images/BMI-BSA/icChiSo.svg';
export default (props) => {
  const [isOpenBMI, setIsOpenBMI] = useState(false);
  const [isOpenBSA, setIsOpenBSA] = useState(false);
  const [weight, setWeight] = useState(60);
  const [height, setHeight] = useState(172);
  const [BMI, setBMI] = useState(
    (weight * 10000) / Math.pow(height, 2),
  );
  const [BSA, setBSA] = useState(Math.sqrt(weight * height) / 60);
  const handleCalculate = (value) => {
    setBMI((weight * 10000) / Math.pow(height, 2));
    setBSA(Math.sqrt(weight * height) / 60);
  };
  const handleClassify = () => {
    let res = '';
    if (0 < BMI && BMI < 16) {
      res = 'Gầy độ III';
    } else if (16 <= BMI && BMI < 17) {
      res = 'Gầy độ II';
    } else if (17 <= BMI && BMI < 18.5) {
      res = 'Gầy độ I';
    } else if (18.5 <= BMI && BMI < 25) {
      res = 'Cân nặng bình thường';
    } else if (25 <= BMI && BMI < 30) {
      res = 'Thừa cân';
    } else if (30 <= BMI && BMI < 35) {
      res = 'Béo phì độ I';
    } else if (35 <= BMI && BMI < 40) {
      res = 'Béo phì độ II';
    } else if (BMI >= 40) {
      res = 'Béo phì độ III';
    }
    return res;
  };
  return (
    <Main
      onClickCapture={() => {
        return isOpenBMI || isOpenBSA
          ? (setIsOpenBMI(false), setIsOpenBSA(false))
          : null;
      }}
    >
      <div className="head">
        <div className="head--title">Chỉ số BMI và BSA</div>
      </div>
      <div className="content">
        <div className="content--item">
          <div className="content--title">Chiều cao</div>
          <SlideRuler
            handleValue={(e) => {
              setHeight(Math.floor(e));
            }}
            currentValue={172}
            maxValue={300}
            minValue={1}
            precision={1}
            value={`<div>${height}<span>Cm</span></div>`}
          />
        </div>
        <div className="content--item">
          <div className="content--title">Cân nặng</div>
          <SlideRuler
            handleValue={(e) => {
              setWeight(Math.floor(e));
            }}
            currentValue={60}
            maxValue={300}
            minValue={1}
            precision={1}
            value={`<div>${weight}<span>kg</span></div>`}
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
            setIsOpenBMI(!isOpenBMI);
          }}
        >
          <div className="info-index--title">
            Chỉ số BMI
            <span>
              <IcChiSo />
            </span>
          </div>
          <div className="info-index--content">{BMI.toFixed(1)}</div>
          <div className="info-index--description">
            {handleClassify()}
          </div>
          <div
            className="info-index--detail"
            style={
              isOpenBMI ? { display: 'block' } : { display: 'none' }
            }
          >
            <div className="info-index--detail--main">
              <span>BMI</span>
              <div>
                BMI (Body Mass Index) là chỉ số khối cơ thể, dùng để
                đánh giá cơ thể của bạn đang thiếu cân, bình thường,
                thừa cân hay béo phì.
              </div>
              <IcArrow />
            </div>
          </div>
        </div>
        <div
          className="info-index--item info-index--BSA"
          onClick={() => {
            setIsOpenBSA(!isOpenBSA);
          }}
        >
          <div className="info-index--title">
            Chỉ số BSA
            <span>
              <IcChiSo />
            </span>
          </div>
          <div className="info-index--content">{BSA.toFixed(1)}</div>
          <div
            className="info-index--detail"
            style={
              isOpenBSA
                ? {
                    display: 'block',
                    right: 0,
                    left: 'initial',
                    top: '-144px',
                  }
                : { display: 'none' }
            }
          >
            <div className="info-index--detail--main">
              <span>BSA</span>
              <div>
                BSA là diện tích bề mặt cơ thể trên cơ sở diện tích bề
                mặt thân thể người, dùng để tính toán liều lượng thuốc
                gây độc tế bào trong phác đồ hóa trị liệu.
              </div>
              <IcArrow style={{ right: 91, left: 'initial' }} />
            </div>
          </div>
        </div>
      </div>
    </Main>
  );
};
