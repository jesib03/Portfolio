import { HStack } from "@chakra-ui/react";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import SocialButton from "./socialButton";

const SocialButtonsGroup = () => {
  return (
    <HStack spacing={6}>
      <SocialButton
        icon={<EmailIcon fontSize="large" />}
        href="mailto:jesib03@hotmail.com?subject=Consulta&body=Hola! Estuve viendo tu Portfolio y queria comentarte que"
        label="Email"
        target="_blank" 
      />
      <SocialButton
        icon={<LinkedInIcon fontSize="large"  />}
        href="https://www.linkedin.com/in/jesica-brito-048b55254/"
        label="LinkedIn"
        target="_blank" 
      />
      <SocialButton
        icon={<GitHubIcon fontSize="large"  />}
        href="https://github.com/jesib03"
        label="GitHub"
        target="_blank" 
      />
      <SocialButton
        icon={<FacebookIcon fontSize="large"  />}
        href="https://www.facebook.com/profile.php?id=100008292441753"
        label="Facebook"
        target="_blank" 
      />
      <SocialButton
        icon={<TwitterIcon fontSize="large"  />}
        href="https://twitter.com/jesicabrito"
        label="Twitter"
        target="_blank" 
      />
      <SocialButton
        icon={<InstagramIcon fontSize="large"  />}
        href="https://instagram.com/britojesi"
        label="Instagram"
        target="_blank" 
      />
    </HStack>
  );
};

export default SocialButtonsGroup;
