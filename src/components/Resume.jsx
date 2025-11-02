
import { FaDownload } from "react-icons/fa";

function Resume() {
  return (
    <section className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center px-4 py-12 pt-24">
      <h1 className="text-2xl md:text-3xl font-bold font-Audiowide text-blue-400 mb-4">
        My Resume
      </h1>
      <p className="text-gray-400 text-sm mb-6 text-center max-w-lg">
        Here’s a detailed overview of my skills, experience, and projects.  
        You can view it below or download the PDF directly.
      </p>

      {/* Resume Viewer */}
      <div className="w-full max-w-4xl h-[80vh] border border-gray-700 rounded-lg overflow-hidden shadow-lg shadow-blue-500/20">
        <iframe
          src="/AJIN_R.pdf"
          title="Ajin R Resume"
          width="100%"
          height="100%"
          className="rounded-lg"
        />
      </div>

      {/* Download Button */}
      <a
        href="/AJIN_R.pdf"
        download="Ajin_R_Resume.pdf"
        className="mt-6 inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg font-Audiowide shadow-md shadow-blue-500/30 transition-all duration-300"
      >
        <FaDownload /> Download Resume
      </a>
    </section>
  );
}

export default Resume;
