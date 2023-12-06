import React, { useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import TemplateList from './components/TemplateList';
import EmailEditorComponent from './components/EmailEditorComponent';

const App: React.FC = () => {

  const [templates, setTemplates] = useState<any>([]);

  const handleSaveDesign = ({ design, thumbnail }: any) => {
    const newTemplate = {
      id: templates.length + 1,
      design: design,
      thumbnail
    };

    setTemplates([...templates, newTemplate]);
  };

  return (
    <Router>
      <Routes>
        <Route path="" element={<TemplateList templates={templates} />} />
        <Route path="/email-editor" element={<EmailEditorComponent onSaveDesign={handleSaveDesign} />} />
      </Routes>
    </Router>
  );
};

export default App;
