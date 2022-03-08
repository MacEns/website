/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Box} from 'theme-ui';
import TextFeature from 'components/text-feature';


export default function Contact() {
  return (
      <section id="contact"  sx={{variant: 'section.contact'}}>
        <Container sx={styles.containerBox}>
        <Box sx={styles.contentBox}>
            <TextFeature 
                subTitle="Contact"
                title="Send me an email"
                description="Got something interesting in mind? Reach out and let's work together!"
                btnName="Connect"
                btnURL="mailto:mac@macens.ca"
        />
            </Box>
        </Container>
      </section>
  );
}


const styles = {
  containerBox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: ['wrap', null, null, 'nowrap'],
    pb: [0, 7, 0, null, 7],
  },
  contentBox: {
    flexShrink: 0,
    px: [0, null, '30px', 0],
    textAlign: ['center', null, null, 'left'],
    width: ['100%', '100%'],
    pb: ['50px', '60px', null, 0],
    mx: ['auto', null, null, 0],
    '.description': {
      pr: [0, null, 6, 7, 6],
    },
  },
}