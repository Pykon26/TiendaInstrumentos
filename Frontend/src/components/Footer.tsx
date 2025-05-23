import React from "react";
import { Box, Typography, IconButton } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import "./Footer.css";

const Footer: React.FC = () => {
  return (
    <Box className="footer">
      <Typography variant="body2" className="footer-text">
        © {new Date().getFullYear()} TiendaMusica — Todos los derechos reservados
      </Typography>
      <Box className="footer-icons">
        <IconButton href="#" className="footer-icon"><FacebookIcon /></IconButton>
        <IconButton href="#" className="footer-icon"><InstagramIcon /></IconButton>
        <IconButton href="#" className="footer-icon"><GitHubIcon /></IconButton>
      </Box>
    </Box>
  );
};

export default Footer;
