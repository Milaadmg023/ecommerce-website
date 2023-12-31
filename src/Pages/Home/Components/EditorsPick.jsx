import React from "react";

function EditorsPick() {
  return (
    <section>
      <h2 className="text-2xl text-center mt-4">Editor's Pick</h2>
      <p className="text-center text-gray-600 my-2">Problems trying to resolve the conflict between </p>
      <div className="grid lg:grid-cols-2 gap-4">
        <div className="relative">
          <img
            src="https://img.freepik.com/free-photo/portrait-handsome-smiling-stylish-young-man_158538-19393.jpg?w=996&t=st=1704012607~exp=1704013207~hmac=028156948ce52863756e8af971cb69d8436b5138b378459c4f05bf7246eb7ce0"
            alt="Men's Fashion"
            className="w-full h-auto"
            width={390}
            height={375}
            style={{ aspectRatio: "390 / 375", objectFit: "cover" }}
          />
          <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 absolute bottom-4 left-4 bg-white">
            MEN
          </button>
        </div>
        <div className="grid grid-rows-2 gap-4">
          <div className="relative">
            <img
              src="https://img.freepik.com/free-photo/happy-smiling-short-haired-girl-posing-yellow-wall-warm-colors-positive-mood_273443-1599.jpg?size=626&ext=jpg&ga=GA1.1.147134865.1687031868&semt=ais"
              alt="Women's Fashion"
              className="w-full h-auto"
              width={390}
              height={185}
              style={{ aspectRatio: "390 / 185", objectFit: "cover" }}
            />
            <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 absolute bottom-4 left-4 bg-white">
              WOMEN
            </button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="relative">
              <img
                src="https://img.freepik.com/free-photo/fashion-portrait-young-businessman-handsome-model-man-casual-cloth-suit-with-accesories-hands_158538-9450.jpg?w=360&t=st=1704012888~exp=1704013488~hmac=38643fc25a149652633f9ec9a7ff78390b8c98d2ccb2f6563bc4c92406713e87"
                alt="Accessories"
                className="w-full h-auto"
                width={190}
                height={185}
                style={{ aspectRatio: "190 / 185", objectFit: "cover" }}
              />
              <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 absolute bottom-4 left-4 bg-white">
                ACCESSORIES
              </button>
            </div>
            <div className="relative">
              <img
                src="https://img.freepik.com/free-photo/full-shot-kids-posing-together_23-2149853383.jpg?size=626&ext=jpg&ga=GA1.1.147134865.1687031868&semt=ais"
                alt="Kids' Fashion"
                className="w-full h-auto"
                width={190}
                height={185}
                style={{ aspectRatio: "190 / 185", objectFit: "cover" }}
              />
              <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 absolute bottom-4 left-4 bg-white">
                KIDS
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EditorsPick;
