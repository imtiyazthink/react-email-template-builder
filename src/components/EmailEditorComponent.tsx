import EmailEditor from "react-email-editor";
import { useEmailEditor } from "../hooks";
import { Bar, Container, GlobalStyle } from "../styles";
import { useNavigate } from 'react-router-dom';

interface TemplateListProps {
  onSaveDesign: (design: any) => void;
}

const EmailEditorComponent: React.FC<TemplateListProps> = ({ onSaveDesign }: any) => {
  const { emailEditorRef, preview, togglePreview, saveDesign, onLoad, onReady } = useEmailEditor({ onSaveDesign });
  const navigate = useNavigate();

  const onBack = () => {
    navigate('/')
  }

  return (
    <Container>
      <GlobalStyle />

      <Bar>
        <button onClick={onBack}>Back</button>

        <h1>React Email Editor (Demo)</h1>
        <button onClick={togglePreview}>
          {preview ? 'Hide' : 'Show'} Preview
        </button>
        <button onClick={saveDesign}>Save Design</button>
      </Bar>

      <EmailEditor ref={emailEditorRef} onLoad={onLoad} onReady={onReady} />
    </Container>
  );
};

export default EmailEditorComponent;
