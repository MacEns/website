import React from 'react';
import { ThemeProvider } from 'theme-ui';
import theme from 'theme';

import SEO from 'components/seo';
import Layout from 'components/layout';
import Banner from '../sections/banner';
import Contact from '../sections/contact';
import Portfolio from 'sections/portfolio';

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
        <Layout>
          <SEO title="Mac Ens" />
          <Banner />
          <Portfolio />
          <Contact />
        </Layout>
    </ThemeProvider>
  );
}
