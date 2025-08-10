import CandidateTable from "../CandidateTable";

export default function OpenCandidates(){
    const dummyCandidate = {
        id: 1,
        fullName: "Jane Doe",
        phone: "+1-555-123-4567",
        email: "jane.doe@example.com",
        experience: "3 years",
        education: "B.Sc. Computer Science",
        achievements: ["Employee of the Month", "React Conference Speaker"]
    };

    return (
        <div>
            <CandidateTable candidates={[dummyCandidate]} />
        </div>
    );
}