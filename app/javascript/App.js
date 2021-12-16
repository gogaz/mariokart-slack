import React from 'react'
import styled from 'styled-components';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

import { cssQueries } from './basics/Media';

import theme from './theme'

import Navbar from './App/Navbar';

import Games from './App/Games'
import Ranking from './App/Ranking';

const client = new ApolloClient({
    uri: '/data',
    cache: new InMemoryCache()
});

library.add(fas)

const Container = styled.div`
    display: flex;
    
    @media ${cssQueries.desktop} {
        flex-direction: row;
    }

    @media ${cssQueries.mobile} {
        flex-direction: column;
    }

    height: 100%;
`

const ContentContainer = styled.div`
    width: 100%;
    @media ${cssQueries.desktop} {
        margin-left: 220px;
    }

    @media ${cssQueries.mobile} {
        margin-top: 50px;
    }
`

const App = () => (
    <ApolloProvider client={client}>
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <Container>
                    <Navbar />

                    <ContentContainer>
                        <Routes>
                            <Route path="/" element={<Navigate to="games" />} />
                            <Route path="games" element={<Games />} />
                            <Route path="ranking" element={<Ranking />} />
                        </Routes>
                    </ContentContainer>
                </Container>
            </BrowserRouter>
        </ThemeProvider>
    </ApolloProvider>
)

export default App