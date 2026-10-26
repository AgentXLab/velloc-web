export interface PrivacySection {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
}

export interface PrivacyPolicy {
  label: string;
  title: string;
  effectiveDate: string;
  intro: string;
  sections: PrivacySection[];
  backLinkText: string;
}

export const privacyPolicy: PrivacyPolicy = {
  label: 'LEGAL',
  title: 'Privacy Policy',
  effectiveDate: 'October 23, 2026',
  intro:
    'Velloc Code is a desktop code agent for Windows. This policy explains what happens to information when you visit velloc.app (the “Site”) or use the Velloc Code application. In short: the Site is a static website that collects no personal information, and the application stores your work on your own computer.',
  sections: [
    {
      heading: 'Who we are',
      paragraphs: [
        'The Site and the Velloc Code application are operated by VellocLabs (“we”, “us”).',
      ],
    },
    {
      heading: 'Information we collect',
      paragraphs: [
        'The Site does not collect personal information. There are no accounts, sign-up or contact forms, newsletters, comment sections, or payments. We do not set cookies, we do not run analytics, advertising, or tracking scripts, and we do not build profiles of visitors or follow them to other websites.',
        'We do not sell personal information, and we have no advertising or data-broker partners.',
      ],
    },
    {
      heading: 'Hosting and server logs',
      paragraphs: [
        'The Site is hosted on GitHub Pages and served over HTTPS. Like any hosting provider, GitHub records standard technical data for each request — such as IP address, browser user agent, requested URL, and timestamp — in server logs used for security and abuse prevention. We do not run a separate analytics stream, we do not combine these logs with anything else, and GitHub handles this data under the GitHub Privacy Statement.',
      ],
    },
    {
      heading: 'Third-party requests made by the Site',
      paragraphs: [
        'The Site loads all of its assets — including its typefaces — from its own domain, so visiting it does not contact any third-party service apart from the host described above. There are no embedded videos, social widgets, or tracking pixels.',
      ],
    },
    {
      heading: 'Downloads',
      paragraphs: [
        'The Windows installer is available from this Site at velloc.app/download/VellocSetup.exe and from our GitHub Releases page. The provider that handles the request — GitHub Pages for the Site, GitHub for Releases — processes technical data such as your IP address and user agent in order to deliver the file, under the GitHub Privacy Statement. The download counts GitHub reports to us are aggregate numbers, not records tied to individual visitors.',
      ],
    },
    {
      heading: 'The Velloc Code application',
      paragraphs: [
        'Velloc Code does not require an account and has no sign-in. Your settings, sessions, conversation history, memory, and file snapshots are stored on your own computer, under the .velloc folder in your user directory. We have no access to them, and they are not synced to us.',
        'The application is made of two parts: a Chromium-based client, and the runtime, which contains the agent loop and the interface. When the application starts, the client downloads the runtime from our servers at app.velloc.app — or from beta.velloc.app, or from a runtime source you configure yourself. That is an ordinary HTTPS request for static files; our hosting provider receives standard request data such as your IP address and user agent, which we use only to operate and secure the service.',
        'Model access is configured by you. You add the API key of a provider — for example Anthropic, OpenAI, Google, or a local Ollama server — in the application’s settings. Your prompts, code, and file contents are sent from your computer to that provider, and are governed by that provider’s privacy policy. We do not proxy model traffic and do not receive it. The same applies to any external tool or service you explicitly enable by adding its own credentials.',
      ],
    },
    {
      heading: 'Data retention',
      paragraphs: [
        'The Site keeps no user data of its own, so there is nothing for us to retain or delete. Server logs are held by GitHub for the period described in its privacy statement.',
        'Data the application creates stays on your computer until you remove it. Uninstalling the application, or deleting the .velloc folder, removes it. We cannot delete it for you because we never receive it.',
      ],
    },
    {
      heading: 'Security',
      paragraphs: [
        'The Site is a static site served over HTTPS, and we do not operate a database of visitor or customer data. If you believe you have found a security issue in the Site or in the application, please report it using the contact details below rather than disclosing it publicly.',
      ],
    },
    {
      heading: 'Your rights',
      paragraphs: [
        'Because the Site collects no personal information and the application does not send us your content, we generally hold no personal data about you that we could retrieve, correct, export, or delete.',
        'If you are in the European Economic Area, the United Kingdom, or another jurisdiction with comparable laws, you may still contact us to ask what we hold. In practice the answer is that we hold nothing beyond what GitHub processes under its own policy. Requests about data held by a model provider should be addressed to that provider.',
        'You can remove local application data at any time as described under Data retention.',
      ],
    },
    {
      heading: 'Children’s privacy',
      paragraphs: [
        'The Site and the application are not directed to children, and we do not knowingly collect information from children under 13, or under 16 where local law sets that threshold.',
      ],
    },
    {
      heading: 'International processing',
      paragraphs: [
        'GitHub processes data in the United States and other countries, and its privacy statement describes the safeguards it applies. We do not transfer personal data ourselves.',
      ],
    },
    {
      heading: 'Changes to this policy',
      paragraphs: [
        'If this policy changes, the revised version will be published on this page with a new effective date. Because the Site has no mailing list or accounts, we cannot notify you by email; the effective date at the top of this page is the authoritative version.',
      ],
    },
    {
      heading: 'Contact',
      paragraphs: [
        'Questions about this policy, or requests under the rights described above, can be sent to privacy@velloc.app. You can also open an issue at github.com/VellocLabs/velloc-bootstrap/issues.',
      ],
    },
  ],
  backLinkText: 'Back to home',
};
