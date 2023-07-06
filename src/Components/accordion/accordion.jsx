import * as React from 'react';
import "./accordion.scss";
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import iconOpen from '../../Assets/icon-open.svg';
import iconClose from '../../Assets/icon-close.svg';

export default function ControlledAccordions() {
  const [expanded, setExpanded] = React.useState(false);
  const [icon, setIcon] = React.useState(iconOpen);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
    setIcon(isExpanded ? iconClose : iconOpen);
  };

  return (
    <div >
        <Accordion className="accordion" expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
            <AccordionSummary
                expandIcon={<img src={icon} />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
                className="title-accordion"
            >
                <Typography >
                    A fruta que você pesquisou não apareceu?
                </Typography>
                
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                Nossa ferramenta não dispõem de algumas frutas devido a mudança causada pela regionalização, 
                tente outro nome. Verifique também se escreveu corretamente o nome da fruta que deseja consultar. 
                </Typography>
            </AccordionDetails>
        </Accordion>

        <Accordion className="accordion" expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
            <AccordionSummary
                expandIcon={<img src={icon} />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
                className="title-accordion"
            >
                <Typography >
                    Onde entrar em contato?
                </Typography>
                
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                Ao final da página você encontra a opção de enviar um comentário. 
                Clicando aqui você será direcionado para lá! 
                </Typography>
            </AccordionDetails>
        </Accordion>

    </div>
  );
}
