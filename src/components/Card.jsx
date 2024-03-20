import React from "react";

function Card() {
  return (
    <div className="max-w-xs p-1 rounded overflow-hidden shadow-lg">
      <img
        className="w-full"
        src="src\assets\pizza.avif"
        alt=""
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Card Title</div>
        <p className="text-gray-700 text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </p>
      </div>
      <div className="">
        <div className="">
          <div>
            <select className="">
              {Array.from(Array(6), (e, i) => {
                return (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                );
              })}
            </select>
            <select className="">
              <option value="half">Half</option>
              <option value="full">Full</option>
            </select>
            <div> I Total Price</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
