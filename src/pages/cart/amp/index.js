import React from "react";
import SEO from "../../../components/seo";
import SEOAMP from "../../../components/seo-amp";
import Layout from "../../../containers/layout/layout";
// import Header from '../containers/layout/header/header-one'
import HeaderAmp from "../../../containers/layout/header/header-three/index-amp";
import FooterAmp from "../../../containers/layout/footer/footer-one/index-amp";

const Cart = ({ location, data }) => {
  // const { src, srcWebp, width, height } = data?.file?.childImageSharp?.fixed;
  const { publicURL } = data?.file;

  console.log(data);

  return (
    <Layout location={location}>
      <SEOAMP title="About Us" />
      <HeaderAmp />
      <main className="site-wrapper-reveal"></main>
      <FooterAmp />
    </Layout>
  );
};

export default Cart;

export const query = graphql`
  {
    file(absolutePath: { regex: "/example.json/" }) {
      publicURL
    }
  }
`;
