import {
  EuiFlexGroup,
  EuiFlexItem,
  EuiLoadingSpinner,
  EuiPanel,
  EuiSpacer,
} from "@elastic/eui";

/**
 * Render a Loading indicator.
 */
export default function LoadingResultsIndicator() {
  return (
    <EuiPanel hasShadow={false} color={"transparent"}>
      <EuiSpacer size="xl" />
      <EuiFlexGroup justifyContent="spaceAround">
        <EuiFlexItem grow={false}>
          <EuiLoadingSpinner size="xl" />
        </EuiFlexItem>
      </EuiFlexGroup>
    </EuiPanel>
  );
}
