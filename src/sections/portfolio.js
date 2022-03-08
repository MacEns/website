/** @jsx jsx */
import { jsx, Container, Heading, Text, Box, Image } from 'theme-ui';
import SectionHeader from 'components/section-header';
import ButtonGroup from 'components/button-group';
import Carousel from 'react-multi-carousel';

const data = [
  {
    id: 1,
    title: 'enSound EQ3',
    description:
      'A basic 3 band equalizer, built using the JUCE framework. Built as an AU, VST3, AAX, or a standalone application, this is a portable plug-in compatible with most major DAWs.',
    language: 'C++',
    githubURL: '@denny.hil',

  },
  {
    id: 2,
    title: 'NHL Stats App',
    description:
      'Fetches data on different teams and players from the official NHL public API and displays them on an iOS device. Still in development.',
    language: 'Swift',
    githubURL: '@denny.hil',
  },
  {
    id: 3,
    title: 'This Website',
    description:
      'Built using React.js, Next.js, and a number of other npm packages such as React-Scroll and Theme-UI.',
    language: 'Javascript',
    githubURL: '@denny.hil',
  },

];

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1619 },
    items: 4,
    slidesToSlide: 4, // optional, default to 1.
  },
  laptop: {
    breakpoint: { max: 1619, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 640 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 639, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const carouselParams = {
  additionalTransfrom:0,
  arrows:false,
  autoPlaySpeed:3000,
  centerMode:false,
  className:"",
  containerClass:"carousel-container",
  customButtonGroup:<ButtonGroup />,
  dotListClass:"",
  draggable: true,
  focusOnSelect:false,
  infinite:true,
  itemClass:"",
  keyBoardControl: true,
  minimumTouchDrag:80,
  renderButtonGroupOutside: true,
  renderDotsOutside:false,
  responsive:responsive,
  showDots:false,
  sliderClass:"",
  slidesToSlide:1,
}

export default function Portfolio() {
  return (
   <section id="portfolio" sx={{variant: 'section.portfolio'}}>
       <Container css={{ textAlign: 'center'}}>
            <SectionHeader
                title="Portfolio"
                slogan="The things I've made"
                />
       </Container>
       <Box sx={styles.carouselWrapper}>
           <Carousel { ... carouselParams}>
               {data.map((item) => (
                   <Box sx={styles.reviewCard} key={item.sliderClass}>
                       <Heading as="h3" sx={styles.title}>
                           {item.title}
                       </Heading>
                       <Text sx={styles.description}>
                           {item.description}
                       </Text>

                       <div className="card-footer">
                           
                           <div className="project-info">
                               <Heading as="h4" sx={styles.description}>
                                   Primary Language: {item.language}
                               </Heading>
                           </div>
                       </div>
                   </Box>
               ))}
           </Carousel>
       </Box>

    </section>
  );
}

const styles = {
  carouselWrapper: {
    display: 'flex',
    justifyContent: 'flex-end',
    flexDirection: 'column',
    alignItems: 'flex-end',
    mt: '-30px',
    px: '15px',
    '.carousel-container': {
      width: '100%',
      maxWidth: [
        '100%',
        null,
        null,
        '750px',
        '1000px',
        '1180px',
        null,
        'calc(50% + 865px)',
      ],
      mr: ['auto', null, null, null, null, null, null, '-220px'],
      ml: 'auto',
      '.react-multi-carousel-item': {
        transition: 'all 0.25s',
      },
      '.react-multi-carousel-item--active:nth-of-type(4n)': {
        opacity: '0.5',
        '@media screen and (max-width: 1620px)': {
          opacity: 1,
        },
      },
    },
  },
  reviewCard: {
    boxShadow: '5px 5px 5px 5px rgba(0, 0, 0, 0.25)',
    transition: 'all 0.3s',
    borderRadius: '6px',
    height: '85%',
    p: [
      '30px 20px 35px',
      '30px 25px 35px',
      '30px 20px 35px',
      '35px 30px 40px 40px',
      '30px 30px 35px',
      '35px 30px 40px 40px',
    ],
    bg: 'white',
    textAlign: 'left',
    m: [
      '28px 5px 30px 5px',
      '28px 20px 30px 20px',
      '28px 15px 30px 15px',
      '28px 15px 30px 15px',
      '30px 20px 40px',
    ],
    '&:hover': {
      boxShadow: '1px 1px 1px 1px rgba(20, 20, 20, 0.1)',
    },
    '.rating': {
      mb: [1, null, null, 2],
      ul: {
        pl: 0,
        listStyle: 'none',
        mb: 0,
        display: 'flex',
      },
      svg: {
        marginRight: '2px',
        '&:last-of-type': {
          marginRight: 0,
        },
      },
    },
    '.card-footer': {
      display: 'flex',
      alignItems: 'center',
      marginTop: [5, null, null, '33px'],
      '.image': {
        flexShrink: 0,
        mr: [3, null, null, 4],
        display: 'flex',
        img: {
          width: '55px',
          height: '55px',
          borderRadius: '50%',
          objectFit: 'cover',
        },
      },
    },
  },
  title: {
    fontSize: [1, 2],
    fontWeight: 700,
    mb: [3, null, null, '22px'],
    color: 'text',
    lineHeight: 1.6,
  },
  description: {
    fontSize: [1, null, null, 2],
    fontWeight: 'normal',
    color: 'text',
    lineHeight: [1.85, null, 2],
  },
  heading: {
    fontSize: [1, null, null, 2],
    fontWeight: 700,
    mb: '3px',
    color: 'text',
    lineHeight: 1.3,
  },
  // designation: {
  //   color: 'primary',
  //   fontWeight: '500',
  //   fontSize: 1,
  //   lineHeight: 1.4,
  // },
};
