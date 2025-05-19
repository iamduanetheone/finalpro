import Link from 'next/link';

// Define types for samples
type AcademicSample = {
  id: string;
  title: string;
  subject: string;
  grade: string;
  excerpt: string;
  length: string;
  format: string;
};

type CareerSample = {
  id: string;
  title: string;
  subject: string;
  result: string;
  excerpt: string;
  length: string;
  format: string;
};

type Sample = AcademicSample | CareerSample;

type Category = {
  id: string;
  title: string;
  description: string;
  samples: Sample[];
};

// Define sample document types
const sampleCategories: Category[] = [
  {
    id: 'academic-essays',
    title: 'Academic Essays',
    description: 'Examples of high-scoring argumentative, expository, and analytical essays in various disciplines.',
    samples: [
      {
        id: 'literary-analysis',
        title: 'Literary Analysis Essay',
        subject: 'English Literature',
        grade: 'A+ (98%)',
        excerpt: 'This comparative analysis examines the representation of gender roles in Virginia Woolf\'s "Mrs. Dalloway" and James Joyce\'s "Ulysses"...',
        length: '12 pages',
        format: 'MLA'
      },
      {
        id: 'philosophical-essay',
        title: 'Philosophical Argument Essay',
        subject: 'Philosophy',
        grade: 'A (94%)',
        excerpt: 'This essay critically examines Kant\'s categorical imperative in relation to contemporary ethical dilemmas in bioethics...',
        length: '8 pages',
        format: 'Chicago'
      },
      {
        id: 'historical-analysis',
        title: 'Historical Analysis Essay',
        subject: 'History',
        grade: 'A (95%)',
        excerpt: 'By analyzing primary sources from the period, this essay offers a new interpretation of economic factors that influenced the Treaty of Versailles...',
        length: '10 pages',
        format: 'Chicago'
      }
    ]
  },
  {
    id: 'research-papers',
    title: 'Research Papers',
    description: 'Example research papers demonstrating thorough methodology, literature review, and original analysis.',
    samples: [
      {
        id: 'psychology-research',
        title: 'Psychology Research Paper',
        subject: 'Cognitive Psychology',
        grade: 'A+ (97%)',
        excerpt: 'This experimental study investigates the relationship between working memory capacity and second language acquisition among adult learners...',
        length: '15 pages',
        format: 'APA'
      },
      {
        id: 'environmental-science',
        title: 'Environmental Impact Study',
        subject: 'Environmental Science',
        grade: 'A (93%)',
        excerpt: 'Using GIS analysis and field sampling, this research paper examines the impact of urban development on local watershed quality...',
        length: '18 pages',
        format: 'APA'
      },
      {
        id: 'sociology-research',
        title: 'Sociological Research Paper',
        subject: 'Sociology',
        grade: 'A (96%)',
        excerpt: 'This mixed-methods study explores the changing dynamics of community formation in digital spaces versus traditional neighborhoods...',
        length: '16 pages',
        format: 'ASA'
      }
    ]
  },
  {
    id: 'dissertations',
    title: 'Thesis & Dissertation Excerpts',
    description: 'Samples from successful master\'s theses and doctoral dissertations across various fields.',
    samples: [
      {
        id: 'phd-literature',
        title: 'Literature PhD Dissertation',
        subject: 'Comparative Literature',
        grade: 'Distinction',
        excerpt: 'This dissertation explores the intersection of postcolonial theory and environmental humanities in contemporary Caribbean literature...',
        length: 'Chapter 3 (30 pages)',
        format: 'MLA'
      },
      {
        id: 'masters-psychology',
        title: 'Psychology Master\'s Thesis',
        subject: 'Clinical Psychology',
        grade: 'High Distinction',
        excerpt: 'This thesis evaluates the efficacy of mindfulness-based cognitive therapy interventions for treatment-resistant depression...',
        length: 'Methodology (20 pages)',
        format: 'APA'
      }
    ]
  },
  {
    id: 'resumes-cvs',
    title: 'Resumes & CVs',
    description: 'Professional resume and curriculum vitae samples for various career stages and industries.',
    samples: [
      {
        id: 'executive-resume',
        title: 'Executive Resume',
        subject: 'Technology Leadership',
        result: '4 interviews within 2 weeks',
        excerpt: 'Strategic technology executive with 15+ years of experience driving digital transformation and building high-performance teams...',
        length: '2 pages',
        format: 'ATS-Optimized'
      },
      {
        id: 'academic-cv',
        title: 'Academic Curriculum Vitae',
        subject: 'University Professor',
        result: 'Secured tenure-track position',
        excerpt: 'Researcher and educator with publication history in top-tier journals and 6 years of teaching experience...',
        length: '4 pages',
        format: 'Academic Standard'
      },
      {
        id: 'career-change-resume',
        title: 'Career Change Resume',
        subject: 'Finance to Data Science',
        result: 'Position secured at tech company',
        excerpt: 'Finance professional transitioning to data science with demonstrated analytical skills and newly acquired technical expertise...',
        length: '2 pages',
        format: 'Functional/Hybrid'
      }
    ]
  },
  {
    id: 'cover-letters',
    title: 'Cover Letters',
    description: 'Effective cover letters that helped clients secure interviews and positions.',
    samples: [
      {
        id: 'entry-level',
        title: 'Entry-Level Position Cover Letter',
        subject: 'Marketing Assistant',
        result: 'Interview invitation',
        excerpt: 'As a recent graduate with hands-on digital marketing experience through internships and academic projects, I was excited to see your opening...',
        length: '1 page',
        format: 'Modern'
      },
      {
        id: 'senior-position',
        title: 'Senior Position Cover Letter',
        subject: 'Director of Operations',
        result: 'Advanced to final round',
        excerpt: 'With 10+ years of experience optimizing operations and reducing costs while improving service quality, I offer the leadership your expanding company needs...',
        length: '1 page',
        format: 'Traditional'
      }
    ]
  },
  {
    id: 'personal-statements',
    title: 'Personal Statements',
    description: 'Compelling personal statements for graduate school, medical school, and other program applications.',
    samples: [
      {
        id: 'law-school',
        title: 'Law School Personal Statement',
        subject: 'J.D. Program Application',
        result: 'Accepted with scholarship',
        excerpt: 'My work advocating for asylum seekers revealed the profound impact of legal representation on vulnerable populations and confirmed my commitment to pursuing public interest law...',
        length: '2 pages',
        format: 'Standard'
      },
      {
        id: 'medical-school',
        title: 'Medical School Personal Statement',
        subject: 'MD Program Application',
        result: 'Multiple acceptances',
        excerpt: 'The experience of coordinating care for my grandmother through a complex healthcare system showed me both the importance of patient advocacy and the need for compassionate physicians...',
        length: '1 page',
        format: 'AMCAS'
      }
    ]
  }
];

// Type guard to check if a sample is an academic sample or career sample
const isAcademicSample = (sample: Sample): sample is AcademicSample => {
  return 'grade' in sample;
};

export default function SamplesPage() {
  return (
    <div className="bg-white">
      <div className="px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold tracking-tight text-slate-800 sm:text-5xl">
              Document Samples
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-600 max-w-2xl mx-auto">
              Browse our collection of exemplary academic and professional documents. 
              Each sample demonstrates our commitment to excellence, clarity, and effectiveness.
            </p>
          </div>

          {/* Category Navigation */}
          <div className="mb-12">
            <div className="flex flex-wrap justify-center gap-2">
              {sampleCategories.map((category) => (
                <a
                  key={category.id}
                  href={`#${category.id}`}
                  className="px-4 py-2 bg-slate-100 hover:bg-slate-200 rounded-full text-slate-700 text-sm font-medium transition-all"
                >
                  {category.title}
                </a>
              ))}
            </div>
          </div>

          {/* Sample Categories */}
          <div className="space-y-24">
            {sampleCategories.map((category) => (
              <section key={category.id} id={category.id} className="scroll-mt-24">
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-slate-800 sm:text-3xl mb-4">
                    {category.title}
                  </h3>
                  <p className="text-slate-600">{category.description}</p>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {category.samples.map((sample) => (
                    <div 
                      key={sample.id} 
                      className="bg-white border border-slate-200 rounded-xl shadow-sm hover:shadow-md transition-all overflow-hidden flex flex-col"
                    >
                      <div className="p-6 flex flex-col flex-grow">
                        <div className="flex justify-between items-start mb-4">
                          <h4 className="text-lg font-semibold text-slate-800">
                            {sample.title}
                          </h4>
                          <span className="inline-flex items-center rounded-full bg-green-50 px-2 py-1 text-xs font-medium text-green-700">
                            {sample.subject}
                          </span>
                        </div>
                        
                        <div className="mb-4 text-sm text-slate-500">
                          <div className="flex justify-between mb-1">
                            <span className="font-medium">Format:</span>
                            <span>{sample.format}</span>
                          </div>
                          <div className="flex justify-between mb-1">
                            <span className="font-medium">Length:</span>
                            <span>{sample.length}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="font-medium">
                              {isAcademicSample(sample) ? 'Grade:' : 'Result:'}
                            </span>
                            <span className="text-green-600 font-medium">
                              {isAcademicSample(sample) ? sample.grade : sample.result}
                            </span>
                          </div>
                        </div>
                        
                        <div className="text-sm text-slate-600 mb-4 flex-grow">
                          <p className="italic">&ldquo;{sample.excerpt}&rdquo;</p>
                        </div>
                        
                        <div className="mt-auto">
                          <a
                            href="#"
                            className="block w-full text-center px-4 py-2 bg-sky-100 text-sky-700 hover:bg-sky-200 rounded-lg font-medium transition-colors text-sm"
                          >
                            Request Full Sample
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>
          
          {/* CTA Section */}
          <div className="mt-24 bg-gradient-to-r from-sky-100 to-blue-100 rounded-2xl p-8 md:p-12 text-center">
            <h3 className="text-2xl font-bold text-slate-800 mb-4">Need a Custom Document?</h3>
            <p className="text-slate-700 mb-8 max-w-2xl mx-auto">
              Our team of expert academic writers and career professionals can create 
              personalized documents tailored to your specific needs and goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/get-a-quote" 
                className="inline-block bg-sky-600 hover:bg-sky-700 text-white font-semibold py-3 px-6 rounded-lg transition-all shadow-sm hover:shadow-md"
              >
                Request a Quote
              </Link>
              <Link 
                href="/contact" 
                className="inline-block bg-white hover:bg-slate-50 text-slate-700 font-semibold py-3 px-6 rounded-lg border border-slate-300 transition-all shadow-sm hover:shadow-md"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 