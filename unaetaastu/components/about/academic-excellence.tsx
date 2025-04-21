import { Award, BookOpen, Lightbulb, Rocket } from "lucide-react"

const AcademicExcellence = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold text-gray-800 dark:text-white mb-6">Academic Excellence</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Card 1 */}
          <div className="relative h-full rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')",
              }}
            ></div>
            <div className="absolute inset-0 bg-blue-900/70 backdrop-blur-sm"></div>
            <div className="relative p-6 h-full">
              <Award className="h-10 w-10 text-blue-200 mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">First ISO Certified</h3>
              <p className="text-blue-100">First ISO certified university in Ethiopia</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative h-full rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')",
              }}
            ></div>
            <div className="absolute inset-0 bg-green-900/70 backdrop-blur-sm"></div>
            <div className="relative p-6 h-full">
              <BookOpen className="h-10 w-10 text-green-200 mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">9/13 Departments</h3>
              <p className="text-green-100">9 out of 13 departments have postgraduate programs</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="relative h-full rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1581093588401-fbb62a02f120?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')",
              }}
            ></div>
            <div className="absolute inset-0 bg-yellow-900/70 backdrop-blur-sm"></div>
            <div className="relative p-6 h-full">
              <Lightbulb className="h-10 w-10 text-yellow-200 mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Research Leader</h3>
              <p className="text-yellow-100">Leading research university in the region</p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="relative h-full rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')",
              }}
            ></div>
            <div className="absolute inset-0 bg-purple-900/70 backdrop-blur-sm"></div>
            <div className="relative p-6 h-full">
              <Rocket className="h-10 w-10 text-purple-200 mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Global Success</h3>
              <p className="text-purple-100">Our graduates achieve global success</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AcademicExcellence
