import {
  EuiBetaBadge,
  EuiHeader,
  EuiHeaderSection,
  EuiHeaderSectionItem,
  EuiIcon,
  EuiHeaderLinks,
  EuiText,
} from "@elastic/eui";
import { EuiCustomHeaderLink } from "./EuiCustomLink";
import { useTheme } from "@emotion/react";

export default function Header() {
  const theme = useTheme();
  return (
    <EuiHeader
      position="fixed"
      style={{
        height: "60px",
        background: "#ffffff",
        borderTop: `2px solid ${theme.color.pageBorderTop}`,
        boxShadow: "0 6px 5px 0 rgba(0, 0, 0, 0.05)",
      }}
    >
      <EuiHeaderSection grow={false}>
        <EuiHeaderSectionItem>
          <EuiBetaBadge
            label={"Beta"}
            size={"s"}
            tooltipContent={"Beta Service Description"}
          />
          <EuiCustomHeaderLink color="text" to="/" isActive={false}>
            <EuiIcon type="project_Favicon-32x32.svg" size="xl" />
          </EuiCustomHeaderLink>
        </EuiHeaderSectionItem>
        <EuiHeaderSectionItem>
          <EuiCustomHeaderLink
            color="primary"
            to="/search"
            iconType={"search"}
            iconSide={"left"}
          >
            <EuiText>Search for <strong>datasets</strong></EuiText>
          </EuiCustomHeaderLink>
        </EuiHeaderSectionItem>
        <EuiHeaderSectionItem>
          <EuiCustomHeaderLink
            color="primary"
            to="/search"
            iconType={"search"}
            iconSide={"left"}
          >
            <EuiText>Search for <strong>repositories</strong></EuiText>
          </EuiCustomHeaderLink>
        </EuiHeaderSectionItem>
        <EuiHeaderSectionItem>
          <EuiHeaderLinks
            popoverBreakpoints={["xs", "s"]}
            gutterSize={"xs"}
            popoverButtonProps={{ iconType: "boxesHorizontal" }}
          >
            {/*<ResourceTypeMenu />*/}
            {/*<CollectionMenu />*/}
          </EuiHeaderLinks>
        </EuiHeaderSectionItem>
      </EuiHeaderSection>
      {/*<EuiHeaderSection grow={false}>*/}
      {/*  <EuiHeaderSectionItem>*/}
      {/*    <HelpMenu />*/}
      {/*  </EuiHeaderSectionItem>*/}
      {/*  <EuiHeaderSectionItem>*/}
      {/*    {!location.pathname.startsWith("/register") && (*/}
      {/*      <EuiCustomHeaderLink to="/register">*/}
      {/*        <EuiHideFor sizes={["xs", "s", "m"]}>*/}
      {/*          <EuiButton fill iconType={"indexOpen"} color={"warning"}>*/}
      {/*            {t(`action_register`)}*/}
      {/*          </EuiButton>*/}
      {/*        </EuiHideFor>*/}
      {/*        <EuiShowFor sizes={["xs", "s", "m"]}>*/}
      {/*          <EuiButtonIcon*/}
      {/*            iconType={"indexOpen"}*/}
      {/*            size={"s"}*/}
      {/*            display={"fill"}*/}
      {/*            aria-label={t(`action_register`)}*/}
      {/*            color={"accent"}*/}
      {/*          />*/}
      {/*        </EuiShowFor>*/}
      {/*      </EuiCustomHeaderLink>*/}
      {/*    )}*/}
      {/*  </EuiHeaderSectionItem>*/}
      {/*  <EuiHeaderSectionItem>*/}
      {/*    <LoginAuth />*/}
      {/*  </EuiHeaderSectionItem>*/}
      {/*</EuiHeaderSection>*/}
    </EuiHeader>
  );
}
