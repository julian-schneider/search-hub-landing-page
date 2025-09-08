import {
  EuiFlexGroup,
  EuiFlexItem,
  EuiHorizontalRule,
  EuiLink,
  EuiPanel,
  EuiSpacer,
  EuiText,
} from "@elastic/eui";
import { ReactComponent as DFGLOGO } from "../../logos/dfg_logo_schriftzug_blau_foerderung_en.svg";
import { ReactComponent as PROJECTLOGO } from "../../logos/Project_Logo_footer.svg";
import { ReactComponent as ZBMEDLOGO } from "../../logos/ZBMED_2017_DE.svg";
import { ReactComponent as FZJLOGO } from "../../logos/Logo_FZ_Juellich_RGB_schutzzone_weiss.svg";
import { EuiNavigationLink } from "./EuiCustomLink";

export default function Footer() {
  return (
    <EuiPanel
      hasBorder={false}
      hasShadow={false}
      paddingSize="none"
      color="transparent"
      borderRadius="none"
    >
      <EuiSpacer size-="xl" />
      <EuiHorizontalRule size="half" />
      <EuiFlexGroup justifyContent="spaceAround">
        <EuiFlexItem grow={true}></EuiFlexItem>
        <EuiFlexItem grow={false}>
          <EuiText color="subdued" size="s">
            <EuiLink href="mailto:search-hub-support@fairagro.net">
              {"Contact"}
            </EuiLink>{" "}
            |{" "}
            {/*<EuiLink href=" https://www.nfdi4health.de/en/service/health-study-hub.html">*/}
            {/*  {t(`about`)}*/}
            {/*</EuiLink>{" "}*/}
            {/*|{" "}*/}
            <EuiLink href="https://www.zbmed.de/en/legal-notice">
              {"Imprint"}
            </EuiLink>{" "}
            |{" "}
            <EuiNavigationLink to="/privacy">
              {"Privacy Policy"}
            </EuiNavigationLink>
          </EuiText>
        </EuiFlexItem>
        <EuiFlexItem grow={true}></EuiFlexItem>
      </EuiFlexGroup>
      {/*<EuiFlexGroup justifyContent="spaceAround">*/}
      {/*  <EuiFlexItem grow={true}></EuiFlexItem>*/}
      {/*  <EuiFlexItem grow={false}>*/}
      {/*    <EuiText color="subdued" size="xs">*/}
      {/*      {t(`software_version`)}:{" "}*/}
      {/*      <Link to={"/doc/releases"}>{data ? data.softwareVersion : ""}</Link>*/}
      {/*      <br />*/}
      {/*      {data && data?.metadataVersion ? (*/}
      {/*        <>*/}
      {/*          {t(`schema_version`)}:{" "}*/}
      {/*          <EuiLink*/}
      {/*            href={*/}
      {/*              "https://www.nfdi4health.de/en/service/data-harmonisation-and-publication.html"*/}
      {/*            }*/}
      {/*          >*/}
      {/*            {data?.metadataVersion}*/}
      {/*          </EuiLink>*/}
      {/*          <br />*/}
      {/*        </>*/}
      {/*      ) : (*/}
      {/*        ""*/}
      {/*      )}*/}
      {/*      {t(`last_update`)}:{" "}*/}
      {/*      {data && data.lastUpdate*/}
      {/*        ? moment(data.lastUpdate).format("LLL")*/}
      {/*        : "unknown"}*/}
      {/*    </EuiText>*/}
      {/*  </EuiFlexItem>*/}
      {/*  <EuiFlexItem grow={true}></EuiFlexItem>*/}
      {/*</EuiFlexGroup>*/}
      <EuiSpacer />
      <EuiFlexGroup
        gutterSize={"m"}
        justifyContent={"spaceAround"}
        alignItems={"center"}
        wrap
      >
        <EuiFlexItem grow={false}>
          <a href={"https://www.dfg.de"} target={"_blank"} rel="noreferrer">
            <DFGLOGO height={"90px"} width={"auto"} />
          </a>
        </EuiFlexItem>
        <EuiFlexItem grow={false}>
          <a
            href={"https://www.fairagro.net"}
            target={"_blank"}
            rel="noreferrer"
          >
            <PROJECTLOGO height={"90px"} width={"auto"} />
          </a>
        </EuiFlexItem>
        <EuiFlexItem grow={false}>
          <a href={"https://www.zbmed.de"} target={"_blank"} rel="noreferrer">
            <ZBMEDLOGO height={"90px"} width={"auto"} />
          </a>
        </EuiFlexItem>
        <EuiFlexItem grow={false}>
          <a href={"https://intranet.fz-juelich.de/de"} target={"_blank"} rel="noreferrer">
            <FZJLOGO height={"90px"} width={"auto"} />
          </a>
        </EuiFlexItem>

        {/*<EuiFlexItem grow={false}>*/}
        {/*  <a*/}
        {/*    href={"https://doi.org/10.17616/R31NJMZG"}*/}
        {/*    target={"_blank"}*/}
        {/*    rel="noreferrer"*/}
        {/*  >*/}
        {/*    <R3DATA height={"90px"} width={"auto"} />*/}
        {/*  </a>*/}
        {/*</EuiFlexItem>*/}
      </EuiFlexGroup>
      <EuiSpacer size-="xl" />
      <EuiFlexGroup justifyContent="spaceAround" gutterSize="xl">
        <EuiFlexItem grow={true}></EuiFlexItem>
        <EuiFlexItem grow={false}>
          <EuiText color="subdued" size="s">
            {
              "This service is developed in the project FAIRagro. FAIRagro is one of the funded consortia of the National Research Data Infrastructure programme of the DFG. (Project number 501899475)."
            }
          </EuiText>
        </EuiFlexItem>
        <EuiFlexItem grow={true}></EuiFlexItem>
      </EuiFlexGroup>
      <EuiSpacer size-="xl" />
    </EuiPanel>
  );
}
