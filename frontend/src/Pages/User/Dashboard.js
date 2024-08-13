import React from 'react';
import { Box, Container, Card, CardContent, Typography, Avatar, Grid, Chip, List, ListItem, ListItemText, Divider } from '@mui/material';
import { Email, Phone, Assignment, Message, Grade, Notifications } from '@mui/icons-material';
import { Doughnut, Bar } from 'react-chartjs-2';
import i1 from '../../Assets/images/a1.png'; 
import 'chart.js/auto';
import Navbar from '../User/Navbar';

const Dashboard = () => {
    const doughnutData = {
        labels: ['UI/UX', 'Data Analytics', 'Finance'],
        datasets: [{
            data: [88, 95, 90],
            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
            hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
        }]
    };

    const barData = {
        labels: ['May', 'June', 'July'],
        datasets: [
            {
                label: 'Performance',
                backgroundColor: 'rgba(75,192,192,0.4)',
                borderColor: 'rgba(75,192,192,1)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(75,192,192,0.6)',
                hoverBorderColor: 'rgba(75,192,192,1)',
                data: [85, 99, 80]
            },
            {
                label: 'Classes',
                backgroundColor: 'rgba(255,99,132,0.4)',
                borderColor: 'rgba(255,99,132,1)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(255,99,132,0.6)',
                hoverBorderColor: 'rgba(255,99,132,1)',
                data: [28, 34, 30]
            }
        ]
    };

    return (
        
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4, bgcolor: '	#D3D3D3' }}>
                <Navbar/>
            <Grid container spacing={3}>
                {/* Profile Section */}
                <Grid item xs={12}>
                    <Card sx={{ display: 'flex', alignItems: 'center', p: 2 }}>
                        <Avatar
                            alt="Kate Spade"
                            src={i1}
                            sx={{ width: 100, height: 100, mr: 2 }}
                        />
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                            <Typography variant="h5">PAVANIKHA SN</Typography>
                            <Typography variant="body2" color="text.secondary">
                                <Email fontSize="small" /> snpavanikhasankar@gmail.com
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                <Phone fontSize="small" /> 9442365358
                            </Typography>
                            <Box sx={{ mt: 1 }}>
                                <Chip label="Student" color="default" />
                            </Box>
                        </Box>
                    </Card>
                </Grid>

                {/* Active Courses */}
                <Grid item xs={12} md={4}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Active Courses</Typography>
                            <List>
                                <ListItem>
                                    <ListItemText primary="UI/UX" />
                                    <Typography variant="body2" color="text.secondary">70%</Typography>
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary="Finance" />
                                    <Typography variant="body2" color="text.secondary">45%</Typography>
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary="Data Analytics" />
                                    <Typography variant="body2" color="text.secondary">30%</Typography>
                                </ListItem>
                            </List>
                        </CardContent>
                    </Card>
                </Grid>

                {/* Revenue and Classes Charts */}
                <Grid item xs={12} md={4}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Performance This Month</Typography>
                            <Doughnut data={doughnutData} />
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Classes This Month</Typography>
                            <Doughnut data={doughnutData} />
                        </CardContent>
                    </Card>
                </Grid>

                {/* Recent Classes */}
                <Grid item xs={12}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Recent Classes</Typography>
                            <List>
                                <ListItem>
                                    <ListItemText primary="UI/UX" secondary="Thu, 29 July" />
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary="Data Analytics" secondary="Mon, 4 August" />
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary="Finance" secondary="Wed, 6 August" />
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary="LinkedIn Optimization" secondary="Sun, 15 August" />
                                </ListItem>
                            </List>
                        </CardContent>
                    </Card>
                </Grid>

 
                <Grid item xs={12}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Performance + Classes by Month</Typography>
                            <Bar data={barData} />
                        </CardContent>
                    </Card>
                </Grid>

                {/* Assignments */}
                <Grid item xs={12}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Assignments</Typography>
                            <List>
                                <ListItem>
                                    <Assignment fontSize="small" sx={{ mr: 1 }} />
                                    <ListItemText primary="Finance" secondary="Due: Fri, 30 July" />
                                </ListItem>
                                <ListItem>
                                    <Assignment fontSize="small" sx={{ mr: 1 }} />
                                    <ListItemText primary="UI/UX" secondary="Due: Mon, 2 Aug" />
                                </ListItem>
                                <ListItem>
                                    <Assignment fontSize="small" sx={{ mr: 1 }} />
                                    <ListItemText primary="Data Analytics" secondary="Due: Wed, 4 Aug" />
                                </ListItem>
                            </List>
                        </CardContent>
                    </Card>
                </Grid>

                {/* Messages */}
                <Grid item xs={12}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Messages</Typography>
                            <List>
                                <ListItem>
                                    <Message fontSize="small" sx={{ mr: 1 }} />
                                    <ListItemText primary="Meeting Reminder" secondary="From: Nick Jonas" />
                                </ListItem>
                                <ListItem>
                                    <Message fontSize="small" sx={{ mr: 1 }} />
                                    <ListItemText primary="Project Discussion" secondary="From: Anjali" />
                                </ListItem>
                                <ListItem>
                                    <Message fontSize="small" sx={{ mr: 1 }} />
                                    <ListItemText primary="Class Feedback" secondary="From: Mrs. Jonas" />
                                </ListItem>
                            </List>
                        </CardContent>
                    </Card>
                </Grid>

                {/* Grades */}
                <Grid item xs={12}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Grades</Typography>
                            <List>
                                <ListItem>
                                    <Grade fontSize="small" sx={{ mr: 1 }} />
                                    <ListItemText primary="Data Analytics" secondary="A+" />
                                </ListItem>
                                <ListItem>
                                    <Grade fontSize="small" sx={{ mr: 1 }} />
                                    <ListItemText primary="Finance" secondary="A+" />
                                </ListItem>
                                <ListItem>
                                    <Grade fontSize="small" sx={{ mr: 1 }} />
                                    <ListItemText primary="UI/IX" secondary="A+" />
                                </ListItem>
                            </List>
                        </CardContent>
                    </Card>
                </Grid>

                {/* Notifications */}
                <Grid item xs={12}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Notifications</Typography>
                            <List>
                                <ListItem>
                                    <Notifications fontSize="small" sx={{ mr: 1 }} />
                                    <ListItemText primary="New course material added for UI/UX." />
                                </ListItem>
                                <ListItem>
                                    <Notifications fontSize="small" sx={{ mr: 1 }} />
                                    <ListItemText primary="Upcoming test on Monday." />
                                </ListItem>
                                <ListItem>
                                    <Notifications fontSize="small" sx={{ mr: 1 }} />
                                    <ListItemText primary="Reminder: Submit your Excel data." />
                                </ListItem>
                            </List>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Dashboard;
