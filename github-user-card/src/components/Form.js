import React from 'react';
import { InputGroup, InputGroupAddon, Button, Input, CardTitle } from 'reactstrap';

const InputForm = (props) => {
  return (
    <div>
      <CardTitle className='form-header'>Search for a User</CardTitle>
      <InputGroup>
        <Input 
          value={props.updateText}
          onChange={props.changeHandler}
        />
        <InputGroupAddon addonType="append">
          <Button color="secondary" onClick={props.fetch}>Find User</Button>
        </InputGroupAddon>
      </InputGroup>
    </div>
  );
};

export default InputForm;