import React from 'react';
import GlobalStyles from './Assets/GloblaStyles';
import styled from 'styled-components';
import { GlobalProvider } from './Context/GlobalContext';
import TopSection from './Components/TopSection';
import BottomSection from './Components/BotoomSection';

const MainWrapper = styled.main`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;

function App() {
  return (
    <GlobalProvider>
      <MainWrapper>
        <GlobalStyles />
        <TopSection />
        <BottomSection />
      </MainWrapper>
    </GlobalProvider>
  );
}

export default App;
