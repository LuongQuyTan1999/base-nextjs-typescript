import styled from "styled-components";

export const Textarea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  label,
  div {
    font-size: 1.4rem;
    line-height: 2rem;
    color: ${({ theme }) => theme.mainText};
  }

  textarea {
    border: 1px solid #e5e5e5;
    border-radius: 10px;
    padding: 1.8rem;
    font-size: 1.6rem;
    line-height: 2.4rem;
  }

  textarea.isvalid {
    outline: 1px solid red;
    border: 1px solid red !important;
  }

  .text-error {
    color: red;
  }
`;
