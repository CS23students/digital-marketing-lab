import emailjs from "@emailjs/browser";

const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

menuBtn.addEventListener("click", () => {
  if (mobileMenu.classList.contains("max-h-0")) {
    // OPEN
    mobileMenu.classList.remove("max-h-0", "opacity-0");
    mobileMenu.classList.add("max-h-96", "opacity-100");
  } else {
    // CLOSE
    mobileMenu.classList.add("max-h-0", "opacity-0");
    mobileMenu.classList.remove("max-h-96", "opacity-100");
  }
});

// Initialize EmailJS
emailjs.init("y22hylZaFSaZOMEwD"); // Replace with your public key

const newsletterForm = document.getElementById("newsletterForm");

newsletterForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const userEmail = newsletterForm.user_email.value;

  // Your full HTML newsletter as a string
  const newsletterHTML = `
  <div style="max-width:600px;margin:20px auto;background:#ffffff;border-radius:12px;overflow:hidden;font-family:Arial,sans-serif;color:#111;">
    <!-- HEADER -->
    <div style="text-align:center;padding:24px;border-bottom:1px solid #e5e7eb;">
      <h1 style="font-size:24px;font-weight:bold;margin:0;">⚡Click<span style="color:#fb3b57;">Spark</span></h1>
      <p style="font-size:14px;color:#6b7280;margin:4px 0 0;">Digital Marketing Newsletter</p>
    </div>

    <!-- INTRO -->
    <div style="text-align:center;padding:24px;">
      <p style="font-size:12px;text-transform:uppercase;color:#fb3b57;margin:0 0 12px;">Monthly Update • February</p>
      <h2 style="font-size:20px;font-weight:bold;color:#1e3a8a;margin:0 0 12px;">Marketing Insights You’ll Love</h2>
      <p style="font-size:14px;color:#555;margin:0 0 16px;">
        Practical strategies, expert tips, and exclusive offers to help your brand grow faster in the digital space.
      </p>
      <img src="https://images.unsplash.com/photo-1556761175-4b46a572b786" alt="Marketing" style="width:100%;max-width:400px;border-radius:8px;margin:0 auto 16px;display:block;" />
      
      <!-- EDITOR NOTE -->
      <div style="font-size:12px;color:#555;margin-bottom:16px;">
        <p style="font-weight:bold;margin:0 0 4px;">📝 Editor’s Note</p>
        <p style="margin:0;">
          This month, we’re focusing on smart growth — improving visibility, engagement, and conversions without increasing your ad spend.
        </p>
      </div>

      <!-- CTA -->
      <a href="https://clickspark-digital-agency.netlify.app/services.html" style="display:inline-block;padding:12px 24px;background:#fb3b57;color:#fff;text-decoration:none;border-radius:6px;font-weight:bold;margin-top:8px;">
        Explore Our Services →
      </a>
    </div>

    <!-- QUICK TIP -->
    <div style="background:#f9fafb;padding:16px;border-top:1px solid #e5e7eb;">
      <h3 style="font-size:16px;font-weight:bold;color:#1e3a8a;margin:0 0 8px;">💡 Quick Marketing Tip</h3>
      <p style="font-size:14px;color:#555;margin:0;">
        Website speed matters. Even a 1-second delay can reduce conversions by 7%. Optimize images and remove unused scripts for instant improvement.
      </p>
    </div>

    <!-- OFFERS -->
    <div style="padding:24px;border-top:1px solid #e5e7eb;">
      <h3 style="font-size:16px;font-weight:bold;color:#1e3a8a;margin:0 0 12px;text-align:center;">🎁 Exclusive Offers This Month</h3>

      <div style="background:#fff3f0;border:1px solid #fb3b57;border-radius:8px;padding:12px;margin-bottom:12px;">
        <p style="font-weight:bold;margin:0 0 4px;">🔥 Flat 20% OFF on SEO Audit</p>
        <p style="margin:0;">Get a complete website SEO audit and competitor analysis. Offer valid till Feb 28.</p>
      </div>

      <div style="background:#eff6ff;border:1px solid #3b82f6;border-radius:8px;padding:12px;">
        <p style="font-weight:bold;margin:0 0 4px;">🚀 Free Social Media Strategy Call</p>
        <p style="margin:0;">Book a 30-minute consultation and receive a personalized growth roadmap.</p>
      </div>
    </div>

    <!-- SERVICES -->
    <div style="padding:24px;background:#f9fafb;border-top:1px solid #e5e7eb;">
      <h3 style="font-size:16px;font-weight:bold;color:#1e3a8a;margin:0 0 12px;text-align:center;">⚙️ Our Core Services</h3>
      <div style="font-size:14px;color:#555;line-height:1.5;">
        <p style="margin:8px 0;"><strong>🔍 SEO Optimization:</strong> Rank higher and attract quality organic traffic.</p>
        <p style="margin:8px 0;"><strong>📢 Paid Advertising:</strong> Performance-driven Google & social ad campaigns.</p>
        <p style="margin:8px 0;"><strong>📱 Social Media Marketing:</strong> Build trust, engagement, and brand visibility.</p>
      </div>
      <img src="https://images.unsplash.com/photo-1552581234-26160f608093" alt="Digital Marketing" style="width:100%;max-width:320px;border-radius:8px;display:block;margin:16px auto 0;" />
    </div>

    <!-- FOOTER -->
    <div style="background:#111827;color:#d1d5db;text-align:center;padding:24px;">
      <p style="font-size:12px;margin:0 0 4px;">📧 support@clickspark.com</p>
      <p style="font-size:10px;margin:0;">© 2026 ClickSpark Digital Marketing</p>
    </div>
  </div>
  `;

  emailjs
    .send("service_pkthqxo", "template_i68gbam", {
      email: userEmail, // recipient
      html_content: newsletterHTML, // your HTML goes here
    })
    .then((response) => {
      console.log("SUCCESS!", response.status, response.text);
      alert("🎉 Newsletter sent! Check your inbox.");
      newsletterForm.reset();
    })
    .catch((error) => {
      console.error("FAILED...", error);
      alert("Oops! Something went wrong. Try again.");
    });
});
