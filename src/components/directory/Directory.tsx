import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { API } from '../../api/API';
import { IResponse } from '../../interface';

function Directory() {
  const [photos, setPhotos] = useState<IResponse[]>([]);
  const getPhotos = async () => {
    try {
      const photos = await API.getPhotos('/photos', { per_page: 5 });
      setPhotos(photos.data);
    } catch (e) {
      console.log('에러!', e);
    }
  };
  useEffect(() => {
    getPhotos();
  }, []);
  return (
    <Container>
      <Row>
        {photos.map((item) => (
          <Col key={item.id}>
            <img src={item.urls.regular} alt={item.id} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

const Container = styled.div`
  max-width: 1200px;
  margin: 70px auto 0;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

const Col = styled.div`
  width: 350px;
  height: 350px;
  padding: 10px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export default Directory;
