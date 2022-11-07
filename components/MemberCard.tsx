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
        <div>
            <h2>{props.name}</h2>
            <h3>{props.party}</h3>
        </div>
    );
}
