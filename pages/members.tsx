import MemberCard, { MemberProps } from 'components/MemberCard';

const api_key = "4fnmyKS2avuHrzem1IhyZGLZVslbkZPDmZz4BV4r";

// TODO: what would be the prop type here?
function Members(props: any) {
    const { members } = props.data;
    
    return (
        <div>
            <h1>Members</h1>
            <div>
                {members.map((member: MemberProps) => 
                    <MemberCard key={member.bioguideId} {...member} />
                )}
            </div>
        </div>
    );
}

export async function getServerSideProps() {
    const res = await fetch(`https://api.congress.gov/v3/member?api_key=${api_key}&format=json`)
    const data = await res.json()

    // Pass the data to the page's props
    return { props: { data }}
}

export default Members;
