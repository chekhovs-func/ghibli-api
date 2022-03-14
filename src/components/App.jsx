import { createGlobalStyle } from 'styled-components';
import { useEffect, useState } from 'react';
import axios from 'axios';
import * as _ from './styles';
import { ReactComponent as GhibliLogo } from '../logo.svg';
import Card from './Card.jsx';

const GlobalStyle = createGlobalStyle`
  * {
  margin: 0;
  box-sizing: border-box;
  padding: 0;

  .logo {
    align-self: center;
  }
}
`;

export default function App() {
  const [response, setResponse] = useState([]);

  useEffect(() => {
    axios({
      method: 'GET',
      url: 'https://ghibliapi.herokuapp.com/films',
      params: {
        _limit: 12,
      },
    })
      .then(response => setResponse(response.data) & console.log(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <>
      <GlobalStyle />
      <_.Container>
        <_.Header>
          <GhibliLogo className='logo' />
        </_.Header>
        <_.CardWrapper>
          {response.map((object, index) => (
            <Card
              key={index}
              title={object.title}
              subtitle={object.original_title}
              director={object.director}
              description={object.description}
            />
          ))}
        </_.CardWrapper>
      </_.Container>
    </>
  );
}
