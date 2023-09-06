import {css} from 'styled-components';

export const mobile = (props) => {
    return css`
        @media only screen and (max-width: 400px) {
            ${props}
        }
    `
}

export const tablet = (props) => {
    return css`
        @media only screen and (max-width: 768px) {
            ${props}
        }
    `
}

export const large = (props) => {
    return css`
        @media only screen and (max-width: 900px) {
            ${props}
        }
    `
}