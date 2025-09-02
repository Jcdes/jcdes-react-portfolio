import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Passionate Software Developer
            </h3>

            <p className="text-muted-foreground">
              I specialize in Intelligent System where I am proficient in
              programming Java, Python, C, C#, JavaScript, HTML, CSS, React, and
              I have CISCO certifications in areas such as cybersecurity, IoT,
              networking, and Linux.
            </p>

            <p className="text-muted-foreground">
              I am passionate about creating software solutions and continuously
              seek to expand my skills, particularly in mastering different
              programming languages
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>

              
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Web Development</h4>
                  <p className="text-muted-foreground">Creating responsive websites using React JS</p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" /> </div>
                  <div className="text-left">
                  <h4 className="font-semibold text-lg">Education</h4>
                  <p className="text-muted-foreground">Bachelor of Science in Computer Science Specializing in Intelligent Systems</p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" /></div>
                  <div className="text-left">
                  <h4 className="font-semibold text-lg">Full-Stack WordPress Developer</h4>
                  <p className="text-muted-foreground">During my internship at ROC.PH Digital Marketing Services, I gained hands-on experience designing user-friendly interfaces and improving website navigation.</p>
                
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
