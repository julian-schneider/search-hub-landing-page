import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    color: {
      euiPrimary: string;
      euiWarning: string;
      euiBody: string;
      euiAccent: string;
      euiPrimaryLight: string;
      pageBorderTop: string;
      infoBadge: string;
      infoBadgeGreyed: string;
      detailBoxTitle: string;
      detailBoxTitleLight: string;
      actionButton: string;
      progressBar: string;
      barPlotBar: string;
      inputFieldBorder: string;
      inputFieldNote: string;
      accentPanelTitle: string;
      accentPanelBg: string;
      textWarning: string;
      textSpecial: string;
      backgroundWarning: string;
      backgroundSpecial: string;
      backgroundInsertion: string;
      backgroundDeletion: string;
      queryGroupAnd: string;
      queryGroupOr: string;
    };
  }
}
