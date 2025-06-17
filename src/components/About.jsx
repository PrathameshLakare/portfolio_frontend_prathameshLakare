function About() {
  return (
    <section id="about">
      <div className="flex flex-col md:flex-row gap-10 ">
        <main className="flex-1">
          <h1 className="text-4xl font-bold mb-2">Hello! I’m Prathamesh</h1>
          <div className="flex items-center gap-2 mb-4">
            <h2 className="text-2xl text-yellow-600 font-semibold">
              Fullstack Developer | MERN Stack
            </h2>
          </div>
          <div className="">
            <p className="text-1xl max-w-2xl text-muted-foreground mb-3">
              Hi, I’m Prathamesh, a full-stack developer with expertise in the
              MERN stack (MongoDB, Express.js, React, and Node.js). I enjoy
              building responsive and efficient web applications with a strong
              focus on clean design and performance. From developing interactive
              front-end interfaces to building secure and scalable backend
              systems, I’m comfortable working across the entire web development
              process.
            </p>
            <p className="max-w-2xl text-muted-foreground mb-6">
              I’m passionate about writing clean, maintainable code and
              continuously improving my skills by exploring new technologies.
              I’ve worked on several projects that reflect my problem-solving
              approach and attention to detail. I'm driven by a desire to create
              meaningful software that delivers real value to users.
            </p>
          </div>
        </main>
      </div>
    </section>
  );
}

export default About;
