import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { Bar, Container, GlobalStyle } from '../styles';

export interface Template {
  id: number;
  design: any;
  thumbnail: any;
}

interface TemplateListProps {
  templates: Template[];
}

const TemplateList: React.FC<TemplateListProps> = ({ templates }) => {
  const navigate = useNavigate();

  const handleCreateNew = () => {
    navigate('/email-editor');
  };

  return (
    <Container>
      <GlobalStyle />
      <Bar>

        <h1>Templates</h1>
        <button onClick={handleCreateNew}>Create New</button>
      </Bar>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Template Thumbnail</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {templates.length > 0 ? templates.map((template) => (
              <TableRow key={template.id}>
                <TableCell>{template.id}</TableCell>
                <TableCell>
                  <img src={template.thumbnail} alt={`Template ${template.id}`} width={'400px'} height={'400px'} />
                </TableCell>
              </TableRow>
            )) : <TableRow>
              <TableCell>No Template Available</TableCell>
            </TableRow>}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default TemplateList;
