/**
 * Pricing data for website pricing components
 * KickStart Comparison Table: (lines ~160)
 * JumpStart Comparison Table: (lines ~360)
 */

export interface PricingItem {
  name: {
    kickStart: string;
    jumpStart: string;
  };
  description: {
    kickStart: string;
    jumpStart: string;
  };
  featured?: boolean;
  price: {
    custom?: boolean;
    kickStart: string;
    jumpStart: string;
  };
  priceTerms: {
    custom?: boolean;
    kickStart: string;
    jumpStart: string;
  };
  features: {
    kickStart: string[];
    jumpStart: string[];
  };
  href: string;
  linkText: string;
}

export interface FeatureRow {
  feature: string;
  tooltip?: string;
  plans: (string | boolean)[];
  planTooltips?: (string | null)[];
}

export interface FeatureGroup {
  title: string;
  features: FeatureRow[];
}

export interface PricingData {
  plans: PricingItem[];
  featureTable: {
    kickStart: FeatureGroup[];
    jumpStart: FeatureGroup[];
  };
}

// First pricing section data
export const pricingItemsData: PricingItem[] = [
  {
    name: {
      kickStart: "Boot",
      jumpStart: "Engage",
    },
    description: {
      kickStart: "Get up & running for the first time with beautiful website.",
      jumpStart: "Jumpstart your content-heavy portfolios & start organizing."
    },
    price: {
      kickStart: "2,000",
      jumpStart: "4,000",
    },
    priceTerms: {
      kickStart: "One-time, then S$40/mo",
      jumpStart: "One-time, then S$300/mo",
    },
    features: {
      kickStart: ["5 Pages", "1 x Revision", "1 x Custom Email", "Contact Form", "Animation"],
      jumpStart: ["10 Pages", "2 x Revisions", "3 x Custom Emails", "WhatsApp Support", "Scrolling Animation"],
    },
    href: "https://outlook.office365.com/book/meeting@berlime.com/s/Tyovt-rHPU6N6IQ7EPVEFg2",
    linkText: "Get Started",
  },
  {
    name: {
      kickStart: "Spark",
      jumpStart: "Launch",
    },
    description: {
      kickStart: "Gain authority & credibility with a professional website.",
      jumpStart: "Internatiolized your contents & launch it to new zones.",
    },
    featured: true,
    price: {
      kickStart: "5,000",
      jumpStart: "7,000",
    },
    priceTerms: {
      kickStart: "One-time, then S$550/mo",
      jumpStart: "One-time, then S$1k/mo",
    },
    features: {
      kickStart: ["1 x Collection", "Custom Elements", "3 x Workspace E-mails", "Newsletter", "Priority Support"],
      jumpStart: ["8 x Collections", "Photoshoot & V/O Video", "8 x Workspace E-mail", "E-mail Marketing", "Support Documentation"],
    },
    href: "https://outlook.office365.com/book/meeting@berlime.com/s/Tyovt-rHPU6N6IQ7EPVEFg2",
    linkText: "Get Started",
  },
  {
    name: {
      kickStart: "Astral",
      jumpStart: "Stellar",
    },
    description: {
      kickStart: "Animation-first-approach for compelling designs.",
      jumpStart: "Stellar interactions for VFX & virtual engagement. "
    },
    price: {
      kickStart: "8,000",
      jumpStart: "13,000",
    },
    priceTerms: {
      kickStart: "One-time, then S$1k/mo",
      jumpStart: "One-time,then S$1.5k/mo",
    },
    features: {
      kickStart: ["1 x Collection", "5 x VFX Components", "Custom Elements", "Interactions", "Reusable Elements"],
      jumpStart: ["3 x Collections", "3D Component", "Video Scroll Sequence", "Accessibility", "Git Collaboration"],
    },
    href: "https://outlook.office365.com/book/meeting@berlime.com/s/Tyovt-rHPU6N6IQ7EPVEFg2",
    linkText: "Get Started",
  },
  {
    name: {
      kickStart: "Voyage",
      jumpStart: "✨ Odyssey",
    },
    description: {
      kickStart: "Full suite eCommerce solution for small businesses.",
      jumpStart: "Automate eCommerce solution for high volume sales."
    },
    price: {
      kickStart: "14,000",
      jumpStart: "20,000",
    },
    priceTerms: {
      kickStart: "One-time, then S$2.7k/mo",
      jumpStart: "One-time,then S$6.7k/mo",
    },
    features: {
      kickStart: ["Sell up to 100 SKUs", "2 x Custom Systems", "2 x Collections", "E-mail Marketing", "Documentation"],
      jumpStart: ["Sell up to 400 SKUs", "8 x Custom Systems", "4 x Collections", "A/B Testing", "Quaterly Consultation"],
    },
    href: "/contact",
    linkText: "Contact Us",
  },
];

// Second pricing section data (comparison table)
export const pricingTableData: PricingData = {
  plans: pricingItemsData,
  featureTable: {
    kickStart: [
      {
        title: "Includes",
        features: [
          {
            feature: "Client Portal",
            tooltip: "Access your dashboard to view invoices, progresses & etc.",
            plans: [true, true, true, true]
          },
          {
            feature: "Annotate (Coming Soon)",
            tooltip: "Make simple requests by just annotate directly from your your browser.",
            plans: [false, true, true, true]
          },
          {
            feature: "No. of Pages",
            tooltip: "Maximum number of pages. Excluding legal information page like TnC, Privacy Policy page, etc.",
            plans: ["5 Pages", "10 Pages", "5 Pages", "15 Pages"],
            planTooltips: [
              null,
              null,
              "Reduced number of pages to make way for quality visual effects.",
              null
            ]
          },
          {
            feature: "Copywriting",
            tooltip: "Your website content will be written by our team of copywriters.",
            plans: [false, false, true, true]
          },
          {
            feature: "Contact Form",
            plans: [true, true, true, true]
          },
          {
            feature: "Custom Email",
            tooltip: "Professional custom email addresses with your domain name.",
            plans: ["1", "3", "4", "5"]
          },
          {
            feature: "Hosting",
            tooltip: "Server types & structures your site will be hosted on.",
            plans: ["CDNs", "Shared Hosting", "Shared Hosting", "VPS"],
            planTooltips: [
              "Serverless Deployment Hosting with Netlify, Vercel, etc.",
              null,
              null,
              "Dedicated computing resources."
            ]
          },
          {
            feature: "Editing Hours",
            tooltip: "Number of hours we will edit your website for you every year.",
            plans: ["360 mins/yr", "1.5k mins/yr", "2.5k mins/yr", "3.5k mins/yr"]
          }
        ]
      },
      {
        title: "Design Features",
        features: [
          {
            feature: "Planning",
            tooltip: "Design planning processes to outline the website structure and content.",
            plans: ["Sitemap Only", "+ Wireframe", "+ Mock Up", "+ End Points"],
            planTooltips: [
              null,
              "Low-fidelity wireframe for layout & content placement.",
              "Static mock up to ideate animation.",
              "e.g. Checkout page, Thank you page, etc.."
            ]
          },
          {
            feature: "Design Revisions",
            tooltip: "Number of complete design revision rounds included in your package.",
            plans: ["1", "2", "3", "4"]
          },
          {
            feature: "Animation",
            plans: ["Basic", "Basic", "Custom", "Advance"],
            planTooltips: [
              "Animate on scroll for fade-in effects & other basic animations.",
              null,
              "Advance buttery-smooth stellar animations.",
              null
            ]
          },
          {
            feature: "Media",
            tooltip: "Images, videos, and other media files/assets included in your website.",
            plans: ["Stock", "Premium Stock", "Premium Stock", "Premium Stock"],
            planTooltips: [
              "Stock images from Unsplash, Pexels, etc.",
              "Premium images from Unsplash, Pexels, etc.",
              null,
              null
            ]
          },
          {
            feature: "Custom Elements",
            tooltip: "Unique design elements created specifically for your website.",
            plans: [false, false, true, true]
          },
          {
            feature: "VFX Components",
            tooltip: "Visual effects components that enhance user experience with animation and interactivity.",
            plans: [false, false, true, false]
          },
        ]
      },
      {
        title: "Marketing",
        features: [
          {
            feature: "Newsletter",
            tooltip: "Send e-mail notification whenever you post.",
            plans: [false, "< 250 contacts", "< 300 contacts", "< 500 contacts"]
          },
          {
            feature: "Email Marketing",
            tooltip: "Sends a series of automated e-mails.",
            plans: [false, "1", "2", "5"],
            planTooltips: [
              null,
              "1 x automation workflow max 5 e-mails",
              "2 x automation workflow max 3 e-mails",
              "5 x automation workflow max 5 e-mails"
            ]
          },
          {
            feature: "Search Engine Optimization",
            plans: ["Basic", "30 Keywords Tracking", "Local SEO", "Content Postings"],
            planTooltips: [
              null,
              null,
              "Create Listings in Local Directories",
              "We will create blog posts for your website."
            ]
          },
          {
            feature: "WhatsApp Marketing",
            tooltip: "Auto reply basic enquiries before talking to a person.",
            plans: [false, false, false, false]
          }
        ]
      },
      // {
      //   title: "Advance Features",
      //   features: [
      //     {
      //       feature: "Collections",
      //       tooltip: "Organized groups of content that can be managed and displayed together.",
      //       plans: [false, "1", "1", "2"],
      //       planTooltips: [
      //         null,
      //         "Maximum 5 metadata fields.",
      //         "Maximum 3 metadata fields.",
      //         "Maximum 3 metadata fields."
      //       ]
      //     },
      //     {
      //       feature: "SEO Configuration",
      //       plans: [true, true, true, true]
      //     },
      //     {
      //       feature: "Google Tag Manager Set Up",
      //       tooltip: "Set-up Google Tag Manager.",
      //       plans: [false, false, true, true]
      //     }
      //   ]
      // },
      {
        title: "Support",
        features: [
          {
            feature: "Email Support",
            tooltip: "General email support for assistance.",
            plans: [true, true, true, true]
          },
          {
            feature: "Priority Support",
            tooltip: "Your support requests are handled with higher priority in the queue.",
            plans: [false, false, true, true]
          },
          {
            feature: "WhatsApp Support",
            tooltip: "General WhatsApp group support for quick assistance.",
            plans: [false, false, false, true]
          },
          {
            feature: "Direct Developer Support",
            plans: [false, false, false, "Email Only"]
          },
          {
            feature: "Documentation",
            tooltip: "Comprehensive guides & knowledge base for your website.",
            plans: [false, false, false, true]
          },
          {
            feature: "Consultation",
            tooltip: "One-on-one consultation sessions with our expert team.",
            plans: [false, false, false, "Quarterly"]
          }
        ]
      }
    ],
    jumpStart: [
      {
        title: "Includes",
        features: [
          {
            feature: "Client Portals",
            tooltip: "Enhanced dashboard with progress tracking and advanced reporting.",
            plans: [true, true, true, true]
          },
          {
            feature: "Annotate (Coming Soon)",
            tooltip: "Advanced annotation with team collaboration features.",
            plans: [true, true, true, true]
          },
          {
            feature: "No. of Pages",
            tooltip: "Maximum number of pages for your website, including specialized content.",
            plans: ["10 Pages", "15 Pages", "10 Pages", "25 Pages"],
            planTooltips: [
              "Basic site structure",
              "Extended site structure",
              "Focus on quality over quantity",
              "Comprehensive site architecture"
            ]
          },
          {
            feature: "Copywriting",
            tooltip: "Professional copywriting with SEO optimization.",
            plans: [true, true, true, true]
          },
          {
            feature: "Contact Form",
            plans: [true, true, true, true],
          },
          {
            feature: "Custom Email",
            tooltip: "Professional custom email addresses with advanced features.",
            plans: ["2", "6", "5", "10"],
            planTooltips: [
              null,
              null,
              "Fewer email accounts as this package prioritizes visual effects resources.",
              null
            ]
          },
          {
            feature: "Server",
            tooltip: "Advanced hosting solutions for optimal performance. Higher tiers have higher performance.",
            plans: ["Shared VPS", "VPS1", "VPS2", "VPS3 + SLA"],
            planTooltips: [
              "A VPS instance with our tenants.",
              null,
              null,
              "VPS3 instance with an SLA"
            ]
          },
          {
            feature: "Editing Hours",
            tooltip: "Regular website maintenance and content updates.",
            plans: ["1k mins/yr", "2k mins/yr", "3k mins/yr", "4k mins/yr"]
          }
        ]
      },
      {
        title: "Design Features",
        features: [
          {
            feature: "Planning",
            tooltip: "Complete design planning from concept to execution.",
            plans: ["Wireframe", "Wireframe+", "Prototype", "User Testing"],
            planTooltips: [
              "Low-fidelity wireframe for layout & content placement.",
              "Full size wireframe",
              "Interactive prototype",
              "Full user testing and iteration"
            ]
          },
          {
            feature: "Design Revisions",
            tooltip: "Multiple design revision cycles to achieve the design goal.",
            plans: ["3", "4", "5", "7"]
          },
          {
            feature: "Animation",
            plans: ["Basic", "Advance", "Visual Effects", "Custom"],
            planTooltips: [
              "Simple animations and transitions",
              "Advanced motion and interactions",
              "Extended Visual Interactions",
              "Custom animation sequences"
            ]
          },
          {
            feature: "Media",
            tooltip: "High-quality media assets for your website.",
            plans: ["Premium Stock", "Photo + Video", "Video Only", "Full Production"],
            planTooltips: [
              "Premium stock images and videos",
              "1 x Photo/Video production service",
              "For VFX post-production",
              "1 x Lifestyle & Product Photoshoot & Promo Video"
            ]
          },
          {
            feature: "Custom Elements",
            tooltip: "Bespoke interface elements designed specifically for your brand.",
            plans: [true, true, true, true]
          },
          {
            feature: "VFX Components",
            tooltip: "Interactive features that enhance user experience.",
            plans: [false, false, true, true]
          },
          {
            feature: "3D Components",
            tooltip: "Enhanced mobile experience with specialized features.",
            plans: [false, false, false, true]
          }
        ]
      },
      {
        title: "Marketing",
        features: [
          {
            feature: "Newsletter",
            tooltip: "Comprehensive email marketing solutions.",
            plans: ["< 500 contacts", "< 750 contacts", "< 850 contacts", "< 5,500 contacts"]
          },
          {
            feature: "Email Marketing",
            tooltip: "Automated marketing workflows and campaigns.",
            plans: ["1", "3", "4", "10"],
            planTooltips: [
              "1 x automation workflow max 5 e-mails",
              "3 x automation workflow max 3 e-mails",
              "4 x automation workflow max 5 e-mails",
              "10 x automation workflow max 5 e-mails"
            ]
          },
          {
            feature: "Search Engine Optimization",
            plans: ["20 Keyword Tracking", "Local SEO", "Local SEO", "Event Tracking"],
            planTooltips: [
              null,
              null,
              null,
              "Track key events for more insights."
            ]
          },
          {
            feature: "WhatsApp Marketing",
            tooltip: "Auto reply basic enquiries before talking to a person.",
            plans: [false, false, false, true]
          }
        ]
      },
      // {
      //   title: "Advance Features",
      //   features: [
      //     {
      //       feature: "Collections",
      //       tooltip: "Advanced content management systems.",
      //       plans: ["1 Collection", "3 Collections", "5 Collections", "Unlimited"],
      //       planTooltips: [
      //         "Basic collection management",
      //         "Multiple collections with templates",
      //         "Advanced collections with workflows",
      //         "Unlimited collections with custom fields"
      //       ]
      //     },
      //     {
      //       feature: "SEO Configuration",
      //       plans: ["Basic", "Standard", "Advanced", "Custom"]
      //     },
      //     {
      //       feature: "Google Tag Manager Set Up",
      //       tooltip: "Integrate with your existing business tools and systems.",
      //       plans: ["2 Systems", "5 Systems", "10 Systems", "Unlimited"]
      //     }
      //   ]
      // },
      {
        title: "Support",
        features: [
          {
            feature: "Email Support",
            tooltip: "Priority support with guaranteed response times.",
            plans: [true, true, true, true]
          },
          {
            feature: "Priority Support",
            tooltip: "Your personal point of contact for all website needs.",
            plans: [false, false, true, true]
          },
          {
            feature: "WhatsApp Support",
            tooltip: "General WhatsApp group support for quick assistance.",
            plans: [false, true, true, true]
          },
          {
            feature: "Direct Developer Support",
            plans: [false, true, true, true]
          },
          {
            feature: "Documentation",
            tooltip: "Comprehensive guides and training sessions.",
            plans: [false, false, false, true]
          },
          {
            feature: "Consultation",
            tooltip: "Strategic consulting sessions with our experts.",
            plans: [false, "Semi-Annual", "Quarterly", "Monthly"]
          }
        ]
      }
    ]
  }
}; 