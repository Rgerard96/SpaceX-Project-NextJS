import Head from 'next/head';
import Launches from '../components/Launches';
import { initializeApollo } from '../graphql/client';
import { useQuery, gql } from '@apollo/client';

const GET_LAUNCHES = gql`
  query LaunchesQuery {
    launches {
      id
      name
      success
      date_local
      links {
        patch {
          small
        }
      }
    }
  }
`;

export default function LaunchesPage() {
  const { data } = useQuery(GET_LAUNCHES);
  console.log(data);
  return (
    <div>
      <Head>
        <title>SpaceX Launches Project</title>
        <meta
          name='description'
          content='SpaceX Launches Project created with Next JS'
        />
        <link rel='icon' href='/images/space-shuttle-solid.svg' />
        <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css'
        />
      </Head>

      <h3 className='my-3'>Launches</h3>
      <div className='boxStyle'>
        <div
          style={{ backgroundColor: 'green', width: '40px', height: '20px' }}
          className='mr-1'
        ></div>
        <p>= Success</p>
      </div>
      <div className='boxStyle'>
        <span
          style={{ backgroundColor: 'red', width: '40px', height: '20px' }}
          className='mr-1'
        ></span>
        <p>= Failure</p>
      </div>
      <Launches data={data} />
    </div>
  );
}

export async function getStaticProps() {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: GET_LAUNCHES,
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
  };
}
