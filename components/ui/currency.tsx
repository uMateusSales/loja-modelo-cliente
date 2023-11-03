"use client";

import { useState, useEffect } from "react";

export const priceFormatter = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});

interface CurrencyProps {
  value: string | number;
}

const Currency: React.FC<CurrencyProps> = ({ value }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="font-bold rounded-sm sm:text-base text-lg shadow-sm p-2 bg-neutral-100">
      {priceFormatter.format(Number(value))}{" "}
    </div>
  );
};

export default Currency;
