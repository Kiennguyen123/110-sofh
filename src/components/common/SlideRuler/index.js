import React, { useEffect, useRef } from 'react';
import SlideRuler from 'slide-ruler';
import { Main } from './styled';

function index({
  value,
  maxValue,
  minValue,
  currentValue,
  precision,
  handleValue,
  colorDigit = '#B6B6B6',
  colorDecimal = '#636363',
  ...rest
}) {
  const refSlideRuler = useRef();

  useEffect(() => {
    _renderSlideRuler();
  }, []);

  const _renderSlideRuler = () => {
    return new SlideRuler({
      el: refSlideRuler.current,
      maxValue,
      minValue,
      currentValue,
      handleValue,
      precision,
      colorDigit,
      colorDecimal,
      ...rest,
    });
  };

  return (
    <Main>
      <div className="ruler-value" dangerouslySetInnerHTML={{__html: value}}></div>
      <div ref={refSlideRuler}></div>
    </Main>
  );
}

export default index;
