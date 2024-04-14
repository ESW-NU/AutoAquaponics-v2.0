import React, { useState } from 'react';
import { TextField, Button, Switch, FormControlLabel, Paper, Typography, Box } from '@mui/material';

const Settings = () => {
    const [profile, setProfile] = useState({ name: '', email: '' });
    const [notifications, setNotifications] = useState({ email: true, push: false });
    const [loading, setLoading] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProfile((prev) => ({ ...prev, [name]: value }));
    };

    const handleNotificationChange = (name) => {
        setNotifications((prev) => ({ ...prev, [name]: !prev[name] }));
    };

    const handleSubmit = async () => {
        setLoading(true);
        try {
            // Simulate an API call
            setTimeout(() => {
                console.log('Profile updated:', profile);
                console.log('Notification settings:', notifications);
                setLoading(false);
            }, 1000);
        } catch (error) {
            console.error('Failed to update settings:', error);
            setLoading(false);
        }
    };

    return (
        <Paper elevation={3} sx={{ padding: 3 }}>
            <Typography variant="h6" gutterBottom>
                Settings
            </Typography>
            <Box component="form" sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}>
                <Typography variant="subtitle1">Profile Information</Typography>
                <TextField
                    label="Name"
                    variant="outlined"
                    name="name"
                    value={profile.name}
                    onChange={handleInputChange}
                />
                <TextField
                    label="Email"
                    variant="outlined"
                    name="email"
                    value={profile.email}
                    onChange={handleInputChange}
                />
                <Typography variant="subtitle1" sx={{ mt: 2 }}>
                    Notification Settings
                </Typography>
                <FormControlLabel
                    control={<Switch checked={notifications.email} onChange={() => handleNotificationChange('email')} />}
                    label="Email Notifications"
                />
                <FormControlLabel
                    control={<Switch checked={notifications.push} onChange={() => handleNotificationChange('push')} />}
                    label="Push Notifications"
                />
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleSubmit}
                    disabled={loading}
                    sx={{ mt: 2 }}
                >
                    Save Changes
                </Button>
            </Box>
        </Paper>
    );
};

export default Settings;
