import styled, {css} from 'styled-components';
// import {device} from '../../theme'

export const LogoWrapper = styled.div `
    display: flex;
    justify-content: ${props => props.justifycontent};
    padding-top: ${props => props.pt};
    padding-bottom: ${props => props.pb};
    a{
        img{
            height: 62px;
        }
    }

    ${props => props.whiteLogo && css `
        .dark-logo {
            display: none;
        }
        .light-logo {
            display: inherit;
        }
    `}
    ${props => !props.whiteLogo && css `
        .dark-logo {
            display: inherit;
        }
        .light-logo {
            display: none;
        }
    `}
`;