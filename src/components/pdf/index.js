import React, { useState, useEffect } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import PropTypes from 'prop-types';
import { getFilePdf } from './utils';
import { absoluteFileUrl } from '@utils/common';
import {
  StepForwardOutlined,
  StepBackwardOutlined,
} from '@ant-design/icons';
import './style.scss';
import { Button } from 'antd';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
const Pdf = (props) => {
  const [data, setData] = useState('');
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const { id } = props;

  useEffect(() => {
    if (!id) return;
    setData('');
    getPdf();
  }, [id]);

  const getPdf = async () => {
    const response = await getFilePdf({ id });
    setData(response.data);
  };

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const handlePreviosPage = () => {
    if (pageNumber <= 1) {
      return;
    }
    setPageNumber(pageNumber - 1);
  };

  const handleNextPage = () => {
    if (pageNumber >= numPages) {
      return;
    }
    setPageNumber(pageNumber + 1);
  };

  const myPdf = (
    <Document
      file={data && absoluteFileUrl(data)}
      onLoadSuccess={onDocumentLoadSuccess}
      // onItemClick={({ pageNumber }) => console.log(pageNumber)}
    >
      <Page pageNumber={pageNumber} />
      <div className="pdf-footer">
        <div>
          <Button
            style={{ marginRight: '5px' }}
            onClick={handlePreviosPage}
            disabled={pageNumber <= 1}
          >
            <StepBackwardOutlined />
          </Button>
          <Button
            onClick={handleNextPage}
            disabled={pageNumber >= numPages}
          >
            <StepForwardOutlined />
          </Button>
        </div>
        <span className="per-page">
          Page {pageNumber} of {numPages}
        </span>
      </div>
    </Document>
  );

  return <div>{myPdf}</div>;
};

Pdf.propTypes = {
  pdf: PropTypes.string.isRequired,
  typeUrl: PropTypes.number,
};

Pdf.defaultProps = {
  typeUrl: 0,
};

export default Pdf;
