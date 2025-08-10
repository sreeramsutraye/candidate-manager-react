import SummarizeIcon from '@mui/icons-material/Summarize';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteIcon from '@mui/icons-material/Delete';

export default function CandidateTable({ candidates }) {
    if (!candidates || candidates.length === 0) {
        return <div>No candidates available</div>;
    }

    return (
        <div style={{ margin: '80px 0px 20px 240px' }}>
            <table
                style={{
                    width: '100%',
                    tableLayout: 'fixed',
                    borderCollapse: 'collapse',
                    maxWidth: '1000px', // You can adjust this value as needed
                }}
            >
                <thead>
                    <tr>
                        <th style={{ border: '1px solid #ddd', padding: '8px', width: '150px' }}>Full Name</th>
                        <th style={{ border: '1px solid #ddd', padding: '8px', width: '120px' }}>Phone</th>
                        <th style={{ border: '1px solid #ddd', padding: '8px', width: '180px' }}>Email</th>
                        <th style={{ border: '1px solid #ddd', padding: '8px', width: '100px' }}>Experience</th>
                        <th style={{ border: '1px solid #ddd', padding: '8px', width: '120px' }}>Education</th>
                        <th style={{ border: '1px solid #ddd', padding: '8px', width: '170px' }}>Achievements</th>
                        <th style={{ border: '1px solid #ddd', padding: '2px', width: '170px' }}>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {candidates.map(candidate => (
                        <tr key={candidate.id}>
                            <td style={{ border: '1px solid #ddd', padding: '8px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{candidate.fullName}</td>
                            <td style={{ border: '1px solid #ddd', padding: '8px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{candidate.phone}</td>
                            <td style={{ border: '1px solid #ddd', padding: '8px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{candidate.email}</td>
                            <td style={{ border: '1px solid #ddd', padding: '8px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{candidate.experience}</td>
                            <td style={{ border: '1px solid #ddd', padding: '8px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{candidate.education}</td>
                            <td style={{ border: '1px solid #ddd', padding: '8px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                                {candidate.achievements && candidate.achievements.join(', ')}
                            </td>
                            <td style={{ border: '1px solid #ddd', padding: '4px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                                <ModeEditIcon className='navbar-icon' fontSize="medium" />
                                <SummarizeIcon className='navbar-icon' fontSize="medium" />
                                <DeleteIcon className='navbar-icon' fontSize="medium" />
                            </td>

                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}