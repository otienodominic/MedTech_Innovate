import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Storage from "@material-ui/icons/Storage";
import TrendingUp from "@material-ui/icons/TrendingUp";
import LocalShipping from "@material-ui/icons/LocalShipping";
import Assignment from "@material-ui/icons/Assignment";
// core components
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import InfoArea from "/components/InfoArea/InfoArea.js";

import styles from "/styles/jss/nextjs-material-kit/pages/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Let{"'"}s talk product</h2>
          <h5 className={classes.description}>
          MedTech Innovate is developing a suite of innovative digital health products aimed at transforming healthcare in Africa. 
          These products include program management tools that streamline the coordination of health initiatives, 
          strategic information systems for effective data handling and analysis, and business insight platforms that provide 
          actionable intelligence to improve decision-making. Additionally, the company is working on supply chain management solutions 
          designed to enhance the efficiency of healthcare logistics and resource distribution. Together, these products are designed to be scalable, accessible, 
          and tailored to address Africa's unique healthcare challenges, 
          supporting the company's mission to drive sustainable health solutions through technology.
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
        <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Program Management"
              description="Efficiently coordinate and manage health programs, ensuring smooth implementation and tracking of progress across projects."
              icon={Assignment}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Data Handling"
              description="Leverage advanced data management solutions to collect, analyze, and visualize health data for better decision-making."
              icon={Storage}
              iconColor="success"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Business Insight"
              description="Generate actionable insights to improve performance and outcomes by utilizing comprehensive analytics and reporting tools."
              icon={TrendingUp}
              iconColor="primary"
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
