import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  body: "#FCFCFD;",
  main: "#5C14DB",
  mainColor: "#FFFFFF",
  mainText: "#6A81BB",
  primaryText: "#0e2667",
  titleColor: "#1C253C",
  projectColor: "#FF8B00",
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
    /* font-family: 'SF Pro Text', sans-serif !important; */
    font-style: normal;
    font-weight: 400;
    font-style: normal;
    transition: all 0.50s linear;
    word-break: break-word;
  }
  
  input, textarea, button {font-family: inherit;
      ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
            color: #d4d4d4;
        opacity: 1; /* Firefox */
      }

      :-ms-input-placeholder { /* Internet Explorer 10-11 */
            color: #d4d4d4;
      }

      ::-ms-input-placeholder { /* Microsoft Edge */
            color: #d4d4d4;
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
    color: ${({ theme }) => theme.projectColor} !important;
  }
  a:active,a:focus{
    outline:none;
  } 

  a:hover svg path  {
    stroke: ${({ theme }) => theme.projectColor};
    fill: ${({ theme }) => theme.projectColor};
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
    -webkit-outline-color: ${({ theme }) => theme.projectColor};
    outline-color: ${({ theme }) => theme.projectColor};
  }

  button[aria-label="Unzoom image"] {
    cursor: zoom-out
  }

  table {
    width: 100%;
    margin: 0rem !important;

    thead {
      tr > th:first-child {
        padding-left: 1.5rem !important;
      }

      tr th {
        font-weight: 700;
        font-size: 1.4rem;
        line-height: 2.2rem;
        color: #A3A3A3;
        padding: 1.3rem 0rem !important;
        text-align: center;
        border-bottom: none;
      }
    }

    tbody {
      tbody, td, tfoot, th, thead, tr {
        border:none !important;
      }

      tr > td:first-child {
        padding-left: 1.5rem !important;
      }

      tr td {
        font-weight: 400;
        font-size: 1.6rem;
        line-height: 2.4rem;
        color: #171717;
        padding: 1.3rem 0rem !important;
        text-align: center;
      }

      tr td:last-child {
        cursor: pointer;
      }

      tr:last-child td {
        border-bottom: none;
      }
    }
  }

  .table>:not(:first-child) {
      border: none
  }

  .table-striped>tbody>tr:nth-of-type(odd)>* {
    --bs-table-accent-bg: rgba(245, 245, 245, 0.5);
    color: #171717;
  }

  .modal-backdrop.show {
    background-color: rgba(0, 0, 0, 0.6),
  }

  .modal-content {
    background: #ffffff;
    border-radius: 10px;

    .modal-header {
      box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.1);
      border-radius: 10px 10px 0px 0px;
      border: none;
      padding: 1.5rem 3rem;

      .modal-title {
        font-weight: 700;
        font-size: 2.4rem;
        line-height: 3.6rem;
        color: #171717;
        flex: 1;
        text-align: center;
      }
    }

    .modal-body {
      padding: 3rem;
    }

    .modal-footer {
      border: none;
      padding: 0rem 3rem 3rem 3rem;
    }
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
