import {
  EuiErrorBoundary,
  EuiPage,
  EuiPageBody,
  EuiPageSection,
} from "@elastic/eui";
import Header from "./Header";
import Footer from "./Footer";
// import BottomBar from "./util/BottomBar";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <EuiPage paddingSize="none">
      <EuiPageBody>
        <Header />
        <EuiPageSection
          paddingSize="none"
          color="transparent"
          restrictWidth
          style={{ marginTop: "80px", paddingInline: "20px" }}
        >
          <EuiErrorBoundary>
            <Outlet />
          </EuiErrorBoundary>
          {/*<BottomBar />*/}
          <Footer />
        </EuiPageSection>
      </EuiPageBody>
    </EuiPage>
  );
}
