// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", () => {
  // Animate the #leaf element
  gsap.to("#leaf", {
    y: -10, // Move up by 10px for the bounce
    duration: 0.5, // Duration of the bounce
    repeat: -1, // Infinite repeat
    yoyo: true, // Reverse the animation
    ease: "power1.inOut", // Smooth easing for the bounce
  });

  gsap.to("#leaf", {
    rotation: 15, // Rotate 15 degrees for the swing
    transformOrigin: "50% 0%", // Set the pivot point at the top center of the leaf
    duration: 2, // Duration of the swing
    repeat: -1, // Infinite repeat
    yoyo: true, // Reverse the animation
    ease: "sine.inOut", // Smooth easing for the swing
  });

  // Adjusted animation for left-to-right mirrored swing motion
  gsap.to("#leaf", {
    rotation: -15, // Start with -15 degrees
    transformOrigin: "50% 0%", // Pivot point remains the same
    duration: 2, // Duration of the swing
    repeat: -1, // Infinite repeat
    yoyo: true, // Reverse the animation
    ease: "sine.inOut", // Smooth easing for the swing
  });
});