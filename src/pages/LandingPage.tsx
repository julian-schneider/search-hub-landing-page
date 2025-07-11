import React from "react";
import {
  EuiButton,
  EuiFlexGroup,
  EuiFlexItem,
  EuiHorizontalRule,
  EuiIcon,
  EuiLink,
  EuiPanel,
  EuiSpacer,
  EuiText,
  EuiTitle,
} from "@elastic/eui";
import { css, Global } from "@emotion/react";
import { ReactComponent as LogoFairagroWide } from "../logos/Project_Logo_footer.svg";
// import { ReactComponent as LogoFairagroTall } from "../logos/Project_Logo_overviewpage.svg";

const LandingPage: React.FC = () => {
  return (
    <>
      <EuiFlexGroup
        justifyContent="center"
        gutterSize="xl"
        alignItems={"center"}
      >
        <EuiFlexItem>
          <EuiTitle size="l">
            <h1>Welcome to the FAIRagro Search Hub</h1>
          </EuiTitle>
        </EuiFlexItem>
        <EuiFlexItem grow={false}>
          <LogoFairagroWide width={"300px"} height={"auto"} />
        </EuiFlexItem>
      </EuiFlexGroup>
      <EuiSpacer size="l" />

      {/*<EuiFlexGroup justifyContent="center" gutterSize="xl">*/}
      {/*  <LogoFairagroTall />*/}
      {/*</EuiFlexGroup>*/}
      {/*<EuiSpacer size="l" />*/}

      <>
        <EuiFlexGroup
          justifyContent="center"
          alignItems={"center"}
          gutterSize="xl"
        >
          <EuiFlexItem>
            <EuiText grow={false}>
              <p>
                The Search Hub is{" "}
                <EuiLink href="https://fairagro.net" target="_blank">
                  FAIRagro's
                </EuiLink>{" "}
                central portal to discover agrosystem-related datasets and
                research data repositories.
                <EuiSpacer size={"m"} />
                All information is aggregated from established sources and made
                searchable in this service. Our aim is to foster the
                implementation of the FAIR principles (Findability,
                Accessibility, Interoperability and Reusability) in the
                agricultural research domain. And the metadata for contained
                datasets are automatically harvested by the FAIRagro Middleware
                and transformed into a standardised metadata schema.
                <EuiSpacer size={"m"} />
                The FAIRagro Search Hub provides various search and filter
                functions, e.g. based on crop species or repository subject of
                research. Additional options are currently under development.
                <EuiSpacer size={"m"} />
                As the platform is being developed for the community, it must
                meet the needs and requirements of the community. To ensure
                this, we are working closely with domain experts within the
                FAIRagro project, especially the FAIRagro Use Cases, who
                represent the community of interest. However, we also invite
                everyone else to suggest features, ideas, or requirements and
                report bugs to the development team. You can do this by using
                the green feedback box on the right side of the screen.
              </p>
            </EuiText>
          </EuiFlexItem>
        </EuiFlexGroup>
      </>
      <EuiSpacer size="xxl" />

      <EuiHorizontalRule />

      <EuiFlexGroup justifyContent="center" gutterSize="xl" responsive={false}>
        <EuiTitle size="m">
          <h1>What are you looking for?</h1>
        </EuiTitle>
      </EuiFlexGroup>
      <EuiSpacer size="l" />
      <EuiFlexGroup justifyContent="center" gutterSize="xl" responsive={true}>
        <EuiFlexItem grow={false}>
          <EuiPanel className={"servicePanel"}>
            <EuiFlexGroup direction={"column"} alignItems={"center"}>
              <EuiFlexItem>
                <EuiButton className={"serviceBtn"}>
                  <EuiTitle>
                    <h3>
                      Datasets <EuiIcon type="search" />
                    </h3>
                  </EuiTitle>
                </EuiButton>
              </EuiFlexItem>
              <EuiFlexItem>
                <EuiText grow={false}>
                  <p>
                    Search for agrosystem datasets based on their metadata. All
                    our datasets come from associated research data
                    infrastructures (RDIs) such as BonaRes, OpenAgrar, and
                    e!DAL. Their metadata are harvested and harmonized by the
                    FAIRagro middleware into a standardised metadata schema.{" "}
                    <EuiSpacer size={"s"} /> Currently, we are serving 1817
                    datasets.
                    <EuiSpacer size={"m"} />
                  </p>
                </EuiText>
              </EuiFlexItem>
            </EuiFlexGroup>
          </EuiPanel>
        </EuiFlexItem>
        <EuiFlexItem grow={false}>
          <EuiPanel className={"servicePanel"}>
            <EuiFlexGroup direction={"column"} alignItems={"center"}>
              <EuiFlexItem>
                <EuiButton className={"serviceBtn"}>
                  <EuiTitle>
                    <h3>
                      Repositories <EuiIcon type="search" />
                    </h3>
                  </EuiTitle>
                </EuiButton>
              </EuiFlexItem>
              <EuiFlexItem>
                <EuiText grow={false}>
                  <p>
                    Find research data repositories from the agrosystem
                    sciences. The search functionality is based on metadata
                    harvested from{" "}
                    <EuiLink href="https://www.re3data.org" target="_blank">
                      re3data.org
                    </EuiLink>
                    . <EuiSpacer size={"s"} /> Currently, we are serving 15
                    repositories.
                    <EuiSpacer size={"m"} />
                  </p>
                </EuiText>
              </EuiFlexItem>
            </EuiFlexGroup>
          </EuiPanel>
        </EuiFlexItem>
      </EuiFlexGroup>
      <Global
        styles={css`
          .serviceBtn {
            background-color: #74b549 !important;
            width: 300px;
          }
          .servicePanel {
            min-width: 400px;
          }
        `}
      />
    </>
  );
};

export default LandingPage;
