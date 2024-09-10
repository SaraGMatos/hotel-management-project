"use client";

interface Props {
  price: number;
  discount: number;
}

export const BookRoomCta = (children: Props) => {
  const { price, discount } = children;

  const discountPrice = price - (price / 100) * discount;

  return (
    <div className="px-7 py-6">
      <h3>
        <span
          className={`${discount ? "text-gray-400" : ""} font-bold text-xl`}
        >
          £{price}
        </span>
        {discount ? (
          <span className="font-bold text-xl">
            {" "}
            | Now <span className="text-tertiary-dark">£{discountPrice}</span> (
            {discount}% discount)
          </span>
        ) : (
          ""
        )}
      </h3>
    </div>
  );
};
