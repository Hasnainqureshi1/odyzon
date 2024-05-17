import React from "react";
import Video from "next-video";
import myVideo from "@/videos/eventsbg.mp4";
const Events = () => {
  return (
    <div className=" w-full px-[80px]  center h-[105vh] relative">
      <video
        autoplay
        loop
        muted
        autoPlay
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={"/_next-video/eventsbg.mp4"} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="flex my-[3rem] event-box relative rounded-lg py-[8rem] justify-center items-center flex-col w-[70%] mx-auto h-[10rem] border  text-white bg-opacity-80">
        <h1 className="text-3xl text-center">
          No upcoming events scheduled, Stay Tuned.{" "}
        </h1>
        <button id="subscribeBtn" className="mt-5 border p-3 rounded-md">
          Subscribe to Newsletter
        </button>
      </div>

      {/* Script to handle modal */}
      <script
  dangerouslySetInnerHTML={{
    __html: `
      document.getElementById('subscribeBtn').addEventListener('click', function() {
        var modal = document.createElement('div');
        modal.className = 'modal-overlay';
        modal.innerHTML = \`
          <div class="modal">
            <span class="close" id="closeModal">&times;</span>
            <h2>Subscribe to Newsletter</h2>
            <div>
   
              <input type="email" id="emailInput" placeholder="Enter your email" required>
              <p class='required'>*Email is required</p>
             
            </div>
            <input type="text" id="nameInput" placeholder="Enter your name">
            <input type="text" id="countryInput" placeholder="Enter your country">
           
            <button id="submitBtn">Suscribe</button>
            <div id="error-message" style="color: red; display: none;">Email is required</div>
          </div>
        \`;
        document.body.appendChild(modal);
        document.body.style.overflow = 'hidden';
        
        document.getElementById('closeModal').addEventListener('click', function() {
          modal.remove();
          document.body.style.overflow = '';
        });

        document.getElementById('submitBtn').addEventListener('click', function() {
          var name = document.getElementById('nameInput').value;
          var country = document.getElementById('countryInput').value;
          var email = document.getElementById('emailInput').value;
          var errorMessage = document.getElementById('error-message');
          
          if (!email) {
            errorMessage.style.display = 'block';
            return;
          } else {
            errorMessage.style.display = 'none';
          }

          // Handle submission logic here
          console.log('Submitted name:', name);
          console.log('Submitted country:', country);
          console.log('Submitted email:', email);
          
          modal.remove();
          document.body.style.overflow = '';
        });
      });
    `,
  }}
/>

     
    </div>
  );
};

export default Events;
