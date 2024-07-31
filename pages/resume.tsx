// pages/resume.tsx
import JobEntry from '../components/JobEntry';

const Resume: React.FC = () => {
  return (
    <div className="max-w-full md:max-w-3xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-6xl mx-auto p-4">
      <h1 className="text-center text-3xl font-bold mb-8">My Resume</h1>
      
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
          <li>Provisioning, installation, configuration, operation, and maintenance of hardware and software systems.</li>
          <li>Technical research and development.</li>
          <li>Assisting project teams with technical issues.</li>
          <li>Overseeing compliance activities.</li>
          <li>Implementing systems monitoring and alerting infrastructure.</li>
          <li>Designing backups, archiving, and disaster recovery plans.</li>
          <li>Managing the IT department.</li>
          <li>Budgetary planning.</li>
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
