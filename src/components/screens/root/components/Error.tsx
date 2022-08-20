import React from "react";
import { FormattedMessage } from "react-intl";
import { connect, ConnectedProps } from "react-redux";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { setMessage } from "../../../../redux/slices/errorMessage";

import Label from "../../../primitives/Label";
import Button from "../../../primitives/Button";

const Background = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: ${ ({ theme }) => theme.error.backgroundColor };
  z-index: 100;
`;

const Message = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: ${ ({ theme }) => `${ theme.gaps.big }rem` };
  margin: ${ ({ theme }) => `${ theme.gaps.big }rem` };
  padding: ${ ({ theme }) => `${ theme.gaps.big }rem` };
  background: ${ ({ theme }) => theme.colors.bgSecondary };
  text-align: center;
  color: ${ ({ theme }) => theme.colors.main };
  border-radius: ${ ({ theme }) => `${ theme.decorative.borderRadius }px` };
  max-width: ${ ({ theme }) => `${ theme.error.width }rem` };
`;

const ButtonWrapper = styled.div`
  padding-right: ${ ({ theme }) => `${ theme.gaps.big }rem` };
  color: ${ ({ theme }) => theme.colors.font };
`;

const mapState = ( state: any ) => {
  return {
    message: state.errorMessage.message,
  }
}

const connector = connect( mapState );

type Props = ConnectedProps<typeof connector>;

const Error: React.FC<Props> = ( props: Props ) => {
  const dispatch = useDispatch();
  
  return props.message ?
  <Background onClick={() => dispatch( setMessage( '' ) )}>
    <Message>
      <Label text={ props.message } />
      <ButtonWrapper>
        <FormattedMessage id="OK"/>
      </ButtonWrapper>
    </Message>
  </Background> : null;
}

export default connector( Error );