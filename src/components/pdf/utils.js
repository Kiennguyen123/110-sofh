import commons from './commons';
export const getFilePdf = async ({ id }) => {
  let data;
  try {
    // if (id) {
    const response = await commons.getPdf({ id });

    return response.data;
    // }
  } catch (e) {
    console.log('pdf', e);
  }

  return data;
};

export const print = async ({ pdf, typeUrl, isDownload }) => {
  if (!pdf) return;
  // setTimeout(() => {
  getFilePdf({ pdf, typeUrl }).then((Response) => {
    const blob = new Blob([new Uint8Array(Response)], {
      type: 'application/pdf',
    });
    const blobUrl = URL.createObjectURL(blob);
    if (isDownload) {
      const reader = new FileReader();
      reader.readAsDataURL(blob);
      reader.onload = function (e) {
        const save = document.createElement('a');
        save.href = e.target.result;
        save.download = pdf || 'unknown file';
        save.style = 'display:none;opacity:0;color:transparent;';
        (document.body || document.documentElement).appendChild(save);
        if (typeof save.click === 'function') {
          save.click();
        } else {
          save.target = '_blank';
          const event = document.createEvent('Event');
          event.initEvent('click', true, true);
          save.dispatchEvent(event);
        }
        (window.URL || window.webkitURL).revokeObjectURL(save.href);
      };
    } else {
      const textEditor = document.getElementById('print-iframe');
      textEditor.onload = function () {
        setTimeout(() => {
          textEditor.contentWindow.print();
        }, 200);
      };
      textEditor.src = blobUrl;
    }
  });
  // }, 2500);
};
