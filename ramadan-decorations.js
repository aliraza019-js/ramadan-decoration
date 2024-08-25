document.addEventListener('DOMContentLoaded', function () {
    // Create the floating icons container
    const floatingIconsContainer = document.createElement('div');
    floatingIconsContainer.className = 'floating-wrapper';

    const numIcons = 7; // Number of floating icons (moons)

    for (let i = 0; i < numIcons; i++) {
        const iconElement = document.createElement('div');
        iconElement.className = 'floating-item';
        iconElement.innerText = '🌙'; // Only moon icons

        // Randomize position and animation duration
        iconElement.style.left = Math.random() * 100 + 'vw';
        iconElement.style.top = Math.random() * 100 + 'vh';
        iconElement.style.animationDuration = Math.random() * 10 + 10 + 's';

        // Add click event to remove the icon
        iconElement.addEventListener('click', function () {
            iconElement.remove();
        });

        floatingIconsContainer.appendChild(iconElement);
    }

    document.body.appendChild(floatingIconsContainer);

    // Create and add the header with hanging items
    const header = document.createElement('header');
    header.className = 'header';

    const headerContent = document.createElement('div');
    headerContent.className = 'header-content';

    const hangingWrapper = document.createElement('div');
    hangingWrapper.className = 'hanging-wrapper';

    const hangingItems = ['🌙', '🕌', '📜', '✨', '🕋'];

    hangingItems.forEach(icon => {
        const hangingItem = document.createElement('div');
        hangingItem.className = 'hanging-item';

        const hangingThread = document.createElement('div');
        hangingThread.className = 'hanging-thread';

        const hangingIcon = document.createElement('div');
        hangingIcon.className = 'hanging-icon';
        hangingIcon.innerText = icon;

        // Add click event to remove the icon
        hangingIcon.addEventListener('click', function () {
            hangingItem.remove();
        });

        hangingItem.appendChild(hangingThread);
        hangingItem.appendChild(hangingIcon);
        hangingWrapper.appendChild(hangingItem);
    });

    const staticHeaderIcons = document.createElement('div');
    staticHeaderIcons.className = 'static-header-icons';

    const staticHeaderIconLeft = document.createElement('div');
    staticHeaderIconLeft.className = 'static-header-icon top-left';
    staticHeaderIconLeft.innerText = '🌙';

    const staticHeaderIconRight = document.createElement('div');
    staticHeaderIconRight.className = 'static-header-icon top-right';
    staticHeaderIconRight.innerText = '🕌';

    staticHeaderIcons.appendChild(staticHeaderIconLeft);
    staticHeaderIcons.appendChild(staticHeaderIconRight);

    headerContent.appendChild(hangingWrapper);
    headerContent.appendChild(staticHeaderIcons);
    header.appendChild(headerContent);

    document.body.appendChild(header);

    // Create and add the footer with static icons
    const footer = document.createElement('footer');
    footer.className = 'footer';

    const footerContent = document.createElement('div');
    footerContent.className = 'footer-content';

    const staticFooterIcons = [
        { className: 'top-left', icon: '🕌' },
        { className: 'top-right', icon: '🌙' },
        { className: 'bottom-left', icon: '🕋' },
        { className: 'bottom-right', icon: '📜' },
    ];

    staticFooterIcons.forEach(({ className, icon }) => {
        const staticFooterIcon = document.createElement('div');
        staticFooterIcon.className = `static-footer-icon ${className}`;
        staticFooterIcon.innerText = icon;

        // Add click event to remove the icon
        staticFooterIcon.addEventListener('click', function () {
            staticFooterIcon.remove();
        });

        footerContent.appendChild(staticFooterIcon);
    });

    footer.appendChild(footerContent);
    document.body.appendChild(footer);
});

// Add styles dynamically
const style = document.createElement('style');
style.textContent = `
    body {
        margin: 0;
        padding: 0;
        overflow: hidden;
        background-size: cover;
        font-family: 'Arial', sans-serif;
        color: #ffffff;
    }
    
    .header {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 150px;
        background-color: transparent;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 10;
    }

    .header-content {
        position: relative;
        width: 100%;
        height: 100%;
    }

    .hanging-wrapper {
        position: relative;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 10%;
    }

    .hanging-item {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .hanging-thread {
        position: absolute;
        width: 2px;
        height: 150px;
        background-color: #000000;
        top: -150px;
        left: 50%;
        transform: translateX(-50%);
        pointer-events: none;
        animation: swing-thread 4s ease-in-out infinite;
    }

    .hanging-icon {
        font-size: 48px;
        z-index: 1;
        animation: swing-icon 4s ease-in-out infinite;
    }

    @keyframes swing-thread {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(30px); }
    }

    @keyframes swing-icon {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(30px); }
    }

    .floating-wrapper {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        pointer-events: none;
        overflow: hidden;
    }

    .floating-item {
        font-size: 48px;
        position: absolute;
        animation: floatDown 30s linear infinite;
        transform: translate(-50%, -50%);
        cursor: pointer;
    }

    .floating-item.large {
        font-size: 72px;
    }

    @keyframes floatDown {
        0% { transform: translate(-50%, -50%) translateY(-100vh); }
        100% { transform: translate(-50%, -50%) translateY(100vh); }
    }

    .footer {
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        background-color: rgba(255, 255, 255, 0.8);
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 10px 0;
        box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.2);
        z-index: 10;
    }

    .footer-content {
        display: flex;
        justify-content: space-between;
        width: 100%;
        max-width: 1200px;
        position: relative;
    }

    .static-footer-icon {
        font-size: 36px;
        color: #333;
        padding: 10px;
        background-color: transparent;
        position: absolute;
        cursor: pointer;
    }

    .top-left {
        top: 10px;
        left: 10px;
    }

    .top-right {
        top: 10px;
        right: 10px;
    }

    .bottom-left {
        bottom: 10px;
        left: 10px;
    }

    .bottom-right {
        bottom: 10px;
        right: 10px;
    }

    .static-header-icons {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }

    .static-header-icon {
        font-size: 36px;
        color: #333;
        padding: 10px;
        background-color: transparent;
        position: absolute;
        cursor: pointer;
    }
`;

document.head.appendChild(style);
