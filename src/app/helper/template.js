export const templates = [
  {
    name: "Welcome Email",
    description: "A friendly welcome email for new users.",
    thumbnailUrl:
      "https://res.cloudinary.com/mailmodo/image/upload/v1726815706/strapi/template_OG_image_dce420efb2.png",
    title: "Welcome to Our Community!",
    content: `<div>We are excited to have you join our community. Dive into exclusive features and stay connected with updates tailored for you. Feel free to ask any questions.</div>`,
    footer: "Cheers, The Community Team",
    imageUrl:
      "https://www.saleshandy.com/blog/wp-content/uploads/2022/10/55-Cold-Email-Trmplates.png",
    titleSize: "5em",
    titleColor: "#FF5722",
    footerSize: "1em",
    footerColor: "#FF5722",
    alignment: "left",
    html: `
        <div>
          <div style="font-family: Arial, sans-serif; color: #333;">
            <h1 style="color: {{titleColor}}; font-size: {{titleSize}};">{{title}}</h1>
            <img src="{{imageUrl}}" alt="Welcome" style="width: 100%; margin: 20px 0;">
            <div className="border rounded-lg p-4" dangerouslySetInnerHTML={{ __html: {{content}}, }} />
            <footer style="margin-top: 20px; color: {{footerColor}}; font-size: {{footerSize}};">{{footer}}</footer>
          </div>
        </div>
      `,
  },
  {
    name: "Discount Offer",
    description: "An email template to announce discounts.",
    thumbnailUrl:
      "https://res.cloudinary.com/mailmodo/image/upload/v1726815706/strapi/template_OG_image_dce420efb2.png",
    title: "Exclusive 20% Off Just for You!",
    content: `<div>We are excited to have you join our community. Dive into exclusive features and stay connected with updates tailored for you. Feel free to ask any questions.</div>`,
    footer: "Happy Shopping, The Sales Team",
    imageUrl:
      "https://www.saleshandy.com/blog/wp-content/uploads/2022/10/55-Cold-Email-Trmplates.png",
    titleSize: "2em",
    titleColor: "#2196F3",
    footerSize: "1em",
    footerColor: "#FF5722",
    alignment: "center",
    html: `
        <div>
          <div style="font-family: Tahoma, sans-serif; color: #000;">
          <img src="{{imageUrl}}" alt="Discount" style="width: 100%; margin: 20px 0;">
           <h1 style="color: {{titleColor}}; font-size: {{titleSize}};">{{title}}</h1>
            <div className="border rounded-lg p-4" dangerouslySetInnerHTML={{ __html: {{content}}, }} />
            <footer style="margin-top: 20px; color: {{footerColor}}; font-size: {{footerSize}};">{{footer}}</footer>
          </div>
        </div>
      `,
  },
  {
    name: "Event Invitation",
    description: "Invite users to a virtual or physical event.",
    thumbnailUrl:
      "https://res.cloudinary.com/mailmodo/image/upload/v1726815706/strapi/template_OG_image_dce420efb2.png",
    title: "You're Invited to Our Special Event!",
    content: `<div>We are excited to have you join our community. Dive into exclusive features and stay connected with updates tailored for you. Feel free to ask any questions.</div>`,
    footer: "Best Regards, The Events Team",
    imageUrl:
      "https://www.saleshandy.com/blog/wp-content/uploads/2022/10/55-Cold-Email-Trmplates.png",
    titleSize: "7em",
    titleColor: "#2196F3",
    footerSize: "1em",
    footerColor: "#FF5722",
    alignment: "right",
    html: `
        <div>
          <div style="font-family: Verdana, sans-serif; background-color: #F9F9F9; padding: 20px;">
           <h1 style="color: {{titleColor}}; font-size: {{titleSize}};">{{title}}</h1>
            <div className="border rounded-lg p-4" dangerouslySetInnerHTML={{ __html: {{content}}, }} />
            <img src="{{imageUrl}}" alt="Event" style="width: 100%; margin: 20px 0;">
            <footer style="margin-top: 20px; color: {{footerColor}}; font-size: {{footerSize}};">{{footer}}</footer>
          </div>
        </div>
      `,
  },
  {
    name: "Newsletter",
    description: "A template for monthly newsletters.",
    thumbnailUrl:
      "https://res.cloudinary.com/mailmodo/image/upload/v1726815706/strapi/template_OG_image_dce420efb2.png",
    title: "This Month in Review",
    content: `<div>We are excited to have you join our community. Dive into exclusive features and stay connected with updates tailored for you. Feel free to ask any questions.</div>`,
    footer: "Stay Connected, The Newsletter Team",
    imageUrl:
      "https://www.saleshandy.com/blog/wp-content/uploads/2022/10/55-Cold-Email-Trmplates.png",
    titleSize: "10em",
    titleColor: "#FF5722",
    footerSize: "1em",
    footerColor: "#FF5722",
    alignment: "center",
    html: `
        <div>
          <div style="font-family: Georgia, serif; color: #4D4D4D;">
           <img src="{{imageUrl}}" alt="Newsletter" style="width: 100%; margin: 20px 0;">
            <h1 style="color: {{titleColor}}; font-size: {{titleSize}};">{{title}}</h1>
            <div className="border rounded-lg p-4" dangerouslySetInnerHTML={{ __html: {{content}}, }} />
            <footer style="margin-top: 20px; color: {{footerColor}}; font-size: {{footerSize}};">{{footer}}</footer>
          </div>
        </div>
      `,
  },
  {
    name: "Feedback Request",
    description: "Ask users for feedback on services or products.",
    thumbnailUrl:
      "https://res.cloudinary.com/mailmodo/image/upload/v1726815706/strapi/template_OG_image_dce420efb2.png",
    title: "We Value Your Feedback",
    content: `<div>We are excited to have you join our community. Dive into exclusive features and stay connected with updates tailored for you. Feel free to ask any questions.</div>`,
    footer: "Thank You, The Feedback Team",
    imageUrl:
      "https://www.saleshandy.com/blog/wp-content/uploads/2022/10/55-Cold-Email-Trmplates.png",
    titleSize: "6em",
    titleColor: "#FF9800",
    footerSize: "1em",
    footerColor: "#FF5722",
    alignment: "center",
    html: `
        <div>
          <div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; color: #666;">
            <h1 style="color: {{titleColor}}; font-size: {{titleSize}};">{{title}}</h1>
            <img src="{{imageUrl}}" alt="Feedback" style="width: 100%; margin: 20px 0;">
            <div className="border rounded-lg p-4" dangerouslySetInnerHTML={{ __html: {{content}}, }} />
           <footer style="margin-top: 20px; color: {{footerColor}}; font-size: {{footerSize}};">{{footer}}</footer>
          </div>
        </div>
      `,
  },
];
