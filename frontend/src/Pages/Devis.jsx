import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import '../components/Assets/bg.css';
export const Devis = () => {
  const Result = () => {
    return <p>Votre message a été envoyé.</p>;
  };
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
    <div class="bg">
      <div className="w-full h-full mt-48 ">
        <div className=" md:p-6 w-full min-h-screen justify-center items-center ">
          <div className="flex flex-col md:flex-row md:space-x-10 md:space-y-0 space-y-6 bg-cyan-700 w-full max-w-4xl p-6 rounded-xl shadow-lg text-white ">
            <div className="flex flex-col space-y-8 justify-evenly">
              <div>
                <h1 className="font-bold text-4xl md:tracking-wide">
                  Besoin d'un devis ?
                </h1>
                <p className="pt-2 text-cyan-100 text-sm">
                  N'hésitez pas à remplir le formulaire ci-dessous, un membre de
                  notre équipe sera à votre disposition pour vous répondre dans
                  un bref délais.
                </p>
              </div>
              <div className="flex flex-col space-y-6">
                <div className="inline-flex space-x-2 items-center">
                  <ion-icon
                    name="call"
                    class="text-teal-300 text-xl"
                  ></ion-icon>
                  <span>0668191545 | 0668191654 | 0808639627 </span>
                </div>
                <div className="inline-flex space-x-2 items-center">
                  <ion-icon
                    name="mail"
                    class="text-teal-300 text-xl"
                  ></ion-icon>
                  <span>Contact@misainfo.ma</span>
                </div>
                <div className="inline-flex space-x-2 items-center">
                  <ion-icon
                    name="location"
                    class="text-teal-300 text-xl"
                  ></ion-icon>
                  <span>
                    Nr 58 Bd Zouhair Mohamed Najjar Hay al <br />
                    madrassa Hay Mohammadi - Casablanca, Morocco
                  </span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-10 text-gray-600 md:w-full ">
              <form
                ref={form}
                onSubmit={sendEmail}
                className="flex flex-col space-y-4"
              >
                <div>
                  <label className="text-sm font-semibold">
                    Société <span className="text-red-500">*</span>
                  </label>
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Votre société"
                    className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outine-none focus:ring-2 focus:ring-teal-300"
                    required
                    name="user_name"
                  />
                </div>
                <div>
                  <label className="text-sm font-semibold">
                    E-mail <span className="text-red-500">*</span>
                  </label>
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Votre adresse e-mail"
                    className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outine-none focus:ring-2 focus:ring-teal-300"
                    required
                    name="user_email"
                  />
                </div>
                <div>
                  <label className="text-sm font-semibold" required>
                    Numéro de téléphone <span className="text-red-500">*</span>
                  </label>
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Votre numéro de téléphone"
                    className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outine-none focus:ring-2 focus:ring-teal-300"
                    required
                    name="user_phone"
                  />
                </div>
                <div>
                  <label className="text-sm font-semibold">Adresse</label>
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Votre adresse exacte"
                    className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outine-none focus:ring-2 focus:ring-teal-300"
                    name="user_address"
                  />
                </div>
                <div>
                  <label className="text-sm font-semibold">Message</label>
                </div>
                <div>
                  <textarea
                    placeholder="Votre message"
                    rows="4"
                    className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outine-none focus:ring-2 focus:ring-teal-300"
                    name="message"
                  ></textarea>
                </div>
                <div className="flex flex-row justify-between">
                  {/* <label className="italic">
                    <span className="text-red-500">*</span> Requis
                  </label> */}
                  <div className="italic text-sm py-2 pl-10 text-red-500">
                    {result ? <Result /> : null}
                  </div>
                  <button
                    className=" inline-block self-end bg-cyan-700 text-white font-bold rounded-lg px-6 py-2 hover:bg-teal-500"
                    type="submit"
                    value="Send"
                  >
                    Envoyer
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
