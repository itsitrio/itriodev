// pages/resume.tsx
import React, { useState } from 'react';
import Head from 'next/head';
import JobEntry from '../components/JobEntry';
import styles from '../styles/resume.module.css';
import skillsStyles from '../styles/TechnicalSkills.module.css';
import { FaCloud, FaLock, FaServer, FaPhone, FaShieldAlt, FaNetworkWired } from 'react-icons/fa';
import { FiServer as FaVirtualMachine } from 'react-icons/fi';

const Resume: React.FC = () => {
  return (
    <>
      <Head>
        <title>Nickolas James | Resume</title>
      </Head>
    <div className="max-w-full md:max-w-3xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-6xl mx-auto p-4">
      <header className={styles.header}>
        <h1 className={styles.header}>Nickolas James</h1>
        <div className={styles.buttonGroup}>
          <a href="mailto:hello@nickjames.us">Email</a>
          <a href="tel:+16025920590">Phone</a>
          <a href="https://www.linkedin.com/in/itsnickjames" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </header>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Summary</h2>
        <p className="mb-4">
          An experienced IT Manager and Systems Administrator with a strong background in hardware and software systems, technical research and development, and compliance activities. Skilled in managing IT departments, implementing monitoring and alerting infrastructure, and designing backup and disaster recovery plans.
        </p>
      </section>
      <section className={`${skillsStyles.skillsSection}`}>
        <h2>Technical Skills</h2>
        <ul className={skillsStyles.skillsList}>
          <li>
            <strong>Cloud SaaS & Remote Management</strong>
            <span>Azure Virtual Desktop, Azure VMSS, Powershell, Citrix Virtual Apps & Desktops, ConnectWise Automate</span>
          </li>
          <li>
            <strong>Authentication & Identity Management</strong>
            <span>DUO MFA, Microsoft Active Directory, Microsoft Entra ID, Microsoft Intune, Microsoft Purview</span>
          </li>
          <li>
            <strong>Hardware & OS</strong>
            <span>Dell, HPE, Ubiquiti, Microsoft Windows, macOS, Linux, Android, iOS, Windows Server, TrueNAS, unRAID</span>
          </li>
          <li>
            <strong>VoIP Telephony</strong>
            <span>Broadworks R22, Broadsoft M6, Asterisk, Shoretel, SIP, Polycom Phones, Cisco Phones, Call Flow Design, OCOM/Palladian, SIP Trunking</span>
          </li>
          <li>
            <strong>Compliance & Security</strong>
            <span>PCI Compliance, NIST 800-171r2, Data Protection, Cybersecurity Best Practices</span>
          </li>
          <li>
            <strong>Networking</strong>
            <span>DHCP, DNS, Cisco Routing & Switching, TCP/IP, OSI Model, SSH</span>
          </li>
          <li>
            <strong>Virtualization</strong>
            <span>VMware ESXi & vCenter, Proxmox/KVM</span>
          </li>
        </ul>
      </section>      
      
      
      
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Work Experience</h2>
        <JobEntry
          title="IT Manager/Systems Administrator"
          company="ASC Sunstone Circuits, LLC"
          location="Oregon, USA"
          dates="November 2022 - Present"
          logo="sunstone-logo.png"
          isOpenByDefault={true}
        >
          <li>Provisioning, installation, configuration, operation, and maintenance of hardware and software systems.</li>
          <li>Technical research and development.</li>
          <li>Assisting project teams with technical issues.</li>
          <li>Overseeing compliance activities.</li>
          <li>Implementing systems monitoring and alerting infrastructure.</li>
          <li>Designing backups, archiving, and disaster recovery plans.</li>
          <li>Managing the IT department.</li>
          <li>Budgetary planning.</li>
        </JobEntry>
        <JobEntry
          title="Event Logistics Coordinator"
          company="WaterWolf Media, LLC"
          location="Remote"
          dates="December 2023 - Present"
          logo="waterwolf-logo.png"
        >
          <li>Helped bolster recognition by standardizing the application of brand logos and assets through the creation of a unified guideline document.</li>
          <li>Facilitated engagements with non-profit organizations hosting public and paid events nationwide.</li>
          <li>Organized and assisted with event planning and marketing efforts, including composing copy, designing material, and publishing content packages consistent with expectations.</li>
          <li>Performed project management tasks to ensure deadlines were met either on-time or ahead of scheduled where possible.</li>
        </JobEntry>
        <JobEntry
          title="Professional Services Engineer"
          company="Executech"
          location="Arizona, USA"
          dates="February 2020 - November 2022"
          logo="executech-logo.jpg"
        >
          <li>Designed and implemented network and server infrastructure, managed client expectations and project resources, and resolved issues.</li>
          <li>Created professional documentation for implementations, facilitated hand-offs between teams and clients, and ensured compliance with HIPAA, SOC2, and NIST.</li>
          <li>Used Sophos security products to monitor and secure client environments, including Firewall, Intercept X Advanced with MTR, and Email Gateway.</li>
          <li>Lead a team of approximately 4-6 technicians in day-to-day activities, training, and more.</li>
        </JobEntry>
        <JobEntry
          title="System Administrator"
          company="Echelon Technologies"
          location="Arizona, USA"
          dates="August 2019 - Febrary 2020"
          logo="ettech-logo.png"
        >
          <li>Worked with existing clients to ensure deployed solutions were operating within expectations, and provided recommendations for improvements and upgrades where applicable. </li>
          <li>Implimented and maintained the internal knowledgebase for the organization. </li>
          <li>Monitored, maintained and services over 400 endpoints for over 70 clients. </li>
          <li>Provisioned and deployed Windows Server 2012 hosts and virtual machines, using Hyper-V or VMWare ESXi as required or warranted.</li>
        </JobEntry>
        <JobEntry
          title="VoIP Technical Support Specialist"
          company="J-Curve Technologies"
          location="Arizona, USA"
          dates="June 2018 - August 2019"
          logo="jcurve-logo.jpg"
        >
          <li>Utilized Cisco Broadworks, and Broadsoft M6 to manage and troubleshoot SIP voice endpoints while providing &quot;White Glove&quot; business-to-business technical support for a large telecommunications company.</li>
          <li>Performed monitoring of T1 through T3 circuits and POTS connections, managed Cisco and Adtran routers and switches, verified DHCP pools, and performed network troubleshooting using the OSI and TCP/IP models.</li>
          <li>Engaged advanced technical contacts when necessary to resolve out-of-scope issues, and performed peer leadership tasks as requested by management, such as coaching and training.</li>
        </JobEntry>
        <JobEntry
          title="Manager of Technology"
          company="M&D Playhouse"
          location="New Hampshire, USA"
          dates="October 2011 - December 2018"
          logo="mdplayhouse.jpg"
        >
          <li>Managed all aspects of the company network to build, deploy and maintain a full Active Directory environment.</li>
          <li>Designed and implemented an Asterisk VoIP PBX consisting of soft-phone and Cisco endpoints.</li>
          <li>Maintained the company Point of Sale systems for both ticketing and concessions, and lead in training and deployments.</li>
        </JobEntry>
        <JobEntry
          title="Production Assistant"
          company="Whitehorse Press"
          location="New Hampshire, USA"
          dates="October 2013 - October 2016 "
          logo="whitehorse-logo.jpg"
        >
          <li>Produced email marketing materials that were delivered weekly to over 40,000 active subscribers. </li>
          <li>Managed and maintained a Magento eCommerce installation and import/export of product inventory counts from multiple systems.</li>
          <li>Proofread works being sent to print.</li>
        </JobEntry>
        {/* Add more JobEntry components as needed */}
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Education</h2>
        <JobEntry
          title="B.S. Information Technology"
          company="Southern New Hampshire University"
          location="Manchester, NH"
          dates="May 2022"
        >
        </JobEntry>
        {/* Add more JobEntry components as needed */}
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Recent Projects</h2>
        <JobEntry
          title="Project Name"
          company="Organization/Client"
          location="Location"
          dates="Project Date"
        >
        </JobEntry>
        {/* Add more JobEntry components as needed */}
      </section>
    </div>
    </>
  );
};

export default Resume;
