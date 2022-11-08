import MemberCard, { MemberProps } from 'components/MemberCard';
import { Col, Container, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// TODO: what would be the prop type here?
function Members(props: any) {
    const { members } = props.data;
    
    return (
        <div>
            <h1>Members</h1>
            <Container>
                <Row className="g-4">
                    {members.map((member: MemberProps) => (
                        <Col key={member.bioguideId} xs={1} md={3}>
                            <MemberCard {...member} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
}

export async function getServerSideProps() {
    const res = await fetch(`https://api.congress.gov/v3/member?api_key=${process.env.CONGRESS_API_KEY}&format=json`)
    const data = await res.json()

    // Pass the data to the page's props
    return { props: { data }}
}

export default Members;
