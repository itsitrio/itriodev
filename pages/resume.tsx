// pages/resume.tsx
import JobEntry from '../components/JobEntry';
import styles from '../styles/resume.module.css';

const Resume: React.FC = () => {
  return (
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

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Work Experience</h2>
        <JobEntry
          title="IT Manager/Systems Administrator"
          company="ASC Sunstone Circuits, LLC"
          location="Oregon, USA"
          dates="January 2020 - Present"
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
          location="Remote"
          dates="February 2020 - October 2022"
          logo="executech-logo.jpg"
        >
          <li>Designed and implemented network and server infrastructure, managed client expectations and project resources, and resolved issues.</li>
          <li>Created professional documentation for implementations, facilitated hand-offs between teams and clients, and ensured compliance with HIPAA, SOC2, and NIST.</li>
          <li>Used Sophos security products to monitor and secure client environments, including Firewall, Intercept X Advanced with MTR, and Email Gateway.</li>
          <li>Lead a team of approximately 4-6 technicians in day-to-day activities, training, and more.</li>
        </JobEntry>
        <JobEntry
          title="VoIP Technical Support Specialist"
          company="J-Curve Technologies"
          location="Tempe, AZ"
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
          location="North Conway, NH"
          dates="October 2011 - December 2018"
          logo="mdplayhouse.jpg"
        >
          <li>Managed all aspects of the company network to build, deploy and maintain a full Active Directory environment.</li>
          <li>Designed and implemented an Asterisk VoIP PBX consisting of soft-phone and Cisco endpoints.</li>
          <li>Maintained the company Point of Sale systems for both ticketing and concessions, and lead in training and deployments.</li>
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
  );
};

export default Resume;
