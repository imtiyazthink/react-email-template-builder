import { useRef, useState } from 'react';
import { EditorRef, EmailEditorProps } from 'react-email-editor';
import sample from '../templates/sample.json';
import { useNavigate } from 'react-router-dom';
import html2canvas from 'html2canvas';

export const useEmailEditor = ({ onSaveDesign }: any) => {
  const emailEditorRef = useRef<EditorRef | null>(null);
  const [preview, setPreview] = useState(false);
  const navigate = useNavigate();

  const saveDesign = () => {
    const unlayer = emailEditorRef.current?.editor;
    unlayer?.exportImage((data) => {
      console.log(data)
    });

    unlayer?.saveDesign((design: any) => {
      console.log('saveDesign', design);
      alert('Design Saved.');
      exportHtml(design)
    });
  };


  const exportHtml = (design: any) => {
    const unlayer = emailEditorRef.current?.editor;

    unlayer?.exportHtml((data) => {
      const { html } = data;
      const thumbnailDiv = document.createElement('div');
      thumbnailDiv.innerHTML = html;

      document.body.appendChild(thumbnailDiv);

      html2canvas(thumbnailDiv).then((canvas) => {
        const thumbnail = canvas.toDataURL();
        onSaveDesign({ design, thumbnail })
        document.body.removeChild(thumbnailDiv);
        navigate('/');
      });
    });
  };

  const togglePreview = () => {
    const unlayer = emailEditorRef.current?.editor;

    if (preview) {
      unlayer?.hidePreview();
      setPreview(false);
    } else {
      unlayer?.showPreview('desktop');
      setPreview(true);
    }
  };

  const onLoad: EmailEditorProps['onLoad'] = (unlayer) => {
    console.log('onLoad', unlayer);
    unlayer.loadDesign(sample);
  };

  const onReady: EmailEditorProps['onReady'] = (unlayer) => {
    console.log('onReady', unlayer);
  };

  return { emailEditorRef, preview, togglePreview, saveDesign, exportHtml, onLoad, onReady };
};
