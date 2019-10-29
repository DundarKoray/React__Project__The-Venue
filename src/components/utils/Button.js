import React from 'react';
import Button from '@material-ui/core/Button';

import TicketIcon from '../../resources/images/icons/ticket.png';

const Button = (props) => {
    return (
        <div>
            <Button
                href="http://google.com"
                variant="contained"
                size="small"
                style={{ background: 'red', color: 'white' }}
            >
                <img
                    src={TicketIcon}
                    className="iconImage"
                    alt="icon_button"
                />
                Purchase Tickets
            </Button>
        </div>
    );
};

export default Button;