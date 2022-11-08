import type { NextPageWithLayout } from './_app';
import type { ReactElement } from 'react';
import MemberCard, { MemberProps } from 'components/MemberCard';
import Layout from 'components/Layout';
import { Col, Container, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Members: NextPageWithLayout = (props: any) => {
    const { members } = props.memberData;

    // Filter to only current members
    const currentMembers = members.filter((member: MemberProps) => {
        if (member.served.House) {
            return member.served.House[0].end === null;
        } else if (member.served.Senate) {
            return member.served.Senate[0].end === null;
        }

        return false;
    }).reverse(); // reverse for correct alphabetical order
    
    return (
        <div>
            <h1>Members</h1>
            <Container>
                <Row xs={2} md={3} className="g-3 my-3">
                    {currentMembers.map((member: MemberProps) => (
                        <Col key={member.bioguideId}>
                            <MemberCard {...member} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
}

Members.getLayout = function getLayout(page: ReactElement) {
    return (
        <Layout>{page}</Layout>
    );
}

export async function getServerSideProps() {
    const res = await fetch(`https://api.congress.gov/v3/member?api_key=${process.env.CONGRESS_API_KEY}&format=json`)
    const memberData = await res.json()

    // Pass the data to the page's props
    return { props: { memberData }}
}

export default Members;
