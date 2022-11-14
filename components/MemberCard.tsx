import { Card, Image } from 'react-bootstrap';

export type MemberProps = {
    bioguideId: string,
    depiction: {
        attribution: string,
        imageUrl: string,
    },
    district: number,
    name: string,
    party: string,
    served: {
        House?: [
            {
                end?: number,
                start?: number,
            }
        ];
        Senate?: [
            {
                end?: number,
                start?: number,
            }
        ],
    },
    state: string,
    url: string,
};

export default function MemberCard(props: MemberProps) {
    // Change text based on party color
    let partyColor = "green";
    switch (props.party) {
        case "Democratic":
        case "Independent Democrat":
            partyColor = "blue";
            break;
        case "Independent":
            partyColor = "gray";
        case "Libertarian":
            partyColor = "yellow";
        case "Republican":
            partyColor = "red";
            break;
        default:
            break;
    }

    // Set more descriptive data
    let chamber = "";
    let timeServed = "";
    if (props.served.House) {
        chamber = "House of Representatives";
        timeServed = `since ${props.served.House[0].start}`
    } else if (props.served.Senate) {
        chamber = "Senate";
        timeServed = `since ${props.served.Senate[0].start}`
    }

    return (
        <Card border="dark" className="h-100">
            <div className="mt-3" style={{ textAlign: "center" }}>
                <Image 
                    alt={props.name}
                    height="100%"
                    roundedCircle
                    src={props.depiction.imageUrl} 
                />
            </div>
            <Card.Body>
                <div style={{ textAlign: "center" }}>
                    <Card.Title>{props.name}</Card.Title>
                    <Card.Subtitle className="p-1" style={{ color: partyColor }}>{props.party}</Card.Subtitle>
                    <Card.Subtitle className="p-1">{props.state}</Card.Subtitle>
                    <Card.Subtitle className="p-1">{chamber}: {timeServed}</Card.Subtitle>
                </div>
            </Card.Body>
        </Card>
    );
}
