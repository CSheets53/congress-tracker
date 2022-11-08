import { Card } from 'react-bootstrap';

export interface MemberProps {
    bioguideId: string;
    depiction: {
        attribution: string;
        imageUrl: string;
    },
    district: number;
    name: string;
    party: string;
    served: {
        House?: [
            {
                end?: number;
                start?: number;
            }
        ];
        Senate?: [
            {
                end?: number;
                start?: number;
            }
        ];
    };
    state: string;
    url: string;
}

export default function MemberCard(props: MemberProps) {
    return (
        <Card border="dark" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={props.depiction.imageUrl} />
            <Card.Body>
                <Card.Title>{props.name}</Card.Title>
                <Card.Subtitle>{props.party}</Card.Subtitle>
            </Card.Body>
        </Card>
    );
}
