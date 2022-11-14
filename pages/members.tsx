import type { NextPageWithLayout } from './_app';
import type { ReactElement } from 'react';
import MemberCard, { MemberProps } from 'components/MemberCard';
import Layout from 'components/Layout';
import { Col, Container, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export type MembersPageProps = {
    members: MemberProps[],
};

const Members: NextPageWithLayout<MembersPageProps> = ({ members }) => {
    // Filter to only current members
    const currentMembers = members.filter((member: MemberProps) => {
        if (member.served.House) {
            return member.served.House[0].end === null;
        } else if (member.served.Senate) {
            return member.served.Senate[0].end === null;
        }

        return false;
    }).sort((a, b) => a.state.localeCompare(b.state)); // Sort by state alphabetically
    
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

// Get all the members by recursively going through the API pages
const memberUrl = `https://api.congress.gov/v3/member?api_key=${process.env.CONGRESS_API_KEY}&format=json`;
const limitPerPage = 250;

const getMembers = async (offset: number = 0): Promise<MemberProps[]> => {
    let url = memberUrl + `&offset=${offset}&limit=${limitPerPage}`;
    let results = await fetch(url).then(resp => resp.json());

    return results["members"];
}

const getAllMembers = async (offset: number = 0): Promise<MemberProps[]> => {
    const results = await getMembers(offset);
    console.log(`Retreiving data from API starting with entry ${offset}`);

    if (results.length > 0) {
        return results.concat(await getAllMembers(offset + limitPerPage));
    } else {
        return results;
    }
}

export async function getServerSideProps() {
    const members = await getAllMembers();

    // Pass the data to the page's props
    return { props: { members } }
}

export default Members;
