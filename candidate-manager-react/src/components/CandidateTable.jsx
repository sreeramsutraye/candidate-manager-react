import { useState } from 'react';
import { 
  Table, TableBody, TableCell, TableContainer, 
  TableHead, TableRow, Paper, IconButton, 
  Chip, Tooltip, Typography, Box, Button
} from '@mui/material';
import SummarizeIcon from '@mui/icons-material/Summarize';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';

export default function CandidateTable({ candidates }) {
  const [hoveredRow, setHoveredRow] = useState(null);

  if (!candidates || candidates.length === 0) {
    return (
      <Paper 
        elevation={0}
        sx={{ 
          padding: 4, 
          display: 'flex', 
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#f8fafc',
          borderRadius: 2,
          border: '1px dashed #ccc',
          minHeight: 300
        }}
      >
        <Typography variant="h6" color="text.secondary" gutterBottom>
          No candidates available
        </Typography>
        <Button 
          variant="contained" 
          color="primary" 
          startIcon={<AddIcon />}
          sx={{ mt: 2 }}
        >
          Add Candidate
        </Button>
      </Paper>
    );
  }

  // Get achievement status indicator
  const getAchievementIndicator = (achievements) => {
    if (!achievements || achievements.length === 0) return null;
    
    return (
      <Chip 
        label={`${achievements.length} ${achievements.length === 1 ? 'achievement' : 'achievements'}`}
        size="small"
        color="primary"
        variant="outlined"
        sx={{ height: 24 }}
      />
    );
  };

  // Format experience for display
  const formatExperience = (experience) => {
    if (!experience) return 'Not specified';
    return experience;
  };

  return (
    <Box sx={{ width: '100%', mt: 2 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3, alignItems: 'center' }}>
        <Typography variant="h5" component="h1" fontWeight={600}>
          Candidates
        </Typography>
        <Button 
          variant="contained" 
          color="primary" 
          startIcon={<AddIcon />}
          sx={{ borderRadius: 2 }}
        >
          Add Candidate
        </Button>
      </Box>
      
      <TableContainer component={Paper} sx={{ boxShadow: '0 2px 10px rgba(0, 0, 0, 0.08)', borderRadius: 2 }}>
        <Table sx={{ minWidth: 650 }}>
          <TableHead>
            <TableRow sx={{ backgroundColor: '#f5f7fa' }}>
              <TableCell sx={{ fontWeight: 600 }}>Full Name</TableCell>
              <TableCell sx={{ fontWeight: 600 }}>Contact</TableCell>
              <TableCell sx={{ fontWeight: 600 }}>Experience</TableCell>
              <TableCell sx={{ fontWeight: 600 }}>Education</TableCell>
              <TableCell sx={{ fontWeight: 600 }}>Achievements</TableCell>
              <TableCell align="right" sx={{ fontWeight: 600 }}>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {candidates.map((candidate) => (
              <TableRow 
                key={candidate.id}
                onMouseEnter={() => setHoveredRow(candidate.id)}
                onMouseLeave={() => setHoveredRow(null)}
                sx={{ 
                  '&:last-child td, &:last-child th': { border: 0 },
                  backgroundColor: hoveredRow === candidate.id ? 'rgba(0, 0, 0, 0.04)' : 'inherit',
                  transition: 'background-color 0.2s',
                }}
              >
                <TableCell component="th" scope="row" sx={{ fontWeight: 500 }}>
                  {candidate.fullName}
                </TableCell>
                <TableCell>
                  <div>{candidate.phone}</div>
                  <Typography variant="body2" color="text.secondary">
                    {candidate.email}
                  </Typography>
                </TableCell>
                <TableCell>{formatExperience(candidate.experience)}</TableCell>
                <TableCell>{candidate.education}</TableCell>
                <TableCell>
                  {getAchievementIndicator(candidate.achievements)}
                </TableCell>
                <TableCell align="right">
                  <Tooltip title="Edit">
                    <IconButton size="small" className="action-icon edit-icon">
                      <ModeEditIcon fontSize="small" />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="View details">
                    <IconButton size="small" className="action-icon summary-icon">
                      <SummarizeIcon fontSize="small" />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Delete">
                    <IconButton size="small" className="action-icon delete-icon">
                      <DeleteIcon fontSize="small" />
                    </IconButton>
                  </Tooltip>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}