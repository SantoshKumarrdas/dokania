"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';

const VideoSection = ({ videoUrl = '/videos/video.mp4', poster, autoplay = true }) => {
    const [videoError, setVideoError] = useState(false);
    // helpers to detect video type
    const isLocal = typeof videoUrl === 'string' && videoUrl.startsWith('/');
    const isVideoFile = typeof videoUrl === 'string' && /\.(mp4|webm|ogg)(\?.*)?$/.test(videoUrl);
    const isYouTube = typeof videoUrl === 'string' && /youtube\.com|youtu\.be/.test(videoUrl);

    // if a youtube short/link is provided, convert to embed url
    const getYouTubeEmbed = (url) => {
        try {
            // youtu.be/ID
            let id = null;
            const byId = /youtu\.be\/(.+)$/.exec(url);
            if (byId) id = byId[1].split('?')[0];

            // youtube.com/watch?v=ID
            if (!id) {
                const m = url.match(/[?&]v=([^&]+)/);
                if (m && m[1]) id = m[1];
            }

            // embed url: /embed/ID
            if (!id) {
                const em = url.match(/embed\/([^?]+)/);
                if (em && em[1]) id = em[1];
            }

            if (id) {
                // build embed url; if autoplay requested add mute & loop via playlist param
                if (autoplay) {
                    return `https://www.youtube.com/embed/${id}?autoplay=1&mute=1&loop=1&playlist=${id}&rel=0`;
                }
                return `https://www.youtube.com/embed/${id}`;
            }

            // fallback: return original URL
            return url;
        } catch (e) {
            return url;
        }
    };

    const embedUrl = isYouTube ? getYouTubeEmbed(videoUrl) : videoUrl;

    return (
        <section className="py-14 bg-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-[#E06B80]">Watch Our Introduction</h2>
                    <p className="text-gray-600 mt-2">A short overview of our capabilities and services.</p>
                </motion.div>

                {/* Responsive 16:9 container */}
                <div className="w-full max-w-5xl mx-auto">
                    <div className="relative" style={{ paddingTop: '56.25%' }}>
                        {isVideoFile || isLocal ? (
                            !videoError ? (
                                <video
                                    src={videoUrl}
                                    poster={poster}
                                    controls
                                    onError={() => setVideoError(true)}
                                    className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg object-cover"
                                    autoPlay={autoplay}
                                    muted={autoplay}
                                    loop={autoplay}
                                    playsInline
                                />
                            ) : (
                                <div className="absolute inset-0 flex items-center justify-center bg-gray-100 rounded-lg">
                                    <div className="text-center px-6">
                                        <p className="text-gray-700 mb-3">Video file not found at <code className="text-sm">{videoUrl}</code></p>
                                        <p className="text-gray-600">Place a file named <code>video.mp4</code> inside <code>/public/videos/</code> or pass a valid URL to the component.</p>
                                    </div>
                                </div>
                            )
                        ) : (
                            <iframe
                                src={embedUrl}
                                title="Company Overview"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg border"
                            />
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default VideoSection;
