import { Invoice } from "./classes/Invoice.js";
import { Payment } from "./classes/Payment.js";
import { Formatter } from "./interfaces/Formatter.js";

const form = document.querySelector(".new-item-form") as HTMLFormElement;
const type = document.querySelector("#type") as HTMLSelectElement;
const toOrFrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();
  let document: Formatter;

  if (type.value === "invoice") {
    document = new Invoice(toOrFrom.value, details.value, amount.valueAsNumber);
  } else {
    document = new Payment(toOrFrom.value, details.value, amount.valueAsNumber);
  }

  console.log(document.format());
});
