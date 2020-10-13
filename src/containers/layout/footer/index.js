import React from 'react';
import { Wrapper } from './styled';
import { useHistory } from 'react-router-dom';
import { ReactComponent as IcHSNB } from '@images/DSNB/ic-hs-benh-an.svg';
import { ReactComponent as IcBaoCao } from '@images/baocao/ic-bao-cao.svg';
import { ReactComponent as IcDanhBa } from '@images/DBNV/ic-danh-ba.svg';
import { ReactComponent as IcTienIch } from '@images/tien-ich/ic-tien-ich.svg';

function Footer(props) {
  const history = useHistory();

  const gotoPage = (path) => {
    history.push(`${path}`);
  };

  const checkPathActive = (arr) => {
    const {
      location: { pathname },
    } = history;

    return arr.includes(pathname);
  };

  return (
    <Wrapper>
      <div
        className={`footer--item ${
          checkPathActive(['/']) && 'active'
        }`}
        onClick={() => gotoPage('/')}
      >
        <span>
          <IcHSNB />
        </span>
        <div>Hồ sơ BA</div>
      </div>
      <div
        className={`footer--item ${
          checkPathActive(['/bao-cao']) && 'active'
        }`}
        onClick={() => gotoPage('/bao-cao')}
      >
        <span>
          <IcBaoCao fill="#9393AA" />
        </span>
        <div>Báo cáo</div>
      </div>
      <div
        className={`footer--item ${
          checkPathActive(['/danh-ba-bac-si']) && 'active'
        }`}
        onClick={() => gotoPage('/danh-ba-bac-si')}
      >
        <span>
          <IcDanhBa />
        </span>
        <div>Danh bạ NVYT</div>
      </div>
      <div
        className={`footer--item ${
          checkPathActive(['/tien-ich']) && 'active'
        }`}
        onClick={() => gotoPage('/tien-ich')}
      >
        <span>
          <IcTienIch />
        </span>
        <div>Tiện ích</div>
      </div>
    </Wrapper>
  );
}

export default Footer;
