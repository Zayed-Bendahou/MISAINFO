import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';
export const ContactUs = () => {
  const form = useRef();
  const [result, showResult] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_jgvx6ss',
        'template_w4p5dwb',
        form.current,
        '7R_zfVTXrphI5ORBB'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    showResult(true);
  };
  return (
    <div class="contactus" id="contact">
      <div class="contactOverlay">
        <div class="container">
          <div class="form">
            <form class="formMain" action="" onSubmit="">
              <div class="formWord">
                <h2 className="mb-[10%] font-sans font-bold text-4xl ">
                  Envoyer nous un message
                </h2>
                <span>Nom complet</span>
                <br />
                <input class="input100" type="text" name="fullName" required />
                <br />
                <span>Numéro de téléphone</span>
                <br />
                <input class="input100" type="text" name="phone" required />
                <br />
                <span>E-mail</span>
                <br />
                <input class="input100" type="text" name="email" required />
                <br />
              </div>
              <div class="formWord2">
                <span>Message</span>
                <br />
                <textarea name="message" required></textarea>
                <br />
                <button className="mt-[0%] font-bold rounded-md w-48 h-14 bg-zinc-500 border-0 text-white">
                  Envoyer
                </button>

                <div class="row"></div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
