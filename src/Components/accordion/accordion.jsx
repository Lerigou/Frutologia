import * as React from 'react';
import "./accordion.scss";
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import iconOpen from '../../Assets/icon-open.svg';
import iconClose from '../../Assets/icon-close.svg';

export default function Accordions(props) {
  const [expanded, setExpanded] = React.useState(false);
  const [icon, setIcon] = React.useState(iconOpen);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
    setIcon(isExpanded ? iconClose : iconOpen);
  };

  return (
    <div className='accordion-container'>

        <Accordion className="accordion" expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
            <AccordionSummary
                expandIcon={<img src={icon} />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
                className="title-accordion"
            >
                <Typography className='title-text' >
                    {props.titleFaq}
                </Typography>
                
            </AccordionSummary>
            <AccordionDetails>
                <Typography className='accordion-body'>
                    <p>
                        {props.descriptionFaq}
                    </p>
                </Typography>
            </AccordionDetails>
        </Accordion>

    </div>
  );
}
