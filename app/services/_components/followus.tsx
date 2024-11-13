"use client";
import React from 'react';
import { SocialIcon } from 'react-social-icons';

const FollowUs = () => {
    return (
        <main>
            {/* Other sections of your page */}
            <section className="my-8">
                <h2 className="text-xl font-bold text-center">Follow Us</h2>
                <SocialMediaLinks />
            </section>
        </main>
    );
};

const SocialMediaLinks = () => {
    return (
        <div className="flex space-x-4 justify-center mt-4">
            <SocialIcon 
                url="https://www.linkedin.com/in/yourprofile" 
                target="_blank" 
                className="transition-transform transform hover:scale-110" 
                bgColor="#0077B5" 
            />
            <SocialIcon 
                url="https://www.instagram.com/yourprofile" 
                target="_blank" 
                className="transition-transform transform hover:scale-110" 
                bgColor="#E1306C" 
            />
            <SocialIcon 
                url="https://twitter.com/yourprofile" 
                target="_blank" 
                className="transition-transform transform hover:scale-110" 
                bgColor="#1DA1F2" 
            />
            {/* Add more icons as needed */}
        </div>
    );
};

export default FollowUs;