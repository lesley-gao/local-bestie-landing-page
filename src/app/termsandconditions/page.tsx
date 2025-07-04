import LegalPageLayout from "@/components/shared/LegalPageLayout";
import { termsConditionsContent } from "@/config/legalContent";

export default function TermsPage() {
  return (
    <LegalPageLayout
      pageTitle={termsConditionsContent.pageTitle}
      lastUpdated={termsConditionsContent.lastUpdated}
      tableOfContents={termsConditionsContent.tableOfContents}
      sections={termsConditionsContent.sections}
    />
  );
}
