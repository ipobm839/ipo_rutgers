import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function Login() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}

// import React, { useState } from 'react'
// import { CustomerForm, HeroForm } from '../components/'
// // import SuperHeroImage from '../assets/marvel_superheroes.jpg'
// import {
// 	AppBar,
// 	Toolbar,
// 	Card,
// 	CardActionArea,
// 	CardActions,
// 	CardContent,
// 	Grid,
// 	Typography,
// 	makeStyles,
// } from '@mui/material'

// const useStyles = makeStyles(theme => ({
// 	root: {
// 		flexGrow: 1,
// 	},
// 	appBar: {
// 		backgroundColor: '#4485A4',
// 		color: 'white',
// 	},
// 	menuButton: {
// 		marginRight: theme.spacing(2),
// 	},
// 	title: {
// 		flexGrow: 1,
// 		textAlign: 'center',
// 		fontWeight: 600,
// 	},
// 	paperTitle: {
// 		flexGrow: 1,
// 		textAlign: 'center',
// 		position: 'absolute',
// 		width: '100%',
// 		top: '30vh',
// 		left: '0px',
// 		color: 'white',
// 		fontSize: '4vw',
// 	},
// 	card: {
// 		display: 'inline',
// 	},
// 	cardInfo: {
// 		textAlign: 'center',
// 		boxShadow: '0 6px 10px rgba(0,0,0,.08), 0 0 6px rgba(0,0,0,.05)',
// 		transition:
// 			'.3s transform cubic-bezier(.155,1.105,.295,1.12),.3s box-shadow,.3s -webkit-transform cubic-bezier(.155,1.105,.295,1.12)',
// 		margin: '10px',
// 		padding: '10px',
// 		'&:hover': {
// 			transform: 'scale(1.05)',
// 			boxShadow: '0 10px 20px rgba(0,0,0,.12), 0 4px 8px rgba(0,0,0,.06)',
// 		},
// 	},
// 	cardActions: {
// 		justifyContent: 'center',
// 	},
// 	superHeroImg: {
// 		width: '100%',
// 	},
// }))

// export default function Login() {
// 	const classes = useStyles()
// 	const [openDialog, setOpenDialog] = useState(false)
// 	const [selectedName, setSelectedName] = useState()

// 	const handleClickOpen = () => {
// 		setOpenDialog(true)
// 	}

// 	const updateName = name => {
// 		setSelectedName(name)
// 	}

// 	return (
// 		<div className={classes.root}>
// 			<AppBar className={classes.appBar} position='static'>
// 				<Toolbar>
// 					<Typography variant='h6' className={classes.title}>
// 						Uber for Supers
// 					</Typography>
// 				</Toolbar>
// 			</AppBar>
// 			<div className={classes.root}>
// 				<Grid container spacing={3}>
// 					<Grid item xs={12}>
// 						<Typography className={classes.paperTitle}>
// 							Check out your Superhero Squad!
// 						</Typography>
// 						<img
// 							// src={SuperHeroImage}
// 							className={classes.superHeroImg}
// 							alt='superHeroImage'
// 						/>
// 					</Grid>
// 					<Grid item xs={6} className={classes.card}>
// 						<Card className={classes.cardInfo}>
// 							<CardActionArea>
// 								<CardContent className={classes.cardContent}>
// 									<Typography gutterBottom variant='h5' component='h2'>
// 										Customer Form
// 									</Typography>
// 									<Typography
// 										variant='body2'
// 										color='textSecondary'
// 										component='p'
// 									>
// 										Add your information to become a superhero!
// 									</Typography>
// 								</CardContent>
// 							</CardActionArea>
// 							<CardActions className={classes.cardActions}>
// 								{handleClickOpen && (
// 									<CustomerForm
// 										onNameUpdate={updateName}
// 										setOpen={setOpenDialog}
// 									/>
// 								)}
// 							</CardActions>
// 						</Card>
// 					</Grid>
// 					<Grid item xs={6} className={classes.card}>
// 						<Card className={classes.cardInfo}>
// 							<CardActionArea>
// 								<CardContent>
// 									<Typography gutterBottom variant='h5' component='h2'>
// 										Hero Form
// 									</Typography>
// 									<Typography
// 										variant='body2'
// 										color='textSecondary'
// 										component='p'
// 									>
// 										View hero squad details and select super heroes!
// 									</Typography>
// 								</CardContent>
// 							</CardActionArea>
// 							<CardActions className={classes.cardActions}>
// 								{handleClickOpen && (
// 									<HeroForm
// 										selectedName={selectedName}
// 										setOpen={setOpenDialog}
// 									/>
// 								)}
// 							</CardActions>
// 						</Card>
// 					</Grid>
// 				</Grid>
// 			</div>
// 		</div>
// 	)
// }