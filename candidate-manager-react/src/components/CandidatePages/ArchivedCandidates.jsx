import CandidateTable from "../CandidateTable";

export default function ArchivedCandidates() {
    const dummyCandidate = {
        id: 4,
        fullName: "Michael Brown",
        phone: "+1-555-321-6547",
        email: "michael.brown@example.com",
        experience: "10 years",
        education: "Ph.D. Artificial Intelligence",
        achievements: ["Patent Holder", "Keynote Speaker"]
    };

    return (
        <div>
            <CandidateTable candidates={[dummyCandidate]} />
        </div>
    );
}