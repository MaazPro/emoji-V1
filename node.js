const handleMouseMove = (e)=>{
    const {clientX, clientY} = e; // track the position of the mouse on the window.
   // console.log({clientX, clientY}); // if only e is passed then it return an object with multiple properties 

    // 0 - 1
    const {innerWidth, innerHeight} = window;
    const fractionX = clientX / innerWidth; // this will provide the value from range 0 - 1 because it is being divided by the biggest value (width: 1366)
    const fractionY = clientY / innerHeight;    

    // pupil position within the white circle with a width and height of 200px
    const pupilX = -70 + fractionX * 140; // this will ensure the value never exceed 200px
    const pupilY = -70 + fractionY * 140; // the reason negative value is added is because when the mouse is on the left the pupil should point left and not overspill when mouse is on the right
    console.log({pupilX, pupilY});
    document.querySelectorAll('.pupil')
    .forEach((el)=>{el.style.transform = `translate(${pupilX}px, ${pupilY}px)`});
}
window.addEventListener('mousemove', handleMouseMove);