import React from 'react';
import Link from 'next/link';
import { FaInstagram ,FaFacebook ,FaTiktok ,FaLinkedin , FaWhatsapp ,FaGithub    } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { ArrowUpRightIcon } from '@heroicons/react/24/solid';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';

const socials = [
  { name: "GitHub", href: "https://github.com/kanishkadharmarathne", icon: FaGithub },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/kanishka-dharmarathne-8439ab289/", icon: FaLinkedin },
  { name: "WhatsApp", href: "https://wa.me/94752446520", icon: FaWhatsapp },
  { name: "Email", href: "mailto:kanishkadewinda1102@gmail.com", icon: MdOutlineEmail },
  { name: "Instagram", href: "https://www.instagram.com/kanishka_dm?igsh=ZDVodG1hYWw0bm5t", icon: FaInstagram },
  { name: "Facebook", href: "https://www.facebook.com/share/1BWiT9c3K6/", icon: FaFacebook },
  { name: "TikTok", href: "https://www.tiktok.com/@kanishka.dharmarathne?_r=1&_t=ZS-98GbeYza4vw", icon: FaTiktok },
];

const EmailSection = () => {
  return (
    <section id="contact" className='py-20 md:py-24'>
        <Reveal>
            <SectionHeading index="06" label="contact" title="Let's Connect..." />
        </Reveal>

        <Reveal>
            <div className='glass relative overflow-hidden rounded-2xl p-6 sm:p-10'>
                <div className='pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-accent-2/20 blur-3xl' />
                <div className='pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-accent/15 blur-3xl' />

                <div className='relative grid gap-10 lg:grid-cols-2 lg:items-center'>
                    <div>
                        <p className='text-lg sm:text-xl leading-relaxed text-ink/85'>
                            I&apos;m currently looking for new opportunities, my inbox is always open.
                            whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
                        </p>
                        <a
                            href="mailto:kanishkadewinda1102@gmail.com"
                            className='btn btn-primary mt-8'
                        >
                            <MdOutlineEmail className='h-5 w-5' />
                            Say Hello
                        </a>
                        <p className='mt-4 break-all font-mono text-sm text-muted'>
                            kanishkadewinda1102@gmail.com
                        </p>
                    </div>

                    <div>
                        <p className='font-mono text-[11px] uppercase tracking-[0.2em] text-muted'>Find me on</p>
                        <div className='socials mt-4 grid grid-cols-2 sm:grid-cols-3 gap-3'>
                            {socials.map((social) => (
                                <Link
                                    key={social.name}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className='group flex items-center gap-3 rounded-xl border border-line bg-white/[0.03] px-4 py-3 text-sm text-ink/85 transition-all hover:-translate-y-1 hover:border-accent/50 hover:bg-accent/10 hover:text-ink hover:shadow-[0_10px_30px_-10px_rgba(34,211,238,0.7)]'
                                >
                                    <social.icon className='h-5 w-5 shrink-0 text-muted transition-colors group-hover:text-accent' />
                                    <span className='flex-1'>{social.name}</span>
                                    <ArrowUpRightIcon className='h-3.5 w-3.5 text-muted opacity-0 transition-opacity group-hover:opacity-100' />
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </Reveal>
    </section>
  )
}

export default EmailSection;
