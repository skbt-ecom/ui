import React from 'react';
// Import the storybook libraries
import { storiesOf } from '@storybook/react';
import { muiTheme } from 'storybook-addon-material-ui';

// Import our component from this folder
import Modal from './Modal';

import theme from '../../style/theme';

const ModalExample = props => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <button type="button" onClick={handleOpen}>
        Open Modal
      </button>
      <Modal open={open} onClose={handleClose} {...props} />
    </>
  );
};

storiesOf('Modal', module)
  .addDecorator(muiTheme([theme]))
  .add('Default', () => (
    <ModalExample>
      <div style={{ background: 'white', width: '400px', height: '400px' }}>
        Modal content
      </div>
    </ModalExample>
  ));
