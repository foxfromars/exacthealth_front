import "@mui/material/styles";
import "@mui/material/Typography";
import "@mui/material/List";

declare module '@mui/material/styles' {
  interface TypographyVariants {
    sectionTitle: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    sectionTitle?: React.CSSProperties;
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    sectionTitle: true;
  }
}

declare module "@mui/material/List" {
  interface ListPropsVariantOverrides {
    sectionList: true
  }
}

