import 'bootswatch/dist/cyborg/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import '../styles/globals.css';
import { ApolloProvider } from '@apollo/client';
import { useApollo } from '../graphql/client';

function MyApp({ Component, pageProps }) {
  const apolloClient = useApollo(pageProps.initialApolloState);
  return (
    <ApolloProvider client={apolloClient}>
      <Container>
        <div className='logoBox my-4'>
          <img src='/images/SpaceX-White-Logo.wine.svg' alt='SpaceX Logo' />
        </div>
        <Component {...pageProps} />
      </Container>
    </ApolloProvider>
  );
}

export default MyApp;
