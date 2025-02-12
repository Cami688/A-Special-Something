// ================================================
// 💝 A Special Something For A Special Someone 💝
// ================================================

const CONFIG = {
    // Your Valentine's name that will appear in the title
    // Example: "Jade", "Sarah", "Mike"
    valentineName: "Juan",

    // The title that appears in the browser tab
    // You can use emojis! 💝 💖 💗 💓 💞 💕
    pageTitle: "Will You Perchance Be My Valentine? 💝",

    // Floating emojis that appear in the background
    // Find more emojis at: https://emojipedia.org
    floatingEmojis: {
        hearts: ['❤️', '🥵', '💝', '💗', '💩<- you'],  // Heart emojis
        bears: ['🧸', '🐻']                       // Cute bear emojis
    },

    // Questions and answers
    // Customize each question and its possible responses
    questions: {
        first: {
            text: "Do you like me?",                                    // First interaction
            yesBtn: "I Guess...",                                             // Text for "Yes" button
            noBtn: "H-H- Hell Nah",                                               // Text for "No" button
            secretAnswer: "Like you??, I LOVEE YOUU! ❤️"           // Secret hover message
        },
        second: {
            text: "How much do you love me?",                          // For the love meter
            startText: "You better slide it..",                                   // Text before the percentage
            nextBtn: "Next! (Impatient Ahh) "                                         // Text for the next button
        },
        third: {
            text: "Will you be my Valentine on February 14th, 2025? 🌹", // The big question!
            yesBtn: "Yes Of Course Baby I Love You So Much!",                                 // Text for "Yes" button
            noBtn: "Theres only one option."                                                 // Text for "No" button
        }
    },

    // Love meter messages
    // They show up depending on how far they slide the meter
    loveMessages: {
        extreme: "Yeahhhh It Better Be This Much 🤭💝😚",  // Shows when they go past 5000%
        high: "Keep Goinggg 😁😐💝",              // Shows when they go past 1000%
        normal: "So You Hate Me.. 🙎‍♀️😔"                           // Shows when they go past 100%
    },

    // Messages that appear after they say "Yes!"
    celebration: {
        title: "I Knew You'd Say Yes 🥰🤭👩‍❤️‍👨💖",
        message: "Te Amoo Muchisimo",
        emojis: "💖💝👩‍❤️‍💋‍👨💋❤️"  // These will bounce around
    },

    // Color scheme for the website
    // Use https://colorhunt.co or https://coolors.co to find beautiful color combinations
    colors: {
        backgroundStart: "#7D53DE",      // Gradient start (try pastel colors for a soft look)
        backgroundEnd: "#78E3FD",        // Gradient end (should complement backgroundStart)
        buttonBackground: "#D8B95C9",     // Button color (should stand out against the background)
        buttonHover: "#A0A7CD",          // Button hover color (slightly lighter than buttonBackground)
        textColor: "#59344F"             // Text color (make sure it's readable!)
    },

    // Animation settings
    // Adjust these if you want faster/slower animations
    animations: {
        floatDuration: "15s",           // How long it takes hearts to float up (10-20s recommended)
        floatDistance: "50px",          // How far hearts move sideways (30-70px recommended)
        bounceSpeed: "0.5s",            // Speed of bouncing animations (0.3-0.7s recommended)
        heartExplosionSize: 1.5         // Size of heart explosion effect (1.2-2.0 recommended)
    },

    // Background Music (Optional)
    // Add your own music URL after getting proper licenses
    music: {
        enabled: true,                     // Music feature is enabled
        autoplay: true,                    // Try to autoplay (note: some browsers may block this)
        musicUrl: "https://res.cloudinary.com/dx2349pv6/raw/upload/v1739353711/watch_scczjo", // Music streaming URL
        startText: "🎵 Play Music",        // Button text to start music
        stopText: "🔇 Stop Music",         // Button text to stop music
        volume: 0.5                        // Volume level (0.0 to 1.0)
    }
};

// Don't modify anything below this line unless you know what you're doing
window.VALENTINE_CONFIG = CONFIG; 
