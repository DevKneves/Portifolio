import { Box, Container, Grid, Typography, styled } from "@mui/material"
import Avatar from "../../../../assets/img/Avatar.jpg"
import DownloadIcon from '@mui/icons-material/Download';
import EmailIcon from '@mui/icons-material/Email';
import StyledButton from "../../../../componants/StyledButton/Styled.Button";
import { AnimatedBackground } from "../../../../componants/AnimatedBackground/AnimatedBackground";

const Hero = () => {

    const StyledHero = styled("div")(({theme})=>({
        backgroundColor: theme.palette.primary.main,
        height: "100vh",
        display: "flex",
        alignItems: "center",
        [theme.breakpoints.up('xs')]: {
            paddingTop: "100px"
            
        },
        [theme.breakpoints.up('md')]: {
            paddingTop: "0px"
        }
    }))

    const Styledimg = styled("img")(({theme})=>({
        width: "75%",
        borderRadius: "50%",
        border: `1px solid ${theme.palette.primary.contrastText}`,
    }))
    
  return (
    <>
    <StyledHero>
        <Container maxWidth="lg">
            <Grid container spacing={2}>
                <Grid item xs={12} md={5}>
                    <Box position="relative">
                        <Box position="absolute" width={"150%"} top={-100} right={0}>
                            <AnimatedBackground />
                        </Box>
                        <Box position="relative" textAlign="center">
                            <Styledimg src={Avatar} />
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} md={7}>
                    <Typography color="primary.contrastText" variant="h1" textAlign="center" pb={2}>Kauã Neves</Typography>
                    <Typography color="primary.contrastText" variant="h2" textAlign="center" pb={2}>Engenheiro de software</Typography>
                    <Grid container display="flex" justifyContent="center" spacing={3}>
                        <Grid item xs={12} md={4} display="flex" justifyContent="center">
                            <StyledButton>
                                <DownloadIcon />
                                <Typography>Baixar Curriculo</Typography>
                            </StyledButton>
                        </Grid>
                        <Grid item xs={12} md={4} display="flex" justifyContent="center">
                             <StyledButton>
                                <EmailIcon />
                               <Typography>Contate-me</Typography>
                                </StyledButton>
                        </Grid>
                    </Grid>
                </Grid>
             </Grid>
        </Container>
    </StyledHero>
    </>
  )
}

export default Hero
