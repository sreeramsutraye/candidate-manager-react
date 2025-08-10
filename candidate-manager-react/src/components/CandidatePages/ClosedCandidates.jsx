import CandidateTable from "../CandidateTable";

export default function ClosedCandidates() {
    const dummyCandidate = {
        id: 3,
        fullName: "Alice Johnson",
        phone: "+1-555-456-7890",
        email: "alice.johnson@example.com",
        experience: "7 years",
        education: "MBA",
        achievements: ["Team Lead", "Project Manager"]
    };

    return (
        <div>
            <CandidateTable candidates={[dummyCandidate]} />
        </div>
    );
}