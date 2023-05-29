import styled from "styled-components";

export const ButtonClassic = styled.button` 
    background: ${({ theme }) => theme.bgPrimary};
    color: ${({ theme }) => theme.whiteColor};
    font-size: ${({ theme }) => theme.smallFont};
    font-weight:${({ theme }) => theme.fontWeightBold};
    font-family: 'Source Sans Pro',sans-serif;
    margin:0;
    padding: 0px 12px;
    height:${({ theme }) => theme.buttonHeight};
    border: none;
    border-radius:${({ theme }) => theme.buttonRadius};
    cursor: pointer;

    &.primary {
        background: ${({ theme }) => theme.bgPrimary};
        color: ${({ theme }) => theme.whiteColor};
    } 
    
    &.secondary {
        background: ${({ theme }) => theme.bgSecondary};
        color: ${({ theme }) => theme.darkColor};

        &:hover{
            background: ${({ theme }) => theme.secondarHover};
        }

        &:focus{
            border:2px solid #388BFF;
            background:rgba(9, 30, 66, 0.0588235);
        }
    }
    
    &.link-button{
        background:transparent;
        color:${({ theme }) => theme.blueColor};
        height:auto;
        padding:0;

        &:hover{
            background:transparent;
        }

        &:focus{
            background: transparent;
        }
    }
    
    &:hover{
        background: ${({ theme }) => theme.bgHover};
    }

    &:focus{
        background: ${({ theme }) => theme.bgFocus};
    }

    &:disabled {
        color: #8993A5;
        opacity: 0.7;
        cursor: default;
        background: ${({ theme }) => theme.bgDisabled};
    }

    >.button-left-icon{
        margin-right:8px;
    }
  
 `;

const Button = ({ className, disabled, onClick, buttonText, leftIcon,rightIcon }) => {
    return (
        <ButtonClassic
            disabled={disabled}
            className={className}
            onClick={onClick}
        >
            {leftIcon &&
                <img src={leftIcon} alt="Icon" className="button-left-icon" />
            }
            {buttonText}
            {rightIcon &&
                <img src={rightIcon} alt="Icon" className="button-left-icon" />
            }
        </ButtonClassic>
    )
}

export default Button;

