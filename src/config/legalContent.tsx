import Link from "next/link";

// Privacy Policy Content
export const privacyPolicyContent = {
  pageTitle: "Privacy Policy",
  lastUpdated: "July 2, 2025",
  tableOfContents: [
    { id: "introduction", title: "Introduction" },
    { id: "changes", title: "Changes to This Policy" },
    {
      id: "why-collect",
      title: "Who Do We Collect Your Personal Information From",
    },
    { id: "how-use", title: "How We Use Your Personal Information" },
    { id: "disclosing", title: "Disclosing Your Personal Information" },
    { id: "protecting", title: "Protecting Your Personal Information" },
    {
      id: "accessing",
      title: "Accessing And Correcting Your Personal Information",
    },
    { id: "internet-use", title: "Internet Use" },
    { id: "cookies", title: "Cookies" },
    { id: "contacting", title: "Contact Us" },
  ],
  sections: [
    {
      id: "introduction",
      title: "Introduction",
      content: (
        <>
          <p className="leading-relaxed text-gray-700 px-4">
            Local Bestie Limited (we, us, our) complies with the New Zealand
            Privacy Act 2020 (the Act) when dealing with personal information.
            Personal information is information about an identifiable individual
            (a natural person).
          </p>
          <p className="leading-relaxed text-gray-700 px-4">
            This policy sets out how we will collect, use, disclose and protect
            your personal information.
          </p>
          <p className="leading-relaxed text-gray-700 px-4">
            This policy does not limit or exclude any of your rights under the
            Act. If you wish to seek further information on the Act, see
            www.privacy.org.nz.
          </p>
        </>
      ),
    },
    {
      id: "changes",
      title: "Changes to This Policy",
      content: (
        <>
          <p className="leading-relaxed text-gray-700 px-4">
            We may change this policy by uploading a revised policy onto the
            website. The change will apply from the date that we upload the
            revised policy.
          </p>
          <p className="leading-relaxed text-gray-700 px-4">
            This policy was last updated on{" "}
            <Link
              href="/privacypolicy"
              className="text-themecolor hover:underline"
            >
              https://localbestie.com/privacypolicy
            </Link>
            .
          </p>
        </>
      ),
    },
    {
      id: "why-collect",
      title: "Who Do We Collect Your Personal Information From",
      content: (
        <>
          <p className="leading-relaxed text-gray-700 px-4">
            We collect personal information about you from:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 px-4">
            <li>
              You, when you provide that personal information to us, including
              via the website and any related service, through any registration
              or subscription process, through any contact with us (e.g.
              telephone call or email), or when you buy or use our services and
              products
            </li>
            <li>
              Third parties where you have authorised this or the information is
              publicly available.
            </li>
          </ul>
          <p className="leading-relaxed text-gray-700 px-4">
            If possible, we will collect personal information from you directly.
          </p>
        </>
      ),
    },
    {
      id: "how-use",
      title: "How We Use Your Personal Information",
      content: (
        <>
          <p className="leading-relaxed text-gray-700 px-4">
            We will use your personal information:
          </p>
          <ul className="list-disc pl-6 space-y-1 text-gray-700 px-4">
            <li>To verify your identity</li>
            <li>To provide services and products to you</li>
            <li>
              To market our services and products to you, including contacting
              you electronically (e.g. by text or email for this purpose)
            </li>
            <li>To improve the services and products that we provide to you</li>
            <li>To undertake credit checks of you (if necessary)</li>
            <li>
              To bill you and to collect money that you owe us, including
              authorising and processing credit card transactions
            </li>
            <li>
              To respond to communications from you, including a complaint
            </li>
            <li>
              To conduct research and statistical analysis (on an anonymised
              basis)
            </li>
            <li>
              To protect and/or enforce our legal rights and interests,
              including defending any claim
            </li>
            <li>For any other purpose authorised by you or the Act.</li>
          </ul>
        </>
      ),
    },
    {
      id: "disclosing",
      title: "Disclosing Your Personal Information",
      content: (
        <>
          <p className="leading-relaxed text-gray-700 px-4">
            We may disclose your personal information to:
          </p>
          <ul className="list-disc pl-6 space-y-1 text-gray-700 px-4">
            <li>Another company within our group</li>
            <li>
              Any business that supports our services and products, including
              any person that hosts or maintains any underlying IT system or
              data centre that we use to provide the website or other services
              and products
            </li>
            <li>
              A credit reference agency for the purpose of credit checking you
            </li>
            <li>
              Other third parties (for anonymised statistical information)
            </li>
            <li>
              A person who can require us to supply your personal information
              (e.g. a regulatory authority)
            </li>
            <li>
              Any other person authorised by the Act or another law (e.g. a law
              enforcement agency)
            </li>
            <li>Any other person authorised by you.</li>
          </ul>
          <p className="leading-relaxed text-gray-700 px-4">
            A business that supports our services and products may be located
            outside New Zealand. This may mean your personal information is held
            and processed outside New Zealand.
          </p>
        </>
      ),
    },
    {
      id: "protecting",
      title: "Protecting Your Personal Information",
      content: (
        <>
          <p className="leading-relaxed text-gray-700 px-4">
            We will take reasonable steps to keep your personal information safe
            from loss, unauthorised activity, or other misuse.
          </p>
        </>
      ),
    },
    {
      id: "accessing",
      title: "Accessing And Correcting Your Personal Information",
      content: (
        <>
          <p className="leading-relaxed text-gray-700 px-4">
            Subject to certain grounds for refusal set out in the Act, you have
            the right to access your readily retrievable personal information
            that we hold and to request a correction to your personal
            information. Before you exercise this right, we will need evidence
            to confirm that you are the individual to whom the personal
            information relates.
          </p>
          <p className="leading-relaxed text-gray-700 px-4">
            In respect of a request for correction, if we think the correction
            is reasonable and we are reasonably able to change the personal
            information, we will make the correction. If we do not make the
            correction, we will take reasonable steps to note on the personal
            information that you requested the correction.
          </p>
          <p className="leading-relaxed text-gray-700 px-4">
            If you want to exercise either of the above rights, email us at{" "}
            <a
              href="mailto:info@localbestie.com"
              className="text-themecolor hover:underline"
            >
              info@localbestie.com
            </a>
            . Your email should provide evidence of who you are and set out the
            details of your request (e.g. the personal information, or the
            correction, that you are requesting).
          </p>
          <p className="leading-relaxed text-gray-700 px-4">
            We may charge you our reasonable costs of providing to you copies of
            your personal information or correcting that information.
          </p>
        </>
      ),
    },
    {
      id: "internet-use",
      title: "Internet Use",
      content: (
        <>
          <p className="leading-relaxed text-gray-700 px-4">
            While we take reasonable steps to maintain secure internet
            connections, if you provide us with personal information over the
            internet, the provision of that information is at your own risk.
          </p>
          <p className="leading-relaxed text-gray-700 px-4">
            If you post your personal information on the website's message
            board, you acknowledge and agree that the information you post is
            publicly available.
          </p>
          <p className="leading-relaxed text-gray-700 px-4">
            If you follow a link on our website to another site, the owner of
            that site will have its own privacy policy relating to your personal
            information. We suggest you review that site's privacy policy before
            you provide personal information.
          </p>
        </>
      ),
    },
    {
      id: "cookies",
      title: "Cookies",
      content: (
        <>
          <p className="leading-relaxed text-gray-700 px-4">
            We use cookies (an alphanumeric identifier that we transfer to your
            computer's hard drive so that we can recognise your browser) to
            monitor your use of the website. You may disable cookies by changing
            the settings on your browser, although this may mean that you cannot
            use all of the features of the website.
          </p>
        </>
      ),
    },
    {
      id: "contacting",
      title: "Contact Us",
      content: (
        <>
          <p className="leading-relaxed text-gray-700 px-4">
            If you have any questions about this privacy policy, our privacy
            practices, or if you would like to request access to, or correction
            of, your personal information, you can contact us at{" "}
            <a
              href="mailto:info@localbestie.com"
              className="text-themecolor hover:underline"
            >
              info@localbestie.com
            </a>
            .
          </p>
        </>
      ),
    },
  ],
};

// Terms & Conditions Content
export const termsConditionsContent = {
  pageTitle: "Consumer Terms & Conditions",
  lastUpdated: "July 2, 2025",
  tableOfContents: [
    { id: "acceptance", title: "Acceptance of Terms" },
    { id: "services", title: "Description of Services" },
    {
      id: "no-responsibility",
      title: "No Responsibility for Merchant Services",
    },
    { id: "bonuses", title: "Cashback, Rewards & Referrals" },
    { id: "user-accounts", title: "User Accounts" },
    { id: "content-ownership", title: "Content Ownership" },
    { id: "platform-availability", title: "Platform Availability" },
    { id: "liability", title: "Limitation of Liability" },
    { id: "changes", title: "Changes to Terms" },
    { id: "governing-law", title: "Governing Law" },
    { id: "contact", title: "Contact Information" },
  ],
  sections: [
    {
      id: "acceptance",
      title: "Acceptance of Terms",
      content: (
        <>
          <p className="leading-relaxed text-gray-700 px-4">
            By accessing or using the Local Bestie app, you agree to be bound by
            these Terms & Conditions, our Privacy Policy, and any additional
            terms that may apply.
          </p>
          <p className="leading-relaxed text-gray-700 px-4">
            If you do not agree, you may not use the Platform.
          </p>
        </>
      ),
    },
    {
      id: "services",
      title: "Description of Services",
      content: (
        <>
          <p className="leading-relaxed text-gray-700 px-4">
            Local Bestie provides:
          </p>

          <ul className="list-disc pl-6 space-y-2 text-gray-700 px-4">
            <li>
              AI-powered discovery of local restaurants, cafés, bakeries, bars,
              and related food & beverage businesses.
            </li>
            <li>
              Cashback rewards, referral bonuses, and exclusive member offers
              for participating merchants.
            </li>
            <li>
              Information, reviews, photos, and user-generated content to help
              you make informed choices.
            </li>
          </ul>

          <p className="leading-relaxed text-gray-700 px-4">
            We do not operate, own, or manage the businesses listed on our
            platform. All services are provided directly by third-party
            merchants.
          </p>
        </>
      ),
    },
    {
      id: "no-responsibility",
      title: "No Responsibility for Merchant Services",
      content: (
        <>
          <p className="leading-relaxed text-gray-700 px-4">
            Local Bestie acts solely as a discovery and rewards platform.
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 px-4">
            <li>
              We are not responsible for the quality, safety, legality, or
              availability of any products or services provided by merchants.
            </li>
            <li>
              All transactions, bookings, purchases, and dining experiences are
              between you and the merchant.
            </li>
            <li>
              Any issues with your experience (e.g. food quality, service,
              health & safety) must be addressed directly with the merchant.
            </li>
          </ul>
        </>
      ),
    },
    {
      id: "bonuses",
      title: "Cashback, Rewards & Referrals",
      content: (
        <>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 px-4">
            <li>
              Cashback and referral bonuses are offered on eligible purchases
              made through participating merchants.
            </li>
            <li>
              Cashback rewards are subject to verification of completed
              transactions.
            </li>
            <li>
              Local Bestie reserves the right to modify, suspend, or terminate
              rewards programs at any time.
            </li>
            <li>
              Misuse, fraud, or abuse of the rewards system may result in
              forfeiture of earned rewards and suspension of your account.
            </li>
          </ul>
        </>
      ),
    },
    {
      id: "user-accounts",
      title: "User Accounts",
      content: (
        <>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 px-4">
            <li>
              You are responsible for maintaining the security of your account
              credentials.
            </li>
            <li>
              You agree not to share or transfer your account to any other
              person.
            </li>
            <li>
              You must provide accurate, current information when registering.
            </li>
          </ul>
        </>
      ),
    },
    {
      id: "content-ownership",
      title: "Content Ownership",
      content: (
        <>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 px-4">
            <li>
              All content provided on the platform (AI-generated
              recommendations, photos, reviews, etc.) remains the property of
              Local Bestie or the respective rights holders.
            </li>
            <li>
              User-generated reviews, photos, or submissions may be used,
              displayed, and shared by Local Bestie as part of platform
              operations.
            </li>
          </ul>
        </>
      ),
    },
    {
      id: "platform-availability",
      title: "Platform Availability",
      content: (
        <>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 px-4">
            <li>
              We strive to provide reliable access but do not guarantee
              uninterrupted or error-free operation.
            </li>
            <li>
              We may modify, suspend, or discontinue parts or all of the
              Platform at any time.
            </li>
          </ul>
        </>
      ),
    },
    {
      id: "liability",
      title: "Limitation of Liability",
      content: (
        <>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 px-4">
            <li>
              Local Bestie is not liable for any damages, losses, or claims
              arising from your use of the Platform or your experience with
              merchants.
            </li>
            <li>
              Your sole remedy for dissatisfaction with the Platform is to
              discontinue using the service.
            </li>
          </ul>
        </>
      ),
    },
    {
      id: "changes",
      title: "Changes to Terms",
      content: (
        <>
          <p className="leading-relaxed text-gray-700 px-4">
            We may update these Terms from time to time. Continued use after any
            changes constitutes your acceptance of the updated Terms.
          </p>
        </>
      ),
    },
    {
      id: "governing-law",
      title: "Governing Law",
      content: (
        <>
          <p className="leading-relaxed text-gray-700 px-4">
            These Terms are governed by the laws of [New Zealand OR Australia
            depending on your legal base].
          </p>
        </>
      ),
    },
    {
      id: "contact",
      title: "Contact Information",
      content: (
        <>
          <p className="leading-relaxed text-gray-700 px-4">
            If you have any questions, please contact us at:{" "}
            <Link
              href="mailto:support@localbestie.com"
              className="text-themecolor hover:underline"
            >
              support@localbestie.com
            </Link>
            .
          </p>
        </>
      ),
    },
  ],
};
