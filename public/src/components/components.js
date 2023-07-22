function signUpForm(step) {
  switch (step) {
    case 0:
      return `<p class="input-title">Create a Google Account</p>
      <p class="input-subtitle">Entre your name</p>
      <input id="first-name" type="text" placeholder="First name" class="input" />
      
      <input
        id="last-name"
        type="text"
        placeholder="Last name (optional)"
        class="input"
      />
            
            `;

    case 1:
      return `<P class="input-title">Basic information</P>
            <p class="input-subtitle">Enter your birthday and gender</p>
            <div class="flex wrap flex-col justify-between birth-info"> 
            <div class = "flex justify-between">
              <input id="month" class="sign-up-input" placeholder="Month">
                <div class = "input-error" />>
              <input id="day" class="sign-up-input" placeholder="Day">
              <div class = "input-error" />
              <input id="year" class="sign-up-input" placeholder="Year">
<div class = "input-error" />
            </div>
              <input placeholder="Gender" class="gender">

            </div>`;
    case 2:
      return `<P class="input-title">How you’ll sign in</P>
            <p class="input-subtitle">Create a Gmail address for signing in to your Google Account</p>
            <input id="username" type="text" placeholder="Username" class="input">
            <div class = "input-error" />
            <div class="flex items-start pass-info-holder"><p class="pass-info">You can use letters, numbers & periods</p></div>
            <div class="flex justify-between items-center btn">
              <a href="#" class="existing">Use your existing email</a>`;

    case 3:
      return `<p class="input-title">Create a strong password</p>
            <p class="input-subtitle">
              Create a strong password with a mix of letters, numbers and symbols
            </p>
            <input id="" type="text" placeholder="Password" class="input" />
            <div class = "input-error" />
            <input id="" type="text" placeholder="Confirm" class="input" />
            < div class = "input-error" />
            <div class="flex checkbox">
              <input type="checkbox" />
              <p>Show password</p>`;

    case 4:
      return `<P class="input-title">Review your account info</P>
            <p class="input-subtitle">You can use this email address to sign in later</p>`;

    case 5:
      return `<P class="input-title">Privacy and Terms</P>
            <div class="flex flex-col">
              <p>To create a Google Account, you’ll need to agree to the Terms of Service below.</p>
              <p>In addition, when you create an account, we process your information as described in our Privacy Policy, including these key points:</p>
              <p>Data we process when you use Google</p>
              <ul>
                <li>When you set up a Google Account, we store information you give us like your name, email address, and telephone number.</li>
                <li>When you use Google services to do things like write a message in Gmail or comment on a YouTube video, we store the information you create.</li>
                <li>When you search for a restaurant on Google Maps or watch a video on YouTube, for example, we process information about that activity – including information like the video you watched, device IDs, IP addresses, cookie data, and location.</li>
                <li>We also process the kinds of information described above when you use apps or sites that use Google services like ads, Analytics, and the YouTube video player.</li>
              </ul>
              <p>Why we process it</p>
              <p>We process this data for the purposes described in our policy, including to:</p>
              <ul>
                <li>Help our services deliver more useful, customized content such as more relevant search results;</li>
                <li>Improve the quality of our services and develop new ones;</li>
                <li>Deliver personalized ads, depending on your account settings, both on Google services and on sites and apps that partner with Google;</li>
                <li>Improve security by protecting against fraud and abuse; and</li>
                <li>Conduct analytics and measurement to understand how our services are used. We also have partners that measure how our services are used. Learn more about these specific advertising and measurement partners.</li>
              </ul>
              <p>Combining data</p>
              <p>We also combine this data among our services and across your devices for these purposes. For example, depending on your account settings, we show you ads based on information about your interests, which we can derive from your use of Search and YouTube, and we use data from trillions of search queries to build spell-correction models that we use across all of our services.</p>
              <p>You’re in control</p>
              <p>Depending on your account settings, some of this data may be associated with your Google Account and we treat this data as personal information. You can control how we collect and use this data now by clicking “More Options” below. You can always adjust your controls later or withdraw your consent for the future by visiting My Account (myaccount.google.com).</p>
            </div>
            <div class="flex justify-between items-center btn">
              <a href="#" class="cancel">cancel</a>`;
  }
}
