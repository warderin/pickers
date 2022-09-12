import React, {useState} from 'react';
import {
  Flex,
  Button,
  Image,
  Text,
  TextField,
  ToggleButtonGroup,
  ToggleButton,
  Heading,
  Icon,
} from "@aws-amplify/ui-react";
import './styles/PoolForm.css';

function validate() {
}

function submitPool() {
  validate();
}

export default function PoolForm({toggleModal}) {
  const [isOpen, setIsOpen] = useState(true);
  
  const toggleIt = () => {
    setIsOpen(false);
    toggleModal();
  }

  return (
    <div
      id="pool-form"
    >
      <Icon
        viewBox={{ width: 16, height: 16 }}
        paths={[
          {
            d: "M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z",
            fill: 'transparent',
            stroke: 'currentColor',
          },
        ]}
        className="close-modal"
        onClick={toggleIt}
      />
      <Heading
        level={4}>
        Create a pool
      </Heading>
      <div className="pool-selector">
        <Flex direction="column"
          justifyContent="center"
          alignItems="center"
          alignContent="center">
          <p className="label">Pool type</p>
          <Flex
            direction="row" >
            <ToggleButton value="nfl" className="sport-btn">
              <Flex direction="column">
                <img src={ require("../assets/img/003-american-football-1.png") } className="sport-logo" alt="football" />
                <p>Football</p>
              </Flex>
            </ToggleButton>
            <ToggleButton value="golf" className="sport-btn">
              <Flex direction="column">
                <img src={ require("../assets/img/005-golf.png") } className="sport-logo" alt="golf" />
                <p>Golf</p>
              </Flex>
            </ToggleButton>
          </Flex>
        </Flex>
      </div>
      <TextField
        id="pool-form-name"
        placeholder="Pickers"
        label="Pool name"
        errorMessage="Enter a pool name"
      />
      <TextField
        id="pool-form-members"
        placeholder="10 (optional)"
        label="Maximum # of members"
        errorMessage="There is an error"
      />
      <Button
        variation="primary"
        children="Create a pool"
        margin="20px"
        onClick={submitPool()}>
      </Button>
    </div>
  );
}