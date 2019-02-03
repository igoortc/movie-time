import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Luckiest+Guy|Lato');

    body {
        margin: 0;
        background-color: #1d1e1f;
        padding: 15px;
    }

    a {
        color: #756342;
        text-decoration: none;
    }


    a:hover {
        color: #b5965c;
    }
`;

export default GlobalStyle;
