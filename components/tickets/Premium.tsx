import Link from "next/link";

export default function Premium({ ticket }: any) {
  const isSoldedOut = ticket.type === "REGULAR TICKET";

  return (
    <div
      className={`w-[240px] h-[440px] lg:w-[312px] lg:h-[530px] flex flex-col justify-center gap-5 py-4 px-5 items-center 
       text-center bg-white drop-shadow-xl shadow-[#392740] rounded-3xl text-black font-medium, ${
         isSoldedOut ? "opacity-60" : ""
       }`}
    >
      <h3 className="font-bold text-2xl text-primary lg:text-3xl uppercase">
        {ticket.type}
      </h3>
      <div className="flex flex-col items-center text-center gap-2 text-base lg:text-xl text-primary">
        <p>{ticket.feature1}</p>
        <p>{ticket.feature2}</p>
        <p>{ticket.feature3}</p>
        <p>{ticket.feature4}</p>
        <p className="font-bold">{ticket.feature5}</p>
      </div>
      <hr
        style={{
          width: "80%",
          height: "2px",
          color: "#A64AC9",
          background: "#A64AC9",
        }}
      />
      <h3 className="font-bold text-xl lg:text-2xl text-primary uppercase py-5">
        {ticket.price}
      </h3>
      <Link
        className={`py-4 px-6 font-bold text-white uppercase transition-all duration-300 ease-in-out rounded-xl ${
          isSoldedOut
            ? "pointer-events-none bg-[#ccc] hover:bg-[#ccc] hover:text-white"
            : "bg-primary hover:bg-secondary hover:text-black"
        }`}
        href={isSoldedOut ? ticket.url : ""}
        aria-disabled={isSoldedOut}
      >
        {isSoldedOut ? "SOLD OUT" : "BUY"}
      </Link>
    </div>
  );
}
