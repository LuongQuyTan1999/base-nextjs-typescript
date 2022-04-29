import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  body: "#FCFCFD;",
  main: "#5C14DB",
  mainColor: "#FFFFFF",
  mainText: "#6A81BB",
  primaryText: "#0e2667",
  titleColor: "#1C253C",
  projectColor: "linear-gradient(90deg, #00A3FF 0%, #0075FF 100%)",
  bgGray: "#F4F5F6",
  primary: "#D63384",
  bgPrimary: "linear-gradient(90deg, #DF7BEA 0%, #ED3197 100%)",
};

export const GlobalStyles = createGlobalStyle`
  *,*::before,*::after{
    box-sizing:border-box;
    margin: 0;
    padding: 0;
    scroll-margin-top: 100px;
  }

  body {
    margin: 0;
    padding: 0;
    background: ${({ theme }) => theme.mainColor};
    color: ${({ theme }) => theme.titleColor};
    font-family: 'Inter', sans-serif !important;
    font-style: normal;
    font-weight: 400;
    font-style: normal;
    transition: all 0.50s linear;
    word-break: break-word;
  }
  
  input, textarea, button {font-family: inherit;
      ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
            color: ${({ theme }) => theme.mainText};
        opacity: 1; /* Firefox */
      }

      :-ms-input-placeholder { /* Internet Explorer 10-11 */
            color: ${({ theme }) => theme.mainText};
      }

      ::-ms-input-placeholder { /* Microsoft Edge */
            color: ${({ theme }) => theme.mainText};
      }
  }

  ol,ul{
    list-style:none;
    padding: 0;
    margin: 0;

  }
  caption,th{
    text-align:left;
  }
  h1,h2,h3,h4,h5,h6{
    font-size:100%; 
    font-weight:400;

  }
  q:before,q:after{
    content:'';
  }
  abbr,acronym{
    border:0;
  }

  a{
    text-decoration:none;
    color: ${({ theme }) => theme.mainColor};
  }
  a:hover {
    color: ${({ theme }) => theme.primary} !important;
  }
  a:active,a:focus{
    outline:none;
  } 

  a:hover svg path  {
    stroke: ${({ theme }) => theme.primary};
  }


  input:focus-visible, 
  input:active,
  input:focus,
  textarea:focus-visible, 
  textarea:active,
  textarea:focus,
  select:focus-visible, 
  select:active,
  select:focus {
    -webkit-outline-color: ${({ theme }) => theme.primary};
    outline-color: ${({ theme }) => theme.primary};
    border: 1px solid ${({ theme }) => theme.primary} !important; 
  }

  table {
    border-collapse: inherit;
    width: 100%;
    border: 1px solid #eaeaea;
    border-radius: 1rem;
    margin-top: 3.2rem;

    thead {
      tr th {
        font-weight: bold;
        font-size: 1.6rem;
        line-height: 2.4rem;
        color: ${({ theme }) => theme.mainText};
        padding: 2rem;
        padding-bottom: 1.2rem;
        border-bottom: 1px solid ${({ theme }) => theme.bgGray};
      }
    }

    tbody {
      tr td {
        font-size: 1.6rem;
        line-height: 2.4rem;
        padding: 2rem;
        padding-bottom: 1.2rem;
        border-bottom: 1px solid ${({ theme }) => theme.bgGray};
      }

      tr td:last-child {
        cursor: pointer;
      }

      tr:last-child td {
        border-bottom: none;
      }
    }
  }

  .modal-backdrop.show {
    background-color: #434C61;
  }

  .Toastify__toast .Toastify__toast-body {
    font-size: 1.6rem;
  }

   /* Variables */
  :root{
    
    /* Reset 1rem = 10px */
      font-size: 10px;
    /* Basic colors
      --white:#ffffff;
      --black:#000000;
    /* ... */
    
    /* Project colors */
    /* --yellow:hsl(57,88%,58%);
    --blue:hsl(220,88%,58%);
    
    /* Layout variables */
    /* --content-width:90rem; */
    /* --content-padding:1rem; */
    
    /* --header-height:10rem; */
    /* --keyvisual-height:60rem; */
  }

  /* Media Queries */
  /* Tablet portrait */
  /* @media(min-width: 768px){
    :root{
      font-size:10px;
    }
  } */
  
  /* Tablet landscape */
  /* @media(min-width:1024px){
    :root{
      font-size:10px;
      --content-width:100%;
      --content-padding:2rem;
    }
  } */
  /* Old desktop or large scaled UI */
  /* @media(min-width:1280px){
    :root{
      font-size:10px;
    }
  } */
  /* Standard desktop  */
  /* @media(min-width:1920px){
    :root{
      font-size: 10px;
      --content-padding:4rem;
    }
  } */
`;
