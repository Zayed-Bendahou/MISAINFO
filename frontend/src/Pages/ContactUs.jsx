import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const ContactUs = () => {
  const form = useRef();

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
  };
  return (
    <div className="">
      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex py-5 gap-5 justify-center"
      >
        <label>Nom et prénom</label>
        <input type="text" name="user_name" />
        <label>E-mail</label>
        <input type="email" name="user_email" />
        <label>Sujet</label>
        <input type="text" name="subject" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" className="bg-blue h-20 w-20 " />
      </form>
    </div>
  );
};
