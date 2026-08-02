'use client';
import React,{ useState } from 'react';
import gitHubIcon from "../../../public/images/github.svg";
import linkedinIcon from "../../../public/images/linkedin.svg";
import whatsappIcon from "../../../public/images/whatsapp.svg"; 
import emailIcon from "../../../public/images/email.svg";
import Link from 'next/link';
import Image from 'next/image';
import { FaInstagram ,FaFacebook ,FaTiktok ,FaLinkedin , FaWhatsapp ,FaGithub    } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setError('');
    setEmailSubmitted(false);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload = {
      email: formData.get('email'),
      subject: formData.get('subject'),
      message: formData.get('message'),
    };

    try {
      const res = await fetch('/api/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || 'Failed to send. Try again later.');
      }
      setEmailSubmitted(true);
      form.reset();
    } catch (err) {
      setError(err.message);
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className='grid md:grid-cols-2 my-24 md:my-12 px-4 py-8 gap-20'>
        <div>
            <h5 className='sm:text-3xl md:text-4xl text-5xl font-bold text-blue-400 mb-6'>Send Me A Message</h5>
            <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
      <div className='mb-6'>
        <label htmlFor="email" className='text-white block mb-2 text-xl font-medium'>
          Your Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className='p-2 w-full rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-400'
          placeholder='Enter your email address'
          required
        />

        <label htmlFor="subject" className='text-white block mb-2 text-xl font-medium mt-4'>
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          className='p-2 w-full rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-400'
          placeholder='Enter your subject'
          required
        />
      </div>

      <div className='mb-6'>
        <label htmlFor="message" className='text-white block mb-2 text-xl font-medium'>Message</label>
        <textarea
          id="message"
          name="message"
          className='p-2 w-full h-25 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-400'
          placeholder='Enter your message'
          required
        />
      </div>

      <button
        type="submit"
        disabled={sending}
        className={`bg-blue-400 hover:bg-blue-300 text-white py-2.5 px-5 rounded-lg w-full ${sending ? 'opacity-70 cursor-not-allowed' : ''}`}
      >
        {sending ? 'Sending…' : 'Send Message'}
      </button>

      {emailSubmitted && (
        <p className='text-green-500 text-sm mt-2'>
          Your message has been sent successfully!
        </p>
      )}
      {!!error && (
        <p className='text-red-500 text-sm mt-2'>
          {error}
        </p>
      )}
    </form>
        </div>
        <div>
            <h5 className='sm:text-3xl md:text-4xl text-5xl font-bold text-blue-400  mb-6'>Let's Connect...</h5>
            <p className='text-white mb-10 w-full text-justify text-2xl'>
                {" "}
                I'm currently looking for new opportunities, my inbox is always open.
                whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
            <div className='socials flex flex-row gap-4 '>
                <span className='bg-blue-400 rounded-full p-2'>
                    <Link href="https://github.com/kanishkadharmarathne">
                        <FaGithub  size={50} color="black" />
                    </Link>
                </span>
                <span className='bg-blue-400 rounded-full p-2'>
                    <Link href="https://www.linkedin.com/in/kanishka-dharmarathne-8439ab289/">
                        <Image src={linkedinIcon} alt="LinkedIn Icon" />
                    </Link>
                </span>
                <span className='bg-blue-400 rounded-full p-2'>
                    <Link href="https://wa.me/94752446520">
                        <Image src={whatsappIcon} alt="WhatsApp Icon" />
                    </Link>
                </span>
                <span className='bg-blue-400 rounded-full p-2 w-17 h-17'>
                    <Link href="mailto:kanishkadewinda1102@gmail.com">
                        <Image src={emailIcon} alt="Email Icon" />
                    </Link>
                </span>
                <span className='bg-blue-400 rounded-full p-2 w-17 h-17'>
                    <Link href="https://www.instagram.com/kanishka_dm?igsh=ZDVodG1hYWw0bm5t">
                        <FaInstagram size={50} color="black" />
                    </Link>
                </span>
                <span className='bg-blue-400 rounded-full p-2 w-17 h-17'>
                    <Link href="https://www.facebook.com/share/1BWiT9c3K6/">
                        <FaFacebook size={50} color="black" />
                    </Link>
                </span>
                <span className='bg-blue-400 rounded-full p-2 w-17 h-17'>
                    <Link href="https://www.tiktok.com/@kanishka.dharmarathne?_r=1&_t=ZS-98GbeYza4vw">
                        <FaTiktok size={50} color="black" />
                    </Link>
                </span>
            
            </div>

        </div>
        
    </section>
  )
}

export default EmailSection;