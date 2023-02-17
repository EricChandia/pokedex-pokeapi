import styled from 'styled-components';

export default function Loading() {
  return (
    <LoadingContainer>
      <Image
        src="https://i.gifer.com/origin/28/2860d2d8c3a1e402e0fc8913cd92cd7a_w200.gif"
        alt="loading"></Image>
    </LoadingContainer>
  );
}

const LoadingContainer = styled.div`
  width: 80px;
  height: 80px;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
`;
