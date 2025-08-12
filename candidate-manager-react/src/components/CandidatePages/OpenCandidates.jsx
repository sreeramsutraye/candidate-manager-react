import { Paper, Typography, Box, Card, CardContent, Grid } from '@mui/material';
import CandidateTable from "../CandidateTable";
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty';

export default function OpenCandidates(){
    // Summary cards data
    const summaryData = [
        {
            title: "Total Open",
            count: 24,
            icon: <PeopleAltIcon sx={{ fontSize: 40, color: '#3f51b5' }} />,
            color: '#e8eaf6'
        },
        {
            title: "Interviews Scheduled",
            count: 12,
            icon: <CheckCircleIcon sx={{ fontSize: 40, color: '#4caf50' }} />,
            color: '#e8f5e9'
        },
        {
            title: "Awaiting Response",
            count: 7,
            icon: <HourglassEmptyIcon sx={{ fontSize: 40, color: '#ff9800' }} />,
            color: '#fff3e0'
        }
    ];

    const dummyCandidate = {
        id: 1,
        fullName: "Jane Doe",
        phone: "+1-555-123-4567",
        email: "jane.doe@example.com",
        experience: "3 years",
        education: "B.Sc. Computer Science",
        achievements: ["Employee of the Month", "React Conference Speaker"]
    };

    // More dummy data for a realistic table
    const candidatesList = [
        dummyCandidate,
        {
            id: 2,
            fullName: "John Smith",
            phone: "+1-555-987-6543",
            email: "john.smith@example.com",
            experience: "5 years",
            education: "M.Sc. Software Engineering",
            achievements: ["Hackathon Winner", "Published Research Paper"]
        },
        {
            id: 3,
            fullName: "Emily Johnson",
            phone: "+1-555-234-5678",
            email: "emily.johnson@example.com",
            experience: "2 years",
            education: "B.Tech Computer Engineering",
            achievements: []
        }
    ];

    return (
        <Box>
            <Box sx={{ mb: 4 }}>
                <Typography variant="h4" component="h1" fontWeight={600} gutterBottom>
                    Open Candidates
                </Typography>
                <Typography variant="body1" color="text.secondary">
                    Manage and track all your open candidate applications.
                </Typography>
            </Box>
            
            {/* Summary Cards */}
            <Grid container spacing={3} sx={{ mb: 4 }}>
                {summaryData.map((item, index) => (
                    <Grid item xs={12} md={4} key={index}>
                        <Card 
                            elevation={0}
                            sx={{ 
                                borderRadius: 2, 
                                backgroundColor: item.color,
                                border: '1px solid rgba(0,0,0,0.05)'
                            }}
                        >
                            <CardContent sx={{ 
                                display: 'flex', 
                                alignItems: 'center', 
                                justifyContent: 'space-between' 
                            }}>
                                <Box>
                                    <Typography variant="h4" component="div" fontWeight={600}>
                                        {item.count}
                                    </Typography>
                                    <Typography variant="subtitle1" color="text.secondary">
                                        {item.title}
                                    </Typography>
                                </Box>
                                {item.icon}
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>

            <CandidateTable candidates={candidatesList} />
        </Box>
    );
}