import { IconButton } from '@chakra-ui/react';

const SocialButton = ({ icon, href, label }) => {

  return (
    <IconButton
      as= 'a' 
      href={href}
      target="_blank"
      rel='noopener noreferrer'
      aria-label={label}
      icon={icon}
      bg="hsla(0,0%.99%,.1)"
      // size="lg"
      borderRadius="full"
      shadow="dark-lg"
      className='backdrop-blur-[4rem]'
      color="#D570A6"
      w={16}
      h={16}
    />
  );
};

export default SocialButton;
