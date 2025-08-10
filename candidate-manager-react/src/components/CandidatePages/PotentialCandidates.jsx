import CandidateTable from "../CandidateTable";

export default function PotentialCandidates() {
    const dummyCandidate = {
        id: 2,
        fullName: "John Smith",
        phone: "+1-555-987-6543",
        email: "john.smith@example.com",
        experience: "5 years",
        education: "M.Sc. Software Engineering",
        achievements: ["Hackathon Winner", "Published Research Paper"]
    };

    return (
        <div>
            <CandidateTable candidates={[dummyCandidate]} />
        </div>
    );
}