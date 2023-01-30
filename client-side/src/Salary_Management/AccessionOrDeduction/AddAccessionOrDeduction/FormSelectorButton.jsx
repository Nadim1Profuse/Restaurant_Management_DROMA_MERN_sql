import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

export default function FormSelectorButton(props) {
  const [alignment, setAlignment] = React.useState('accession');

  function handleChange(event, newAlignment) {
    setAlignment(newAlignment)
    props.formSelection(newAlignment);
    
  };

  return (
    <ToggleButtonGroup
      color="primary"
      value={alignment}
      exclusive
      onChange={handleChange}
      aria-label="Platform"
    >
      <ToggleButton value="accession">Accession<ArrowDropUpIcon/></ToggleButton>
      <ToggleButton disabled value="disabled"></ToggleButton>
      <ToggleButton value="deduction"><ArrowDropDownIcon/>Deduction</ToggleButton>
    </ToggleButtonGroup>
  );
}