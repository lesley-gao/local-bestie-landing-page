import LegalPageLayout from "@/components/shared/LegalPageLayout";
import { privacyPolicyContent } from "@/config/legalContent";

export default function PrivacyPage() {
  return (
    <LegalPageLayout
      pageTitle={privacyPolicyContent.pageTitle}
      lastUpdated={privacyPolicyContent.lastUpdated}
      tableOfContents={privacyPolicyContent.tableOfContents}
      sections={privacyPolicyContent.sections}
    />
  );
}
