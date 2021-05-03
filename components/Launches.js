import { Button, Card, Col, Image, Row, Spinner } from 'react-bootstrap';
import Link from 'next/link';
import moment from 'moment';

function Launches({ data }) {
  return (
    <>
      {data.launches.map((launch) => (
        <Card
          key={launch.id}
          className='my-3 animate__animated animate__fadeInUp'
        >
          <Card.Body>
            <Row className='align-items-center'>
              <Col>
                <Card.Title>
                  Mission:{' '}
                  <span
                    style={{
                      color: launch.success
                        ? 'green'
                        : launch.success === null
                        ? 'white'
                        : 'red',
                    }}
                  >
                    {launch.name}
                  </span>
                </Card.Title>
                <Card.Text>
                  {moment(launch.date_local).format('DD-MM-YYYY hh:mm A')}
                </Card.Text>
                <Link href={`launch/${launch.id}`}>
                  <Button variant='secondary'>Launch Details</Button>
                </Link>
              </Col>
              <Col>
                <Image
                  src={
                    launch.links.patch.small
                      ? launch.links.patch.small
                      : '/images/space-shuttle.svg'
                  }
                  alt='N.A'
                  width='100'
                  className='float-right'
                />
              </Col>
            </Row>
          </Card.Body>
        </Card>
      ))}
    </>
  );
}

export default Launches;
