function signUpForm(step) {
  switch (step) {
    case 0:
      return `<div class="form-logo">
      <img src="../src/assets/images/googleLogo.svg" alt="" />
    </div>
    <div class="form-head">
      <h2 class="form-title">Create a Google Account</h2>
      <p class="form-title-description">Enter your name</p>
    </div>

    <div class="form-input-container">
      <input
        class="name-field"
        type="text"
        placeholder="First name"
        name="firstname"
        id="first-name"
      />
      <div class="error"></div>

      <input
        class="name-field"
        type="text"
        placeholder="Last name"
        name="lastname"
        id="last-name"
      />
      <div class="error"></div>
    </div>
   `;

    case 1:
      return ` <div class="form-logo">
      <img src="../src/assets/images/googleLogo.svg" alt="" />
    </div>
    <div class = "form-head">
      <h2 class = "form-title" >Basic information</h2>
      <p class = "form-title-description">Enter your birthday and gender</p>
    </div>
    
    <div class="form-input-container">

        <div class="gender-input-container">
         <input class="gender-field" type="text" placeholder="Day" name="Day" id="Day">
         <input class="gender-field" type="text" placeholder="Month" name="Month" id="Month">
         <input class="gender-field" type="text" placeholder="Year" name="Year" id="Year">
        </div>
        <div id="wrongdate" class="error"></div>
        
         <input class="name-field" type="text" placeholder="Gender" name="Gender" id="Gender">
         <div id="emptygender" class="error"></div>

         <input class="name-field" type="text" placeholder="Phone Number" name="phone" id="phone">
         <div id="wrongphone" class="error"></div>

    </div>
   `;
    case 2:
      return ` <div class="form-logo">
      <img src="../src/assets/images/googleLogo.svg" alt="" />
    </div>
    <div class = "form-head">
      <h2 class = "form-title" >Choose your Gmail address</h2>
      <p class = "form-title-description">create your own Gmail address</p>
    </div>
    <div class="form-input-container">
      
         <input class="name-field" type="text" placeholder="create a Gmail address" name="Gmail" id="Gmail">
         <div class="error"></div>
    
    </div>
   `;

    case 3:
      return ` <div class="form-logo">
      <img src="../src/assets/images/googleLogo.svg" alt="" />
    </div>
    <div class = "form-head">
      <h2 class = "form-title" >Create a strong password</h2>
      <p class = "form-title-description">Create a strong password with a mixture of letters, numbers and symbols</p>
    </div>
    
    <div class="form-input-container">
      
         <input class="name-field" type="password" placeholder="Password" name="Password" id="password">
     
         <input class="name-field" type="password" placeholder="Confirm Password" name="password2" id="password2">
         <div class="error"></div>

    </div>
    `;

    case 4:
      return ` <div class="form-logo">
      <img src="../src/assets/images/googleLogo.svg" alt="" />
    </div>
    <P class="input-title">Privacy and Terms</P>
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
      <a href="#" class="cancel">cancel</a>
    `;
  }
}
