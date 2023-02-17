import styled from 'styled-components';

export default function Error() {
  return (
    <ErrorContainer>
      <h1>Ops, some error ocurred, please refresh the page.</h1>
      <iframe
        src="https://giphy.com/embed/11LkxpJX5Eex7q"
        width="480"
        height="479"
        frameBorder="0"
        className="giphy-embed"
        allowFullScreen></iframe>
      <p>
        <a href="https://giphy.com/stickers/pokemon-11LkxpJX5Eex7q"></a>
      </p>
    </ErrorContainer>
  );
}

const ErrorContainer = styled.div`
  width: 100%;
  height: 80px;
  padding: 10% 10%;
`;
