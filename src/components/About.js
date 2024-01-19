// import React, { useContext, useEffect } from "react";

// import noteContext from "../context/notes/noteContext";

const About = () => {

  return (
    <div>
        <div className="container mt-5">
        <h2 className="text-center mb-4">About Us</h2>

        <div className="fs-5 ">
            <div className="text-center">
                <p>Welcome to <strong>NoteMaker</strong> – your go-to platform for seamless note-taking and organization.
                    We are proud to present a robust solution built on the MERN (MongoDB, Express.js, React.js, Node.js)
                    stack, ensuring a smooth and dynamic user experience.</p>

              </div>
                <h3 className="text-center">What Sets Us Apart?</h3>
                <ol>
                    <li><strong>Versatile Note-Making:</strong> Create, organize, and customize your notes
                        effortlessly.</li>
                    <li><strong>MERN Technology Backbone:</strong> Powered by MongoDB, Express.js, React.js, and Node.js,
                        our website leverages cutting-edge technologies.</li>
                    <li><strong>Secure Login and Registration:</strong> Your privacy and security are our top
                        priorities.</li>
                    <li><strong>User-Friendly Interface:</strong> We understand the importance of an intuitive and
                        user-friendly design.</li>
                </ol>

                <h3 className="text-center">Our Mission</h3>
                <p className="text-center">At <strong>NoteMaker</strong>, our mission is to empower users by providing a reliable and
                    feature-rich platform for note-taking. We strive to enhance productivity, foster creativity, and
                    simplify organization through an accessible and user-centric interface.</p>

                <h3 className="text-center">How It Works</h3>
                <ol>
                    <li><strong>Sign Up:</strong> Register for a free account to unlock the full potential of our
                        note-taking platform.</li>
                    <li><strong>Login:</strong> Access your account securely with our hassle-free login process.</li>
                    <li><strong>Create Notes:</strong> Dive into the world of note creation.</li>
                    <li><strong>Organize and Customize:</strong> Tailor your notes to suit your preferences.</li>
                </ol>

                <p className="text-center">Join us on the journey of efficient and organized note-taking. Experience the difference with
                    <strong>NoteMaker</strong> – where simplicity meets functionality.</p>
        </div>
    </div>

    </div>
  );
};

export default About;
