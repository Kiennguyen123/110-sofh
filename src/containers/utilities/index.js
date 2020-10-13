import React from 'react';
import { Main, Extensions } from './styled';
import { PATH_NAME } from '@configs/constants/common';
import { ReactComponent as Background } from '@images/tien-ich/image.svg';
import { ReactComponent as Document } from '@images/tien-ich/document2.svg';
import { ReactComponent as Dictionary } from '@images/tien-ich/tu-dien.svg';
import { ReactComponent as TCD } from '@images/tien-ich/TCD.svg';
import { ReactComponent as BMI } from '@images/tien-ich/BMI.svg';
import { ReactComponent as Creatinine } from '@images/tien-ich/creatinine.svg';
import { ReactComponent as Kiso } from '@images/tien-ich/ki-so.svg';

export default (props) => {
  return (
    <Main>
      <div className="content">
        <div className="title-page">Tiện ích</div>
        <div className="extensions">
          <div className="extensions--collection">
            <Extensions
              background="#dcefe5"
              color="#04bf55"
              onClick={() => {
                props.history.push(PATH_NAME.SPECIALIZED_DICTIONARY);
              }}
            >
              <span>
                <Dictionary />
              </span>
              <div>
                <span>Từ điển</span>
              </div>
            </Extensions>
            <Extensions
              background="#dccbf4"
              color="#7d29f2"
              onClick={() => {
                props.history.push(PATH_NAME.LOOKUP_DECIASE_CODE);
              }}
            >
              <span>
                <TCD />
              </span>
              <div>
                <span>Tra cứu bệnh</span>
              </div>
            </Extensions>
            <Extensions
              background="#ddebf5"
              color=" #0798f2"
              onClick={() => {
                props.history.push(PATH_NAME.PROFESSIONAL_DOCUMENT);
              }}
            >
              <span>
                <Document />
              </span>
              <div>
                <span>Tài liệu</span>
              </div>
            </Extensions>
            <Extensions
              background="#f3e5e6"
              color="#EB5757"
              onClick={() => {
                props.history.push(PATH_NAME.BODY_MASS_INDEX);
              }}
            >
              <span>
                <BMI />
              </span>
              <div>
                <span>{'BMI & BSA'}</span>
              </div>
            </Extensions>
            <Extensions
              background="#f3e5e6"
              color="#EB5757"
              onClick={() => {
                props.history.push(PATH_NAME.CREATININ);
              }}
            >
              <span>
                <Creatinine />
              </span>
              <div>
                <span>Creatinine</span>
              </div>
            </Extensions>
            <a
              href="https://sign.benhvien110.vn/"
              target="_blank"
              rel="noreferrer"
            >
              <Extensions background="#f1e9dd;" color="#DA8300">
                <span>
                  <Kiso />
                </span>
                <div>
                  <span>Chữ ký số</span>
                </div>
              </Extensions>
            </a>
          </div>
        </div>
      </div>
      <div className="img-background">
        <span>
          <Background />
        </span>
      </div>
    </Main>
  );
};
