import CandidateTable from "../CandidateTable";

export default function InProgressCandidates() {
    const dummyCandidate = {
        id: 5,
        fullName: "Emily Davis",
        phone: "+1-555-654-7891",
        email: "emily.davis@example.com",
        experience: "2 years",
        education: "B.A. Marketing",
        achievements: ["Top Salesperson", "Marketing Campaign Lead"]
    };

    return (
        <div>
            <CandidateTable candidates={[dummyCandidate]} />
        </div>
    );
}