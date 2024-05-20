import styled from "styled-components";

const ToolTipStyle = styled.div`
        /* Tooltip container */
    .tooltip {
      position: relative;
      display: inline-block;
    }
    
    /* Tooltip text */
    .tooltip .tooltiptext {
      visibility: hidden;
      width: 130px;
      background-color: black;
      color: #fff;
      text-align: center;
      padding: 5px 0;
      border-radius: 6px;
    
      /* Position the tooltip text */
      position: absolute;
      z-index: 1;
      bottom: 125%; /* Position above the text */
      left: 50%;
      margin-left: -60px; /* Center the tooltip */
    }
    
    .tooltip .tooltiptext::after {
      content: '';
      position: absolute;
      top: 100%; /* At the bottom of the tooltip */
      left: 50%;
      margin-left: -5px;
      border-width: 5px;
      border-style: solid;
      border-color: black transparent transparent transparent; /* Arrow */
    }
    
    .svg:hover {
        color: var(--primaria);
    }
    
    /* Show the tooltip text when you mouse over the tooltip container */
    .tooltip:hover .tooltiptext {
      visibility: visible;
    }
`;

export { ToolTipStyle };